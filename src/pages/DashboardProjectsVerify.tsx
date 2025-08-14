import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Eye } from "lucide-react";
import { mockProjects } from "@/data/projects";

const DashboardProjectsVerify = () => {
  const pendingProjects = mockProjects.filter(p => p.status === 'pending');

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">مراجعة المشاريع</h1>
          <p className="text-muted-foreground">مراجعة المشاريع في انتظار الموافقة</p>
        </div>

        <div className="grid gap-6">
          {pendingProjects.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">لا توجد مشاريع في انتظار المراجعة</p>
              </CardContent>
            </Card>
          ) : (
            pendingProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{project.category}</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">قيد المراجعة</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium">السعر</h4>
                      <p className="text-muted-foreground">{project.price}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">الإيراد الشهري</h4>
                      <p className="text-muted-foreground">{project.revenue}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">الإيجار الشهري</h4>
                      <p className="text-muted-foreground">{project.rentPrice}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 ml-1" />
                      قبول
                    </Button>
                    <Button size="sm" variant="destructive">
                      <X className="h-4 w-4 ml-1" />
                      رفض
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 ml-1" />
                      عرض التفاصيل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardProjectsVerify;