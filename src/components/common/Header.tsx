"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import OrbyzaLogo from './OrbyzaLogo';

const navigation = [
  { label: 'Intelligence', href: '/services' },
  { label: 'Delhi', href: '/delhi' },
  { label: 'Global', href: '/usa' },
  { label: 'Academy', href: '/courses' },
  { label: 'Protocols', href: '/portfolio' },
  { label: 'Connect', href: '/contact', primary: true },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container-max h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <OrbyzaLogo height={44} />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                item.primary 
                  ? "bg-brand-primary text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-secondary" 
                  : "text-slate-600 hover:text-brand-primary"
              } ${pathname === item.href ? "text-brand-primary font-bold" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-900 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#FFFFFF] z-50 lg:hidden flex flex-col justify-center items-center gap-8">
            {navigation.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-bold uppercase ${
                  item.primary ? "text-brand-primary underline" : "text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
