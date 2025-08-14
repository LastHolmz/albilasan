import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FolderOpen, 
  ShoppingBag, 
  MessageSquare,
  CheckCircle,
  Plus,
  Edit,
  FileText
} from "lucide-react";

const sidebarItems = [
  {
    title: "لوحة التحكم",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "إدارة المشاريع",
    href: "/dashboard/projects",
    icon: FolderOpen,
    children: [
      { title: "جميع المشاريع", href: "/dashboard/projects", icon: FolderOpen },
      { title: "مراجعة المشاريع", href: "/dashboard/projects/verify", icon: CheckCircle },
      { title: "مشروع جديد", href: "/dashboard/projects/new", icon: Plus },
      { title: "تعديل مشروع", href: "/dashboard/projects/edit", icon: Edit }
    ]
  },
  {
    title: "إدارة الطلبات",
    href: "/dashboard/orders",
    icon: ShoppingBag,
    children: [
      { title: "جميع الطلبات", href: "/dashboard/orders", icon: ShoppingBag },
      { title: "طلب جديد", href: "/dashboard/orders/new", icon: Plus },
      { title: "تعديل طلب", href: "/dashboard/orders/edit", icon: Edit },
      { title: "إنهاء طلب", href: "/dashboard/orders/complete", icon: CheckCircle }
    ]
  },
  {
    title: "الرسائل",
    href: "/dashboard/messages",
    icon: MessageSquare
  }
];

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-card border-l h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold">لوحة التحكم</h2>
      </div>
      
      <nav className="px-4 pb-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )
                }
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </NavLink>
              
              {item.children && (
                <ul className="mr-6 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <NavLink
                        to={child.href}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )
                        }
                      >
                        <child.icon className="h-3 w-3" />
                        {child.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}