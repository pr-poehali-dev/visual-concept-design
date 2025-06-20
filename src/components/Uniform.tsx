import Icon from "@/components/ui/icon";

const Uniform = () => {
  const uniformItems = [
    {
      name: "Фирменный фартук",
      description: "Практичный фартук с логотипом и карманами",
      features: ["Влагостойкая ткань", "Регулируемые лямки", "Два кармана"],
      image: "👕",
    },
    {
      name: "Рубашка поло",
      description: "Комфортная рубашка из хлопка с вышивкой",
      features: ["100% хлопок", "Вышитый логотип", "Цвета бренда"],
      image: "👔",
    },
    {
      name: "Именной бейдж",
      description: "Деревянный бейдж с именем сотрудника",
      features: [
        "Натуральное дерево",
        "Лазерная гравировка",
        "Магнитное крепление",
      ],
      image: "📛",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Униформа сотрудников
          </h2>
          <p className="text-xl text-muted-foreground">
            Профессиональный внешний вид команды
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {uniformItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-6xl">{item.image}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>

                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Icon name="Check" size={14} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Цветовая схема */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Цветовая схема униформы
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-muted-foreground">Основной</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-muted-foreground">Акцент</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-muted-foreground">
                  Нейтральный
                </span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-border rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-muted-foreground">Белый</span>
              </div>
            </div>
          </div>

          {/* Варианты для разных должностей */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Варианты по должностям
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <Icon name="UserCheck" size={20} className="text-primary" />
                <div>
                  <div className="font-medium">Менеджер</div>
                  <div className="text-sm text-muted-foreground">
                    Рубашка + именной бейдж
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <Icon name="ShoppingCart" size={20} className="text-primary" />
                <div>
                  <div className="font-medium">Продавец</div>
                  <div className="text-sm text-muted-foreground">
                    Поло + фартук + бейдж
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <Icon name="Package" size={20} className="text-primary" />
                <div>
                  <div className="font-medium">Кладовщик</div>
                  <div className="text-sm text-muted-foreground">
                    Рабочая форма + бейдж
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Индивидуальный подход</h3>
          <p className="text-muted-foreground mb-6">
            Каждый элемент униформы адаптирован под специфику работы и комфорт
            сотрудников
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Icon name="Ruler" size={18} className="text-primary" />
              <span className="text-sm">Индивидуальный размер</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Palette" size={18} className="text-primary" />
              <span className="text-sm">Фирменные цвета</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={18} className="text-primary" />
              <span className="text-sm">Качественные материалы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniform;
