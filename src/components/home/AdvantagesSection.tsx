import { Clock, Edit3, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'توفير الوقت',
    description: 'احصل على مشروع جاهز للعمل فوراً دون الحاجة لإنشاء مشروع من الصفر'
  },
  {
    icon: Edit3,
    title: 'سهولة التعديل',
    description: 'جميع المشاريع قابلة للتخصيص والتطوير حسب احتياجاتك ومتطلباتك'
  },
  {
    icon: TrendingUp,
    title: 'عوائد سريعة',
    description: 'مشاريع مدروسة ومربحة تضمن لك عوائد مالية سريعة ومستدامة'
  }
];

export function AdvantagesSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا البيلسان؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نوفر لك أفضل الحلول الاستثمارية المدروسة والجاهزة للتنفيذ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index}
                className="text-center card-lift bg-card p-8 rounded-lg border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}