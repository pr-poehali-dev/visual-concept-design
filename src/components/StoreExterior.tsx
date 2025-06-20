import Icon from "@/components/ui/icon";

const StoreExterior = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Экстерьер магазина
          </h2>
          <p className="text-xl text-muted-foreground">
            Современные решения с элементами натурального дерева
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Фасад */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-200 relative">
              <div className="absolute inset-0 bg-wood-pattern opacity-20"></div>
              <div className="absolute top-4 left-4 right-4 h-16 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">БРЕНД</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-32 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg opacity-80"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Фасад с деревянными панелями
              </h3>
              <p className="text-muted-foreground mb-4">
                Натуральная древесина в сочетании с современными материалами
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Icon name="CheckCircle" size={16} />
                Влагостойкие покрытия
              </div>
            </div>
          </div>

          {/* Вывеска */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 relative flex items-center justify-center">
              <div className="bg-primary px-8 py-4 rounded-lg shadow-2xl">
                <div className="text-white text-3xl font-bold mb-2">
                  МАГАЗИН
                </div>
                <div className="text-accent text-sm font-medium">
                  качественные продукты
                </div>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Световая вывеска</h3>
              <p className="text-muted-foreground mb-4">
                LED-подсветка с возможностью программирования
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Icon name="Zap" size={16} />
                Энергоэффективная технология
              </div>
            </div>
          </div>
        </div>

        {/* Боковые кронштейны и входная группа */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="h-32 bg-gradient-to-r from-amber-800 to-amber-600 rounded-lg mb-4 relative">
              <div className="absolute inset-2 bg-primary rounded flex items-center justify-center">
                <Icon name="ArrowRight" size={24} className="text-white" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">Боковые кронштейны</h4>
            <p className="text-muted-foreground text-sm">
              Указатели из дерева с металлическими элементами
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 relative">
              <div className="absolute bottom-2 left-2 right-2 h-8 bg-amber-800 rounded opacity-60"></div>
              <div className="absolute top-2 left-2 right-2 flex justify-between">
                <Icon name="TreePine" size={20} className="text-green-600" />
                <Icon name="TreePine" size={20} className="text-green-600" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">Входная группа</h4>
            <p className="text-muted-foreground text-sm">
              Деревянные элементы с озеленением
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="h-32 bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg mb-4 relative">
              <div className="absolute inset-4 bg-amber-700 rounded-lg">
                <div className="absolute inset-2 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-stone-800">
                    ЧАСЫ РАБОТЫ
                  </span>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">
              Информационные таблички
            </h4>
            <p className="text-muted-foreground text-sm">
              Деревянные рамки с актуальной информацией
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreExterior;
