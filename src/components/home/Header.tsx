import { useState } from "react";
import { ChevronDown, CloseIcon, Hamburger } from "../shared/Icons";

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="px-6 py-4 bg-brand">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold mr-10">
          <img src="/logo.svg" className="h-8 w-auto" alt="Logo" />
          <span>Untitled UI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ">
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

        <button
          className="ms-auto md:hidden p-1 cursor-pointer active:scale-95 transition"
          onClick={() => setShowMobileMenu((pre) => !pre)}
        >
          <Hamburger className="size-8" />
        </button>

        {/* Mobile Menu */}

        <div
          className={`flex flex-col w-full h-full bg-primary sm:max-w-xs fixed top-0 right-0 pt-4 z-10 px-5 md:hidden ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          } transition `}
        >
          <button
            className="ms-auto md:hidden p-1 cursor-pointer active:scale-95 transition mb-4"
            onClick={() => setShowMobileMenu((pre) => !pre)}
          >
            <CloseIcon className="size-8 text-white" />
          </button>
          {menuItems.map((item, i) => {
            return (
              <a
                key={i}
                href={item.href}
                className="text-white font-medium flex gap-2 hover:bg-brand/30 rounded-lg py-2 px-6"
              >
                {item.name}
                {item.children && <ChevronDown className="mt-0.5" />}
              </a>
            );
          })}
          <div className="mb-4 mt-10">
            <hr className="text-white/30 mb-2" />
            <a
              href="/"
              className="text-white font-medium flex gap-2 hover:bg-brand/30 rounded-lg py-2 px-6"
            >
              Login
            </a>
            <a
              href="/"
              className="text-white font-medium flex gap-2 hover:bg-brand/30 rounded-lg py-2 px-6"
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 ms-auto">
          <button className="text-white hover:bg-primary/20 transition-colors py-2 px-4 rounded-lg cursor-pointer">
            Login
          </button>
          <button className="text-white bg-primary hover:bg-primary/80 transition-colors py-2 px-4 rounded-lg cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
