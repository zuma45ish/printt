'use client'
import React, { useEffect, useState } from 'react';
import type { Review } from '@/lib/types';

export default function ReviewsPage() {
  const [list, setList] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [clientId, setClientId] = useState<string | null>(null);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    let mounted = true;
    // ensure client has a persistent clientId
    try {
      let id = localStorage.getItem('reviews_client_id');
      const flag = localStorage.getItem('reviews_submitted');
      if (!id) {
        id = `c_${Math.random().toString(36).slice(2, 10)}`;
        localStorage.setItem('reviews_client_id', id);
      }
      if (flag === 'true') setAlreadySubmitted(true);
      setClientId(id);
    } catch {
      // ignore localStorage errors
    }
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data: Review[]) => {
        if (mounted) setList(data);
      })
      .catch((err) => console.error('Fetch reviews error:', err))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !comment || !rating || !email) return;
    setSubmitting(true);
    try {
      if (alreadySubmitted) return;
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, comment, clientId, email }),
      });
      if (res.ok) {
        const newReview: Review = await res.json();
        setList((prev) => [newReview, ...prev]);
        setName('');
        setEmail('');
        setRating(5);
        setComment('');
        try {
          localStorage.setItem('reviews_submitted', 'true');
        } catch {}
        setAlreadySubmitted(true);
      } else {
        if (res.status === 409) {
          setAlreadySubmitted(true);
        } else console.error('Submit review failed');
      }
    } catch (err) {
      console.error('Submit review error:', err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section>
      <h1>Отзывы клиентов</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <div>
          <label>
            Имя
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Оценка
            <select value={String(rating)} onChange={(e) => setRating(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Отзыв
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
          </label>
        </div>
        <button type="submit" disabled={submitting}>{submitting ? 'Отправка...' : 'Оставить отзыв'}</button>
      </form>

      {alreadySubmitted && <p>Вы уже оставили отзыв с этим email.</p>}

      {loading ? (
        <p>Загрузка отзывов…</p>
      ) : (
        <ul>
          {list.map((r) => (
            <li key={r.id}>
              <strong>{r.name}</strong> — <em>{r.rating}/5</em>
              <p>{r.comment}</p>
              <time dateTime={r.date}>{r.date}</time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
