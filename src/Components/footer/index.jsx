import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F0] border-t border-[#6B5E4C]/5 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Левая часть: Логотип и копирайт */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-light tracking-[0.3em] text-[#6B5E4C] mb-2">
            LINEN.STUDIO
          </h2>
          <p className="text-[10px] text-[#6B5E4C]/40 uppercase tracking-widest">
            © 2026 All rights reserved
          </p>
        </div>

        {/* Правая часть: Соцсети / Контакты */}
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] text-[#6B5E4C]">
          <a href="#" className="hover:text-[#E5D3B3] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#E5D3B3] transition-colors">Pinterest</a>
          <a href="#" className="hover:text-[#E5D3B3] transition-colors">Telegram</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;