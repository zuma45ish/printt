"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-100 text-neutral">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center h-screen px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl z-10"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Добро пожаловать в{" "}
            <span className="text-highlight">PrintMasters</span> — Совершенство
            в каждой печати
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-base-100/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            В <strong>PrintMasters</strong> мы превращаем ваши идеи в яркие,
            качественные отпечатки, которые действительно привлекают внимание. От
            баннеров и визиток до вывесок и промо-материалов — мы ваш надежный
            партнер на каждом этапе печати.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all"
            >
              Связаться с нами
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all"
            >
              Посмотреть образцы
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 bg-[url('/textures/paper-light.png')] opacity-10 mix-blend-overlay"></div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-20 px-6 md:px-12 bg-base-100 text-neutral max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Почему выбирают нас
        </motion.h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "15+ лет опыта",
              desc: "Профессиональная печать и дизайн с проверенным качеством.",
            },
            {
              title: "98% довольных клиентов",
              desc: "Нам доверяют сотни компаний по всей стране.",
            },
            {
              title: "1 000 000+ отпечатков",
              desc: "Идеальная цветопередача и четкость на каждом заказе.",
            },
            {
              title: "Быстрые сроки",
              desc: "Срочная печать в день заказа — когда важно вовремя.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted mb-4">
            Будь то маркетинговая кампания, обновление бренда или подготовка к
            мероприятию — <strong>PrintMasters</strong> обеспечивает качество,
            надежность и внимание к деталям.
          </p>
          <h3 className="text-2xl font-display font-semibold text-primary">
            📦 Ваши идеи. Наша краска. Давайте создадим нечто действительно
            впечатляющее!
          </h3>
        </motion.div>
      </section>
    </main>
  );
}
