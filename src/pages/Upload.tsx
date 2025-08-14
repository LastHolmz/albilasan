import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Upload as UploadIcon, Check } from "lucide-react";

const Upload = () => {
  const [step, setStep] = useState(1);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    equipment: "",
    revenue: "",
    salePrice: "",
    rentPrice: "",
    images: [] as File[]
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const terms = [
    "لا نقبل المشاريع المحرمة شرعاً",
    "نأخذ عمولة 7% عند بيع المشروع أو شهر في حالة إيجار المشروع", 
    "إذا كان المشروع سعره غير منطقي مقابل الإيرادات لن يتم قبوله من قبل الإدارة",
    "من فضلك إذا تم التصرف في المشروع أرسل لنا على بريد صفحتنا أو الاتصال بنا لحذف المشروع"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال مشروعك بنجاح",
      description: "سيتم مراجعته قريباً"
    });
    navigate("/order-success");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        images: Array.from(e.target.files!)
      }));
    }
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">الشروط والأحكام</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {terms.map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{term}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox 
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm">
                  أوافق على جميع الشروط
                </label>
              </div>
              
              <Button 
                onClick={() => setStep(2)}
                disabled={!agreedToTerms}
                className="w-full"
              >
                متابعة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">إضافة مشروع جديد</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">الاسم</label>
                  <Input
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">اللقب</label>
                  <Input
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">معدات المشروع</label>
                <Textarea
                  required
                  rows={4}
                  value={formData.equipment}
                  onChange={(e) => setFormData(prev => ({...prev, equipment: e.target.value}))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">إيراد المشروع</label>
                  <Input
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData(prev => ({...prev, revenue: e.target.value}))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">سعر البيع</label>
                  <Input
                    required
                    value={formData.salePrice}
                    onChange={(e) => setFormData(prev => ({...prev, salePrice: e.target.value}))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">سعر الإيجار الشهري</label>
                  <Input
                    required
                    value={formData.rentPrice}
                    onChange={(e) => setFormData(prev => ({...prev, rentPrice: e.target.value}))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">صور المشروع</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <span className="text-primary hover:underline">اختر الصور</span>
                    <span className="text-muted-foreground"> أو اسحبها هنا</span>
                  </label>
                  {formData.images.length > 0 && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      تم اختيار {formData.images.length} صورة
                    </p>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full">
                إرسال المشروع
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upload;