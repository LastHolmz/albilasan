import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Upload } from 'lucide-react';

const navigation = [
  { name: 'الرئيسية', href: '/', icon: Home },
  { name: 'المشاريع', href: '/projects', icon: Search },
  { name: 'رفع مشروع', href: '/upload', icon: Upload },
];

export function MobileNav() {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {navigation.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 ${
                active 
                  ? 'text-primary' 
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              <IconComponent className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}