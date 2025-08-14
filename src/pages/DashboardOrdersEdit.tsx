import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "react-router-dom";

const DashboardOrdersEdit = () => {
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    customerName: "أحمد محمد",
    phone: "+963999123456",
    email: "ahmed@example.com",
    projectId: "1",
    message: "أريد الاستفسار عن هذا المشروع",
    orderType: "inquiry",
    status: "جديد"
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم تحديث الطلب بنجاح",
      description: "تم حفظ التغييرات"
    });
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">تعديل الطلب</h1>
          <p className="text-muted-foreground">تعديل تفاصيل الطلب رقم {id}</p>
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
                <label className="block text-sm font-medium mb-2">حالة الطلب</label>
                <Select 
                  value={formData.status} 
                  onValueChange={(value) => setFormData(prev => ({...prev, status: value}))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="جديد">جديد</SelectItem>
                    <SelectItem value="قيد المعالجة">قيد المعالجة</SelectItem>
                    <SelectItem value="مكتمل">مكتمل</SelectItem>
                    <SelectItem value="ملغي">ملغي</SelectItem>
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

export default DashboardOrdersEdit;