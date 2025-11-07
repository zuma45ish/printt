"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

const services = [
  {
    id: 1,
    title: "Вывески и дисплеи",
    description:
      "Интерьерные и наружные вывески, витринные наклейки, стенды для выставок — полностью на заказ.",
    features: [
      "Светящиеся вывески",
      "Витринные наклейки",
      "Выставочные стенды",
      "Информационные таблички",
    ],
    icon: "🪧",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Полиграфия для бизнеса",
    description:
      "Визитки, флаеры, буклеты, каталоги и папки — всё, что помогает выделить ваш бренд.",
    features: [
      "Визитные карточки",
      "Фирменные бланки",
      "Каталоги и брошюры",
      "Корпоративные папки",
    ],
    icon: "📄",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Рекламная продукция",
    description:
      "Фирменные футболки, кружки, ручки, пакеты и другие промо-товары для продвижения вашего бизнеса.",
    features: [
      "Брендированная одежда",
      "Промо-сувениры",
      "Корпоративные подарки",
      "Упаковка с логотипом",
    ],
    icon: "🎁",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Широкоформатная печать",
    description:
      "Баннеры, постеры, фотообои и наклейки любого размера для эффектного оформления.",
    features: [
      "Баннеры для событий",
      "Интерьерные постеры",
      "Фотообои на заказ",
      "Виниловые наклейки",
    ],
    icon: "🖼️",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Дизайн и брендинг",
    description:
      "Создание уникального фирменного стиля, логотипов и дизайн-макетов для печати.",
    features: [
      "Разработка логотипов",
      "Фирменный стиль",
      "Дизайн упаковки",
      "Макеты для печати",
    ],
    icon: "🎨",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Цифровая печать",
    description:
      "Быстрая и качественная печать малых тиражей с возможностью персонализации каждого экземпляра.",
    features: [
      "Печать малых тиражей",
      "Персонализация",
      "Срочная печать",
      "Цветная и ч/б печать",
    ],
    icon: "🖨️",
    gradient: "from-teal-500 to-blue-500",
  },
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = services.length - 1;
      if (nextIndex >= services.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <main className="flex flex-col bg-base-100 text-neutral">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl z-10"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Наши <span className="text-highlight">услуги</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-base-100/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            В <strong>PrintMasters</strong> мы предлагаем полный спектр решений
            для печати и брендинга — от индивидуальных заказов до комплексных
            корпоративных проектов.
          </motion.p>
        </motion.div>

        <div className="absolute inset-0 bg-[url('/textures/paper-light.png')] opacity-10 mix-blend-overlay"></div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Наши основные услуги
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-4xl px-2 sm:px-4"
            >
              <Card className="bg-white shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100">
                <CardHeader
                  className={`bg-gradient-to-r ${services[currentIndex].gradient} text-white p-6 sm:p-8 md:p-10`}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="text-5xl sm:text-6xl md:text-7xl">
                      {services[currentIndex].icon}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        {services[currentIndex].title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-white/90">
                        {services[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardBody className="p-6 sm:p-8 md:p-10">
                  <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                    Что мы предлагаем:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {services[currentIndex].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardBody>

                <CardFooter className="p-6 sm:p-8 md:p-10 pt-0 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all"
                    size="lg"
                  >
                    Узнать больше
                  </Button>
                  <Button
                    className="w-full sm:w-auto border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"
                    variant="bordered"
                    size="lg"
                  >
                    Заказать услугу
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button
            className="absolute left-2 sm:left-4 md:left-8 z-10 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg transition-all hidden sm:block"
            onClick={() => paginate(-1)}
            aria-label="Previous service"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute right-2 sm:right-4 md:right-8 z-10 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg transition-all hidden sm:block"
            onClick={() => paginate(1)}
            aria-label="Next service"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-6 sm:w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6 sm:hidden">
          <button
            className="bg-white border-2 border-gray-300 p-3 rounded-full shadow-md"
            onClick={() => paginate(-1)}
            aria-label="Previous service"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="bg-white border-2 border-gray-300 p-3 rounded-full shadow-md"
            onClick={() => paginate(1)}
            aria-label="Next service"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Все наши услуги
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader
                    className={`bg-gradient-to-r ${service.gradient} text-white p-4 sm:p-6`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl sm:text-4xl">{service.icon}</div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardBody className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-400"
                        >
                          <span className="text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
            Готовы начать свой проект?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
            Свяжитесь с нами сегодня, и мы поможем воплотить ваши идеи в жизнь с
            безупречным качеством печати.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              className="bg-white text-primary px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base"
              size="lg"
            >
              Связаться с нами
            </Button>
            <Button
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all text-sm sm:text-base"
              variant="bordered"
              size="lg"
            >
              Получить консультацию
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
