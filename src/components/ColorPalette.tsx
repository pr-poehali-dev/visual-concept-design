const ColorPalette = () => {
  const colors = [
    { name: "Теплый бежевый", value: "#F6F1E8", usage: "Основной фон" },
    { name: "Терракотовый", value: "#D2691E", usage: "Акценты и логотип" },
    { name: "Глубокий синий", value: "#1A365D", usage: "Заголовки и текст" },
    { name: "Золотистый", value: "#B8860B", usage: "Премиум элементы" },
    { name: "Мягкий кремовый", value: "#FFFEF7", usage: "Карточки и фон" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-montserrat text-3xl font-semibold text-deep-navy text-center mb-12 animate-slide-up">
          Цветовая палитра
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="bg-soft-cream rounded-2xl p-6 shadow-warm hover:scale-105 transition-transform duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-full h-24 rounded-xl mb-4 shadow-inner"
                style={{ backgroundColor: color.value }}
              />
              <h3 className="font-montserrat font-semibold text-deep-navy mb-2">
                {color.name}
              </h3>
              <p className="text-sm text-deep-navy/70 mb-2 font-mono">
                {color.value}
              </p>
              <p className="text-sm text-deep-navy/60">{color.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;
