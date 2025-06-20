import Icon from "@/components/ui/icon";

const BrandHeader = () => {
  return (
    <header className="brand-gradient py-8 px-6 text-center animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-warm mb-6">
          <Icon name="ShoppingBasket" size={32} className="text-terracotta" />
        </div>

        <h1 className="font-montserrat text-5xl font-bold text-deep-navy mb-3">
          Петровская Лавка
        </h1>

        <div className="mb-6">
          <span className="text-terracotta font-open-sans text-lg font-medium italic">
            магазин хорошей еды
          </span>
        </div>

        <p className="text-xl text-deep-navy/80 font-open-sans max-w-2xl mx-auto leading-relaxed">
          Современный брендинг для продуктового магазина — где традиции
          встречаются с элегантностью
        </p>

        <div className="mt-8 flex justify-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 border border-terracotta/20">
            <span className="text-terracotta font-medium">
              Концепция дизайна 2024
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BrandHeader;
