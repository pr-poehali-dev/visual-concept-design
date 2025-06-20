import Icon from "@/components/ui/icon";

const SocialMedia = () => {
  const socialPosts = [
    {
      platform: "Instagram",
      type: "Пост",
      content: "Свежие продукты каждый день",
      engagement: "234 лайка",
      image: "📸",
    },
    {
      platform: "Instagram",
      type: "Stories",
      content: "Акция дня: скидка 20%",
      engagement: "156 просмотров",
      image: "📱",
    },
    {
      platform: "Facebook",
      type: "Обложка",
      content: "Добро пожаловать в наш магазин!",
      engagement: "89 реакций",
      image: "🖼️",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Фирменный стиль в соцсетях
          </h2>
          <p className="text-xl text-muted-foreground">
            Единый визуальный стиль для всех социальных платформ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {socialPosts.map((post, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center">
                <div className="text-6xl mb-4">{post.image}</div>
                <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                  {post.platform}
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-xs">
                  {post.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{post.content}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Heart" size={14} />
                  <span>{post.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Шаблоны контента */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Шаблоны контента</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Calendar" size={18} className="text-primary" />
                  <span className="font-medium">Ежедневные посты</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Свежие продукты, акции, новости
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Clock" size={18} className="text-accent" />
                  <span className="font-medium">Stories</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Быстрые новости, опросы, интерактив
                </p>
              </div>

              <div className="p-4 bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Star" size={18} className="text-primary" />
                  <span className="font-medium">Специальные</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Праздники, события, конкурсы
                </p>
              </div>
            </div>
          </div>

          {/* Цветовая схема для соцсетей */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Цветовая палитра</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="w-full h-16 bg-primary rounded-lg mb-2"></div>
                <span className="text-sm font-medium">Основной</span>
                <p className="text-xs text-muted-foreground">Заголовки, CTA</p>
              </div>
              <div className="text-center">
                <div className="w-full h-16 bg-accent rounded-lg mb-2"></div>
                <span className="text-sm font-medium">Акцент</span>
                <p className="text-xs text-muted-foreground">Цены, скидки</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Instagram" size={18} className="text-pink-500" />
                <span className="text-sm">Тёплые тона для постов</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Facebook" size={18} className="text-blue-500" />
                <span className="text-sm">Профессиональный стиль</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="MessageCircle"
                  size={18}
                  className="text-green-500"
                />
                <span className="text-sm">Дружелюбный тон</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Статистика и результаты</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+45%</div>
              <div className="text-muted-foreground">Рост подписчиков</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2.8k</div>
              <div className="text-muted-foreground">Средний охват</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15%</div>
              <div className="text-muted-foreground">Рост продаж</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
