import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  // Converted Google Drive View URL to Direct Image URL
  const logoUrl = "https://drive.google.com/uc?export=view&id=1XS6MzCab3kxlDaEvRxynPOfE6nEFpYkL";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center text-white bg-gradient-to-b from-coffee-900/90 to-transparent transition-all duration-300">
      <div className="flex items-center">
        <img 
          src={logoUrl} 
          alt="Logo Principal" 
          className="h-16 md:h-24 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" 
        />
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase items-center drop-shadow-md">
        <a href="#" className="hover:text-gold-500 transition-colors">Menú</a>
        <a href="#" className="hover:text-gold-500 transition-colors">Sabores</a>
        <a href="#" className="hover:text-gold-500 transition-colors">Catering</a>
        <a href="#" className="hover:text-gold-500 transition-colors">Contacto</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden md:block font-bold drop-shadow-md">ES / EN</button>
        <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gold-500 transition-colors drop-shadow-md" />
        <Menu className="w-6 h-6 md:hidden cursor-pointer drop-shadow-md" />
      </div>
    </nav>
  );
};