import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, ShoppingBag, MessageSquare, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "إجمالي المشاريع",
      value: "156",
      icon: FolderOpen,
      change: "+12%"
    },
    {
      title: "الطلبات الجديدة",
      value: "23",
      icon: ShoppingBag,
      change: "+5%"
    },
    {
      title: "الرسائل غير المقروءة",
      value: "8",
      icon: MessageSquare,
      change: "+2"
    },
    {
      title: "نمو الإيرادات",
      value: "15.2%",
      icon: TrendingUp,
      change: "+3.1%"
    }
  ];

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground">مرحباً بك في لوحة التحكم الخاصة بك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> من الشهر الماضي
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>المشاريع الحديثة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="h-12 w-12 bg-muted rounded"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">مشروع رقم {i}</h4>
                      <p className="text-sm text-muted-foreground">منذ {i} ساعات</p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      قيد المراجعة
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الطلبات الأخيرة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">طلب رقم {i}</h4>
                      <p className="text-sm text-muted-foreground">منذ {i * 2} ساعات</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      جديد
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;