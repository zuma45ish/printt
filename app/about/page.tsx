import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <article className="space-y-6 text-left">
      <h1 className="text-4xl font-bold tracking-tight">О нас</h1>
      <p className="text-lg text-gray-600">
        Компания PrintMasters была основана в 2008 году с одной целью — объединить креативность и точность в мире печати.
      </p>
      <p className="text-lg text-gray-600">
        Сегодня мы — это современная типография, известная качеством, надежностью и персональным подходом.
      </p>
      <p className="text-lg text-gray-600">
        Мы используем передовые технологии печати и гордимся командой профессионалов, которые заботятся о каждом заказе — от макета до готового изделия.
      </p>
      <p className="text-lg text-gray-600">
        Наши клиенты — это стартапы, малый и средний бизнес, крупные компании и маркетинговые агентства. Независимо от масштаба проекта, каждый заказ для нас — важен.
      </p>
      <h2 className="text-2xl font-bold tracking-tight">✨ Наше обещание:</h2>
      <p className="text-lg text-gray-600">
        Печать высокого качества, оперативное выполнение и искреннее внимание к вашим задачам.
      </p>
    </article>
  );
}