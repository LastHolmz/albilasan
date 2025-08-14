export interface Project {
  id: number;
  title: string;
  category: string;
  revenue: string;
  price: string;
  rentPrice: string;
  equipment: string[];
  images: string[];
  description: string;
  status: 'approved' | 'pending' | 'rejected';
  location?: string;
  contact?: {
    name: string;
    phone: string;
    email: string;
  };
}

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "مقهى عصري للبيع",
    category: "مقهى",
    revenue: "5000 دينار شهرياً",
    price: "30000 دينار",
    rentPrice: "1500 دينار شهرياً",
    equipment: ["ماكينة قهوة احترافية", "طاولات وكراسي", "ثلاجة عرض", "نظام صوتي"],
    images: ["/src/assets/cafe-project.jpg"],
    description: "مقهى عصري مجهز بالكامل في موقع استراتيجي ممتاز بوسط المدينة. يضم أحدث معدات تحضير القهوة والمشروبات الساخنة والباردة. المكان مؤثث بالكامل ويحتوي على ديكور عصري جذاب.",
    status: "approved",
    location: "وسط المدينة",
    contact: {
      name: "أحمد محمد",
      phone: "+963999123456",
      email: "ahmed@example.com"
    }
  },
  {
    id: 2,
    title: "مطعم شعبي مجهز",
    category: "مطعم",
    revenue: "8000 دينار شهرياً",
    price: "45000 دينار",
    rentPrice: "2000 دينار شهرياً",
    equipment: ["مطبخ كامل", "طاولات للزبائن", "ثلاجات حفظ", "أواني طبخ"],
    images: ["/src/assets/restaurant-project.jpg"],
    description: "مطعم شعبي مجهز بمطبخ احترافي كامل وصالة طعام واسعة. يقع في منطقة حيوية ويحتوي على جميع المعدات اللازمة لبدء العمل فوراً.",
    status: "approved",
    location: "المنطقة التجارية",
    contact: {
      name: "سارة أحمد",
      phone: "+963999654321",
      email: "sara@example.com"
    }
  },
  {
    id: 3,
    title: "محل ملابس نسائية",
    category: "تجارة",
    revenue: "3500 دينار شهرياً",
    price: "25000 دينار",
    rentPrice: "1200 دينار شهرياً",
    equipment: ["رفوف عرض", "مرايا", "كاشير", "كاميرات مراقبة"],
    images: ["/src/assets/retail-project.jpg"],
    description: "محل ملابس نسائية في موقع ممتاز بمنطقة تسوق مزدحمة. يحتوي على ديكور أنيق ومعدات عرض احترافية. المحل جاهز للعمل ويحتوي على مخزون من الملابس العصرية.",
    status: "approved",
    location: "السوق المركزي",
    contact: {
      name: "فاطمة علي",
      phone: "+963999789012",
      email: "fatima@example.com"
    }
  },
  {
    id: 4,
    title: "صالون حلاقة رجالي",
    category: "خدمات",
    revenue: "4200 دينار شهرياً",
    price: "28000 دينار",
    rentPrice: "1400 دينار شهرياً",
    equipment: ["كراسي حلاقة", "مرايا", "أدوات حلاقة", "نظام تكييف"],
    images: ["/src/assets/cafe-project.jpg"],
    description: "صالون حلاقة رجالي مجهز بأحدث المعدات في منطقة سكنية مكتظة. يحتوي على 4 كراسي حلاقة وجميع الأدوات المطلوبة للعمل.",
    status: "approved",
    location: "الحي السكني",
    contact: {
      name: "محمد حسن",
      phone: "+963999345678",
      email: "mohamed@example.com"
    }
  },
  {
    id: 5,
    title: "مخبز آلي حديث",
    category: "مخبز",
    revenue: "6000 دينار شهرياً",
    price: "40000 دينار",
    rentPrice: "1800 دينار شهرياً",
    equipment: ["فرن آلي", "عجانة كبيرة", "أرفف تبريد", "ثلاجة حفظ"],
    images: ["/src/assets/restaurant-project.jpg"],
    description: "مخبز آلي حديث مجهز بأحدث المعدات لإنتاج الخبز والمعجنات. يحتوي على فرن آلي حديث وجميع معدات الإنتاج المطلوبة.",
    status: "approved",
    location: "الضاحية الجديدة",
    contact: {
      name: "عبد الله زيد",
      phone: "+963999567890",
      email: "abdullah@example.com"
    }
  },
  {
    id: 6,
    title: "صيدلية مجهزة",
    category: "صيدلية",
    revenue: "7500 دينار شهرياً",
    price: "55000 دينار",
    rentPrice: "2200 دينار شهرياً",
    equipment: ["أرفف أدوية", "ثلاجة أدوية", "كاشير", "نظام إنذار"],
    images: ["/src/assets/retail-project.jpg"],
    description: "صيدلية مجهزة بالكامل مع ترخيص ساري المفعول. تحتوي على جميع المعدات المطلوبة وأرفف عرض احترافية.",
    status: "approved",
    location: "قرب المستشفى",
    contact: {
      name: "نور الدين",
      phone: "+963999234567",
      email: "noureddine@example.com"
    }
  }
];

export const projectCategories = [
  "جميع الفئات",
  "مقهى",
  "مطعم", 
  "تجارة",
  "خدمات",
  "مخبز",
  "صيدلية"
];