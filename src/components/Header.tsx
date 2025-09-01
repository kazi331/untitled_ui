import { ChevronDown } from "./shared/Icons";

interface MenuType {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}
const menuItems: MenuType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/",
    children: [],
  },
  {
    name: "Resources",
    href: "/",
    children: [],
  },
  {
    name: "Pricing",
    href: "/",
  },
];

export default function Header() {
  return (
    <header className="px-6 py-4 bg-brand">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold mr-10">
          <img src="/logo.svg" className="h-8 w-auto" alt="Logo" />
          <span>Untitled UI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mr-auto">
          {menuItems.map((item: MenuType, i) => (
            <a
              key={i}
              href={item.href}
              className="text-white font-medium flex gap-1"
            >
              {item.name}
              {item.children && <ChevronDown className="mt-0.5" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-white hover:bg-primary/20 transition-colors py-2 px-4 rounded-lg cursor-pointer">
            Login
          </button>
          <button className="text-white bg-primary hover:bg-primary/80 transition-colors py-2 px-4 rounded-lg cursor-pointer">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button - Hidden on larger screens */}
        <button className="md:hidden flex items-center justify-center w-8 h-8 text-gray-700"></button>
      </div>
    </header>
  );
}
