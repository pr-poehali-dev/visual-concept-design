const BrandShowcase = () => {
  return (
    <section className="py-16 px-6 brand-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-montserrat text-3xl font-semibold text-deep-navy mb-8 animate-slide-up">
          Визуальная концепция
        </h2>

        <div className="bg-white rounded-3xl p-12 shadow-warm animate-scale-in">
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-terracotta rounded-full animate-pulse"></div>
              <span className="text-gradient font-montserrat text-2xl font-bold">
                Петровская Лавка
              </span>
              <div
                className="w-3 h-3 bg-golden rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <p className="text-deep-navy/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Современный и элегантный дизайн, который передает качество,
              свежесть и заботу о клиентах. Теплая цветовая палитра создает
              ощущение домашнего уюта и доверия.
            </p>

            <div className="flex justify-center space-x-6 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-terracotta rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-deep-navy/70">Терракота</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-golden rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-deep-navy/70">Золото</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-deep-navy rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-deep-navy/70">Синий</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
