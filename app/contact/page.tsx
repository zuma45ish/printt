'use client';
import { title } from "@/components/primitives";

// src/app/contact/page.tsx
import React, { useState } from 'react';
import type { ContactPayload } from '@/lib/types';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState<ContactPayload>({ name: '', email: '', phone: '', message: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    }
  }

  return (
    <section>
      <h1 className={title()}>Свяжитесь с нами</h1>
      <p>Хотите задать вопрос или оформить заказ? Мы всегда рады помочь.</p>

      <ul>
        <li>📍 Адрес: ул. Ink Street, д. 245, Нью-Йорк, NY 10001</li>
        <li>📞 Телефон: (212) 555-0198</li>
        <li>Email: info@printmasters.com</li>
      </ul>

      <p>Или заполните форму ниже — мы ответим в течение одного рабочего дня.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Имя
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </label>
        <label>
          Телефон
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </label>
        <label>
          Сообщение
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </label>
        <button type="submit">Отправить</button>
      </form>

      {status === 'sending' && <p>Отправка...</p>}
      {status === 'sent' && <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>}
      {status === 'error' && <p>Ошибка отправки — попробуйте позже.</p>}

      <ul>
        <li>Пн–Пт: 9:00 – 18:00</li>
        <li>Сб: 10:00 – 16:00</li>
        <li>Вс: выходной</li>
      </ul>
    </section>
  );
}
