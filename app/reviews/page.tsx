'use client';
import React, { useEffect, useState } from 'react';
import type { Review } from '@/lib/types';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Input, Textarea } from '@heroui/input';
import {Select, SelectItem} from "@heroui/select";
import { Button } from '@heroui/button';
import { motion } from 'framer-motion';
import { Skeleton } from '@heroui/skeleton';
import {addToast} from "@heroui/toast";

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
    try {
      let id = localStorage.getItem('reviews_client_id');
      const flag = localStorage.getItem('reviews_submitted');
      if (!id) {
        id = `c_${Math.random().toString(36).slice(2, 10)}`;
        localStorage.setItem('reviews_client_id', id);
      }
      if (flag === 'true') setAlreadySubmitted(true);
      setClientId(id);
    } catch {}
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
      if (alreadySubmitted) {
        addToast({
                  title: "Ошибка",
                  description: "Вы уже оставили отзыв с этим email.",
                  color: "danger",
                });
        return;
      }
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
        addToast({
          title: "Успех",
          description: "Спасибо за отзыв!",
          color: "success",
        });
        try {
          localStorage.setItem('reviews_submitted', 'true');
        } catch {}
        setAlreadySubmitted(true);
      } else {
        if (res.status === 409) {
          setAlreadySubmitted(true);
          addToast({
                  title: "Ошибка",
                  description: "Вы уже оставили отзыв ранее.",
                  color: "danger",
                });
        } else {
          addToast({
                  title: "Ошибка",
                  description: "Не удалось отправить отзыв.",
                  color: "danger",
                });
        }
      }
    } catch (err) {
      addToast({
                  title: "Ошибка",
                  description: "Не удалось отправить отзыв.",
                  color: "danger",
                });
      console.error('Submit review error:', err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-base-100 text-neutral py-16 px-6 md:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-primary text-center"
        >
          Отзывы клиентов
        </motion.h1>

        {/* Review Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 shadow-md"
        >
          <Input
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            variant="bordered"
            radius="lg"
          />
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="bordered"
            radius="lg"
          />
          <Select
            label="Оценка"
            selectedKeys={[String(rating)]}
            onSelectionChange={(keys) => setRating(Number(Array.from(keys)[0]))}
          >
            {[5, 4, 3, 2, 1].map((num) => (
              <SelectItem key={num}>{num}</SelectItem>
            ))}
          </Select>
          <Textarea
            label="Отзыв"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minRows={4}
            required
            variant="bordered"
            radius="lg"
          />
          <Button
            type="submit"
            color="primary"
            className="w-full text-white font-semibold py-3 rounded-xl mt-4"
            isLoading={submitting}
          >
            {submitting ? 'Отправка...' : 'Оставить отзыв'}
          </Button>
        </motion.form>

        {alreadySubmitted && (
          <p className="text-center text-sm text-muted-foreground">
            Вы уже оставили отзыв с этим email.
          </p>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {loading ? (
            // Skeleton Loading
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-40 w-full rounded-xl bg-gray-100"
              />
            ))
          ) : list.length > 0 ? (
            list.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card shadow="sm" className="border border-gray-100">
                  <CardHeader className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-primary">{r.name}</h3>
                    <span className="text-yellow-500 font-medium">{'⭐'.repeat(r.rating)}</span>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-700 mb-2">{r.comment}</p>
                    <time className="text-sm text-muted-foreground">{r.date}</time>
                  </CardBody>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">Отзывов пока нет.</p>
          )}
        </div>
      </div>
    </main>
  );
}
