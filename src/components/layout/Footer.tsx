import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 max-md:mb-20 text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Company Info */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Albilasan Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-semibold text-lg tracking-wide"></span>
          <p>البيلسان لsلعروض</p>
        </div>
        {/* Navigation Links */}
        <nav className="flex max-md:flex-col gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">
            الرئيسية
          </Link>
          <Link to="/projects" className="hover:text-white transition">
            المشاريع
          </Link>
          <Link to="/about" className="hover:text-white transition">
            عن الشركة
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            تواصل معنا
          </Link>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="hover:text-blue-400"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Albilasan Offers. جميع الحقوق محفوظة.
      </div>

      <div className="flex items-center max-md:flex-col my-2 text-sm  gap-2">
        <span className=""> تم التطوير بواسطة</span>{" "}
        <a
          href="https://ebtkar.tech"
          target="_blank"
          rel="noopener"
          className="hover:text-primary transition"
        >
          شركة الإبتكار العصري
        </a>
      </div>
    </footer>
  );
}
