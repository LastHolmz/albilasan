import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "react-router-dom";
import { mockProjects, projectCategories } from "@/data/projects";

const DashboardProjectsEdit = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === Number(id));
  
  const [formData, setFormData] = useState({
    title: project?.title || "",
    category: project?.category || "",
    description: project?.description || "",
    equipment: project?.equipment.join(", ") || "",
    revenue: project?.revenue || "",
    price: project?.price || "",
    rentPrice: project?.rentPrice || "",
    location: project?.location || ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم تحديث المشروع بنجاح",
      description: "تم حفظ التغييرات"
    });
  };

  if (!project) {
    return (
      <div className="flex min-h-screen bg-muted/30">
        <DashboardSidebar />
        <div className="flex-1 p-6 flex items-center justify-center">
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">المشروع غير موجود</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">تعديل المشروع</h1>
          <p className="text-muted-foreground">تعديل تفاصيل المشروع رقم {id}</p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>تفاصيل المشروع</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان المشروع</label>
                <Input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الفئة</label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الفئة" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectCategories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الوصف</label>
                <Textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">المعدات</label>
                <Textarea
                  required
                  rows={3}
                  value={formData.equipment}
                  onChange={(e) => setFormData(prev => ({...prev, equipment: e.target.value}))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">الإيراد الشهري</label>
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
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({...prev, price: e.target.value}))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">سعر الإيجار</label>
                  <Input
                    required
                    value={formData.rentPrice}
                    onChange={(e) => setFormData(prev => ({...prev, rentPrice: e.target.value}))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الموقع</label>
                <Input
                  required
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  حفظ التغييرات
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  إلغاء
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardProjectsEdit;