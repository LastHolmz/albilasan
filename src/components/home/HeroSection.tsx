import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logo from '@/assets/logo.png';

export function HeroSection() {
  return (
    <section className="relative hero-gradient text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="البيلسان" 
              className="mx-auto h-16 md:h-20 w-auto"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            بيع وإيجار المشاريع الجاهزة
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
            منصة متخصصة في بيع وإيجار المشاريع التجارية الجاهزة والمربحة
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
            وفر وقتك واحصل على مشروع مربح وجاهز للعمل فوراً. نوفر لك أفضل الفرص الاستثمارية المدروسة والمضمونة
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary btn-lift px-8 py-4 text-lg font-semibold"
            >
              <Link to="/projects" className="flex items-center gap-2">
                تصفح المشاريع
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary btn-lift px-8 py-4 text-lg font-semibold"
            >
              <Link to="/upload">
                أضف مشروعك
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}