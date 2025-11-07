"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-100 text-neutral">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center h-screen px-4 sm:px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl z-10"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Добро пожаловать в{" "}
            <span className="text-highlight">PrintMasters</span> — Совершенство
            в каждой печати
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-base-100/90"
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
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-white px-5 sm:px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all text-sm sm:text-base"
            >
              Связаться с нами
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white px-5 sm:px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all text-sm sm:text-base"
            >
              Посмотреть образцы
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 bg-[url('/textures/paper-light.png')] opacity-10 mix-blend-overlay"></div>
      </section>

      {/* Почему выбирают нас - Responsive Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-base-100 text-neutral max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Почему выбирают нас
        </motion.h2>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center items-stretch gap-4 sm:gap-6 lg:gap-8">
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
            <motion.div
              key={index}
              className="bg-white w-full sm:w-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex-1 min-w-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-primary leading-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-muted mb-4 leading-relaxed">
            Будь то маркетинговая кампания, обновление бренда или подготовка к
            мероприятию — <strong>PrintMasters</strong> обеспечивает качество,
            надежность и внимание к деталям.
          </p>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary leading-tight">
            📦 Ваши идеи. Наша краска. Давайте создадим нечто действительно
            впечатляющее!
          </h3>
        </motion.div>
      </section>
    </main>
  );
}