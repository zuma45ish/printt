import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

const values = [
  {
    id: 1,
    title: "Качество",
    description:
      "Мы используем передовые технологии печати и материалы высочайшего качества для достижения идеального результата.",
    icon: "⭐",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Надежность",
    description:
      "Соблюдаем сроки и выполняем обязательства — наша репутация построена на доверии клиентов.",
    icon: "🤝",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Инновации",
    description:
      "Постоянно совершенствуем технологии и методы работы, чтобы предлагать лучшие решения.",
    icon: "💡",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Персональный подход",
    description:
      "Каждый проект уникален — мы уделяем внимание деталям и находим решения под ваши задачи.",
    icon: "🎯",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-base-100 text-neutral">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="max-w-4xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
            О <span className="text-highlight">нас</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-base-100/90 leading-relaxed">
            Компания <strong>PrintMasters</strong> была основана в 2008 году с
            одной целью — объединить креативность и точность в мире печати.
          </p>
        </div>

        <div className="absolute inset-0 bg-[url('/textures/paper-light.png')] opacity-10 mix-blend-overlay"></div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12">
            Наша история
          </h2>

          <div className="space-y-6">
            <Card className="bg-white shadow-lg border border-gray-100">
              <CardBody className="p-6 sm:p-8 md:p-10">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Сегодня мы — это современная типография, известная качеством,
                  надежностью и персональным подходом. За годы работы мы
                  помогли сотням компаний создать яркие и запоминающиеся
                  материалы.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Мы используем передовые технологии печати и гордимся командой
                  профессионалов, которые заботятся о каждом заказе — от макета
                  до готового изделия.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Наши клиенты — это стартапы, малый и средний бизнес, крупные
                  компании и маркетинговые агентства. Независимо от масштаба
                  проекта, каждый заказ для нас — важен.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12">
            Наши ценности
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value) => (
              <Card
                key={value.id}
                className="bg-white dark:bg-gray-800 shadow-lg h-full"
              >
                <CardHeader
                  className={`bg-gradient-to-r ${value.gradient} text-white p-4 sm:p-6`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl sm:text-4xl">{value.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {value.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardBody className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl border-none">
            <CardBody className="p-8 sm:p-10 md:p-12 text-center">
              <div className="text-4xl sm:text-5xl mb-4">✨</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
                Наше обещание
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Печать высокого качества, оперативное выполнение и искреннее
                внимание к вашим задачам. Мы не просто выполняем заказы — мы
                помогаем вашему бизнесу расти и развиваться.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
            Готовы работать с нами?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
            Свяжитесь с нами сегодня, и мы поможем воплотить ваши идеи в жизнь
            с безупречным качеством печати.
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
              Наши услуги
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}