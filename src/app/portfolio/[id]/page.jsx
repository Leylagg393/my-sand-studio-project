import { projects } from '@/Components/data';
import Link from 'next/link';

const ProjectDetail = async ({ params }) => {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F2EAE4]">
        <h1 className="text-[#3E2723] font-serif italic text-2xl">Проект не найден</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2EAE4] text-[#3E2723] pb-20">
      {/* ВЕРХНЯЯ ЧАСТЬ (HERO) */}
      <section className="relative h-[70vh] flex items-end justify-start p-6 md:p-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <Link href="/portfolio" className="text-[#F2EAE4]/60 uppercase text-[10px] tracking-[0.4em] mb-6 block hover:text-[#F2EAE4] transition-colors">
            ← Назад в галерею
          </Link>
          <span className="text-[#8D6E63] font-bold text-xs uppercase tracking-[0.5em] mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif italic text-[#F2EAE4] leading-none">
            {project.title}
          </h1>
        </div>
      </section>

      {/* КОНТЕНТНАЯ ЧАСТЬ */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Левая колонка - Крупное описание */}
        <div className="md:col-span-7">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#8D6E63] mb-8 font-bold">О проекте</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#5D4037] italic">
            "{project.description}"
          </p>
          
          {/* Декоративное второе фото (можно использовать ту же картинку или заглушку) */}
          <div className="mt-16 rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={project.image} className="w-full h-[400px] object-cover saturate-[0.8] sepia-[10%]" alt="Detail view" />
          </div>
        </div>

        {/* Правая колонка - Детали и Характеристики */}
        <div className="md:col-span-5 space-y-12">
          <div className="bg-[#EADFD5] p-10 rounded-[2.5rem] shadow-xl border border-[#3E2723]/5">
            <h3 className="text-xl font-serif mb-8 border-b border-[#3E2723]/10 pb-4">Спецификации</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest opacity-50">Локация</span>
                <span className="font-serif italic">Almaty, KZ</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest opacity-50">Материалы</span>
                <span className="font-serif italic">Дуб, Травертин</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest opacity-50">Площадь</span>
                <span className="font-serif italic">120 m²</span>
              </div>
            </div>

            <button className="w-full mt-10 bg-[#3E2723] text-[#F2EAE4] py-5 rounded-full hover:bg-[#8D6E63] transition-all uppercase text-[10px] tracking-widest font-bold">
              Заказать похожий проект
            </button>
          </div>

          {/* Цитата или Философия */}
          <div className="p-10 border-l-2 border-[#8D6E63]">
            <p className="text-[#3E2723]/60 font-light italic leading-loose">
              В этом пространстве мы стремились подчеркнуть тишину и текстуру, создавая место для перезагрузки от городского шума.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;