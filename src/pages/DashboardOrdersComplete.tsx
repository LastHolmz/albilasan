import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DashboardOrdersComplete = () => {
  const { toast } = useToast();
  
  const activeOrders = [
    {
      id: 1,
      customerName: "أحمد محمد",
      projectTitle: "مقهى عصري للبيع",
      phone: "+963999123456",
      status: "جديد",
      date: "2024-01-15"
    },
    {
      id: 2,
      customerName: "فاطمة علي",
      projectTitle: "مطعم شعبي مجهز",
      phone: "+963999654321",
      status: "قيد المعالجة",
      date: "2024-01-14"
    }
  ];

  const handleCompleteOrder = (orderId: number) => {
    toast({
      title: "تم إنهاء الطلب بنجاح",
      description: `تم إنهاء الطلب رقم ${orderId}`
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'جديد':
        return <Badge className="bg-blue-100 text-blue-800">جديد</Badge>;
      case 'قيد المعالجة':
        return <Badge className="bg-yellow-100 text-yellow-800">قيد المعالجة</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">إنهاء الطلبات</h1>
          <p className="text-muted-foreground">إنهاء الطلبات النشطة</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>الطلبات النشطة</CardTitle>
          </CardHeader>
          <CardContent>
            {activeOrders.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">لا توجد طلبات نشطة</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم العميل</TableHead>
                    <TableHead>المشروع</TableHead>
                    <TableHead>رقم الهاتف</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.customerName}</TableCell>
                      <TableCell>{order.projectTitle}</TableCell>
                      <TableCell>{order.phone}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleCompleteOrder(order.id)}
                          >
                            <CheckCircle className="h-4 w-4 ml-1" />
                            إنهاء
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOrdersComplete;