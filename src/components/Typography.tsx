const Typography = () => {
  return (
    <section className="py-16 px-6 brand-gradient">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-montserrat text-3xl font-semibold text-deep-navy text-center mb-12 animate-slide-up">
          Типографика
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-warm animate-scale-in">
            <h3 className="font-montserrat text-xl font-semibold text-terracotta mb-6">
              Заголовки — Montserrat
            </h3>

            <div className="space-y-4">
              <div className="font-montserrat text-4xl font-bold text-deep-navy">
                Петровская Лавка
              </div>
              <div className="font-montserrat text-2xl font-semibold text-deep-navy">
                Свежие продукты
              </div>
              <div className="font-montserrat text-xl font-medium text-deep-navy">
                Качество и вкус
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl p-8 shadow-warm animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-montserrat text-xl font-semibold text-terracotta mb-6">
              Основной текст — Open Sans
            </h3>

            <div className="space-y-4">
              <p className="font-open-sans text-base text-deep-navy leading-relaxed">
                Мы предлагаем только свежие и качественные продукты для вашего
                стола. Наша философия — простота и естественность в каждом
                продукте.
              </p>
              <p className="font-open-sans text-sm text-deep-navy/80">
                Работаем с местными производителями, поддерживаем традиции и
                создаем уютную атмосферу для покупок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;
