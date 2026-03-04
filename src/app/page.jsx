import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-[#F2EAE4] text-[#3E2723]">
      {/* HERO SECTION - Теперь с наложением цвета */}
      <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Warm Interior"
          />
          {/* Коричневый градиент поверх фото для "тепла" */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3E2723]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-6 text-[#F2EAE4]">
            Warmth <br/> & Soul
          </h1>
          <p className="text-[#F2EAE4]/80 text-lg mb-8 max-w-md">
            Мы не просто проектируем стены. Мы создаем убежище, где пахнет деревом, кофе и спокойствием.
          </p>
          <Link href="/portfolio" className="inline-block bg-[#8D6E63] text-white px-12 py-5 rounded-full hover:bg-[#5D4037] transition-all shadow-xl">
            Смотреть проекты
          </Link>
        </div>
      </section>

      {/* ЖИВАЯ СЕКЦИЯ */}
      <section className="py-32 grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto px-6">
        <div className="relative">
           <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000" className="rounded-2xl shadow-2xl" />
           <div className="absolute -bottom-10 -right-10 bg-[#8D6E63] p-10 rounded-2xl hidden md:block text-white shadow-2xl">
              <p className="text-3xl font-serif">10+</p>
              <p className="text-xs uppercase tracking-widest">Лет создаем уют</p>
           </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-serif mb-6 text-[#5D4037]">Натуральность в каждом касании</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            Забудьте о холодном пластике. В наших работах только живое дерево, натуральный лен и обожженная глина.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;