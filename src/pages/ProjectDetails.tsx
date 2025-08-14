import { useParams, Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Phone, 
  Mail, 
  Share2,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { mockProjects } from '@/data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const handleWhatsAppContact = () => {
    if (project.contact?.phone) {
      const message = `مرحباً، أهتم بمشروع: ${project.title}`;
      const whatsappUrl = `https://wa.me/${project.contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `تصفح هذا المشروع الرائع: ${project.title}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      copy: () => navigator.clipboard.writeText(url)
    };

    if (platform === 'copy') {
      shareUrls.copy();
      // You could show a toast here
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls] as string, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/projects" className="hover:text-primary">المشاريع</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-foreground">{project.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <Card className="overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">
                      {project.title}
                    </CardTitle>
                    {project.location && (
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="ml-1 h-4 w-4" />
                        {project.location}
                      </div>
                    )}
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Equipment */}
            <Card>
              <CardHeader>
                <CardTitle>المعدات المتوفرة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>معلومات المشروع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <span className="font-medium">الإيراد الشهري</span>
                    <div className="flex items-center text-success font-bold">
                      <TrendingUp className="ml-1 h-4 w-4" />
                      {project.revenue}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="font-medium">سعر البيع</span>
                    <div className="flex items-center text-primary font-bold">
                      <DollarSign className="ml-1 h-4 w-4" />
                      {project.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="font-medium">الإيجار الشهري</span>
                    <div className="flex items-center font-bold">
                      <DollarSign className="ml-1 h-4 w-4" />
                      {project.rentPrice}
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3 pt-4 border-t">
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="w-full bg-[#25D366] hover:bg-[#22C55E] text-white btn-lift"
                  >
                    <MessageCircle className="ml-2 h-4 w-4" />
                    تواصل عبر الواتساب
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full btn-lift"
                  >
                    <Link to="/order">
                      إبداء الاهتمام
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            {project.contact && (
              <Card>
                <CardHeader>
                  <CardTitle>معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{project.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{project.contact.email}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle>مشاركة المشروع</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="flex-1"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="flex-1"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShare('copy')}
                    className="flex-1"
                  >
                    نسخ الرابط
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;