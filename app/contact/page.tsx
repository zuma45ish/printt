'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import {addToast} from "@heroui/toast";
import type { ContactPayload } from "@/lib/types";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
        addToast({
          title: "Форма отправлена",
          description: "Спасибо! Мы свяжемся с вами в ближайшее время.",
          color: "success",
        });
      } else {
        setStatus("error");
        addToast({
          title: "Ошибка",
          description: "Не удалось отправить форму. Попробуйте позже.",
          color: "danger",
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
      addToast({
        title: "Ошибка",
        description: "Не удалось отправить форму. Попробуйте позже.",
        color: "danger",
      });
    }
  }

  return (
    <main className="min-h-screen bg-base-100 text-neutral py-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-6 w-full max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Свяжитесь с нами
          </h1>

          <p className="text-lg text-muted-foreground">
            Хотите задать вопрос или оформить заказ? Мы всегда рады помочь — просто позвоните, напишите нам или заполните форму ниже.
          </p>

          <ul className="text-base leading-relaxed space-y-2">
            <li>📍 <strong>Адрес:</strong> ул. Ink Street, д. 245, Нью-Йорк, NY 10001</li>
            <li>📞 <strong>Телефон:</strong> (212) 555-0198</li>
            <li>✉️ <strong>Email:</strong> info@printmasters.com</li>
          </ul>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-primary mb-1">🕓 График работы</h2>
            <ul className="text-sm text-muted-foreground leading-relaxed">
              <li>Пн–Пт: 9:00 – 18:00</li>
              <li>Сб: 10:00 – 16:00</li>
              <li>Вс: выходной</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Card shadow="lg" className="p-6 bg-white border border-gray-100 rounded-2xl">
            <CardHeader className="pb-2">
              <h2 className="text-2xl font-semibold text-primary text-center">
                Форма обратной связи
              </h2>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  variant="bordered"
                  radius="lg"
                />
                <Input
                  type="email"
                  label="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  variant="bordered"
                  radius="lg"
                />
                <Input
                  label="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  variant="bordered"
                  radius="lg"
                />
                <Textarea
                  label="Сообщение"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  minRows={4}
                  variant="bordered"
                  radius="lg"
                />
                <Button
                  type="submit"
                  color="primary"
                  className="w-full text-white font-semibold py-3 rounded-xl mt-4"
                  isLoading={status === "sending"}
                >
                  {status === "sending" ? "Отправка..." : "Отправить"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
