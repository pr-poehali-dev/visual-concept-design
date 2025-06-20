import Icon from "@/components/ui/icon";

const PrivateLabel = () => {
  const products = [
    { name: "Хлеб цельнозерновой", category: "Хлебобулочные", image: "🍞" },
    { name: "Молоко фермерское", category: "Молочные продукты", image: "🥛" },
    { name: "Мёд луговой", category: "Натуральные продукты", image: "🍯" },
    { name: "Овсяные хлопья", category: "Крупы и каши", image: "🥣" },
    { name: "Яблочный сок", category: "Напитки", image: "🧃" },
    { name: "Паста из твёрдых сортов", category: "Бакалея", image: "🍝" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Продукция под СТМ
          </h2>
          <p className="text-xl text-muted-foreground">
            Собственная торговая марка с едиными стандартами качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-soft-cream to-warm-beige relative flex items-center justify-center">
                <div className="text-6xl mb-4">{product.image}</div>
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  СТМ
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <Icon name="Award" size={16} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Leaf" size={14} />
                    Эко
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    Местное
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="CheckCircle" size={14} />
                    Качество
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Преимущества СТМ</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon
                    name="TrendingDown"
                    size={18}
                    className="text-primary"
                  />
                  <span>Доступные цены без потери качества</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Shield" size={18} className="text-primary" />
                  <span>Контроль качества на всех этапах</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Users" size={18} className="text-primary" />
                  <span>Поддержка местных производителей</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Recycle" size={18} className="text-primary" />
                  <span>Экологичная упаковка</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground mb-4">
                  наименований продукции
                </div>
                <div className="text-2xl font-bold text-accent mb-2">15%</div>
                <div className="text-muted-foreground">
                  экономия для покупателей
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLabel;
