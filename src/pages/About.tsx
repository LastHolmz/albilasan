import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const advantages = [
  'خبرة واسعة في مجال الاستثمارات التجارية',
  'شبكة واسعة من المشاريع المربحة والمضمونة',
  'دعم ومتابعة مستمرة للعملاء',
  'شفافية كاملة في جميع المعاملات',
  'أسعار تنافسية وعروض مميزة',
  'استشارات مجانية لاختيار المشروع المناسب'
];

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              من نحن
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              البيلسان - شريكك المثالي في عالم الاستثمارات التجارية
            </p>
          </div>

          {/* Story section */}
          <Card className="mb-12 card-lift">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  تأسست البيلسان كمنصة متخصصة في بيع وإيجار المشاريع التجارية الجاهزة والمربحة. 
                  نؤمن بأن الوقت هو أغلى ما يملكه رجل الأعمال، لذلك نوفر له فرصاً استثمارية مدروسة وجاهزة للتنفيذ.
                </p>
                <p>
                  منذ انطلاقتنا، ساعدنا المئات من المستثمرين في الحصول على مشاريع مربحة ومضمونة، 
                  وبنينا شبكة واسعة من الثقة والشراكات الناجحة في السوق.
                </p>
                <p>
                  نحن لسنا مجرد وسطاء، بل شركاء نجاح نقدم الاستشارة والدعم والمتابعة لضمان نجاح استثماراتكم.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Advantages section */}
          <Card className="card-lift">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                ما يميزنا
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mission section */}
          <Card className="mt-12 card-lift bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                رسالتنا
              </h2>
              <p className="text-lg leading-relaxed">
                نسعى لنكون المنصة الرائدة في مجال بيع وإيجار المشاريع الجاهزة، 
                ونهدف إلى تسهيل رحلة الاستثمار وتوفير أفضل الفرص التجارية المربحة لعملائنا
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;