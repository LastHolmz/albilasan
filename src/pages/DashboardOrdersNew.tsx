import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { mockProjects } from "@/data/projects";

const DashboardOrdersNew = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    projectId: "",
    message: "",
    orderType: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إنشاء الطلب بنجاح",
      description: "سيظهر في قائمة الطلبات"
    });
    setFormData({
      customerName: "",
      phone: "",
      email: "",
      projectId: "",
      message: "",
      orderType: ""
    });
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">إضافة طلب جديد</h1>
          <p className="text-muted-foreground">إنشاء طلب جديد في النظام</p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>تفاصيل الطلب</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">اسم العميل</label>
                <Input
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData(prev => ({...prev, customerName: e.target.value}))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">المشروع</label>
                <Select 
                  value={formData.projectId} 
                  onValueChange={(value) => setFormData(prev => ({...prev, projectId: value}))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المشروع" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockProjects.map((project) => (
                      <SelectItem key={project.id} value={project.id.toString()}>
                        {project.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">نوع الطلب</label>
                <Select 
                  value={formData.orderType} 
                  onValueChange={(value) => setFormData(prev => ({...prev, orderType: value}))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الطلب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">شراء</SelectItem>
                    <SelectItem value="rent">إيجار</SelectItem>
                    <SelectItem value="inquiry">استفسار</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">رسالة العميل</label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                />
              </div>

              <Button type="submit" className="w-full">
                إنشاء الطلب
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOrdersNew;