import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye, CheckCircle } from "lucide-react";

const DashboardOrders = () => {
  const mockOrders = [
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
    },
    {
      id: 3,
      customerName: "محمد حسن",
      projectTitle: "محل ملابس نسائية",
      phone: "+963999789012",
      status: "مكتمل",
      date: "2024-01-13"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'جديد':
        return <Badge className="bg-blue-100 text-blue-800">جديد</Badge>;
      case 'قيد المعالجة':
        return <Badge className="bg-yellow-100 text-yellow-800">قيد المعالجة</Badge>;
      case 'مكتمل':
        return <Badge className="bg-green-100 text-green-800">مكتمل</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">إدارة الطلبات</h1>
          <p className="text-muted-foreground">عرض وإدارة جميع الطلبات</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>قائمة الطلبات</span>
              <Button>إضافة طلب جديد</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                {mockOrders.map((order) => (
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
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOrders;