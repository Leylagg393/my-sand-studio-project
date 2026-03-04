import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-b border-[#6B5E4C]/5">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Логотип */}
        <Link href="/" className="text-xl font-light tracking-[0.4em] text-[#6B5E4C] hover:opacity-70 transition-opacity">
          LINEN.STUDIO
        </Link>
        
        {/* Меню */}
        <div className="flex gap-10 text-[11px] uppercase tracking-[0.2em] text-[#6B5E4C] font-medium">
          <Link href="/portfolio" className="relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E5D3B3] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E5D3B3] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E5D3B3] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E5D3B3] transition-all group-hover:w-full"></span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;