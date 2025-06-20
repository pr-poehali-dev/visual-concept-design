import Icon from "@/components/ui/icon";

const BrandElements = () => {
  const elements = [
    {
      icon: "Store",
      title: "Логотип",
      description: "Минималистичный символ корзины с элегантной типографикой",
    },
    {
      icon: "Palette",
      title: "Графика",
      description: "Простые иллюстрации продуктов в фирменном стиле",
    },
    {
      icon: "Camera",
      title: "Фотостиль",
      description: "Естественное освещение, теплые тона, акцент на свежести",
    },
    {
      icon: "Shirt",
      title: "Униформа",
      description: "Фартуки терракотового цвета с элегантной вышивкой",
    },
    {
      icon: "Package",
      title: "Упаковка",
      description: "Эко-материалы в фирменных цветах с минимальным дизайном",
    },
    {
      icon: "Share2",
      title: "Соцсети",
      description: "Единый стиль постов с акцентом на качество продуктов",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl font-semibold text-deep-navy text-center mb-12 animate-slide-up">
          Элементы брендинга
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elements.map((element, index) => (
            <div
              key={index}
              className="group bg-soft-cream rounded-2xl p-8 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={element.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="font-montserrat text-xl font-semibold text-deep-navy mb-4">
                {element.title}
              </h3>

              <p className="text-deep-navy/70 leading-relaxed">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandElements;
