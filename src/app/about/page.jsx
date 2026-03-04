import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-[#F2EAE4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Основное фото */}
            <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000" alt="Team" />
            </div>
            {/* Маленькое декоративное фото сверху */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl hidden md:block border-8 border-[#F2EAE4]">
              <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1000" className="object-cover w-full h-full" alt="Detail" />
            </div>
          </div>

          <div className="pl-6">
            <h2 className="text-5xl font-serif italic text-[#3E2723] mb-10 leading-tight">
              Дом — это продолжение <br/> вашей <span className="text-[#8D6E63]">души</span>.
            </h2>
            <p className="text-xl text-[#5D4037] leading-relaxed mb-8 italic">
              «Мы устали от пластика и серого бетона. Наша миссия — вернуть в квартиры тепло живого огня и текстуру дерева».
            </p>
            <div className="space-y-6 text-[#3E2723]/80 font-light">
              <p>Мы работаем с 2026 года, объединяя мастеров-краснодеревщиков и современных дизайнеров. Каждый наш проект — это ручная работа.</p>
              <div className="flex gap-10 pt-6">
                 <div>
                    <p className="text-3xl font-serif text-[#8D6E63]">150+</p>
                    <p className="text-[10px] uppercase tracking-widest">Проектов</p>
                 </div>
                 <div>
                    <p className="text-3xl font-serif text-[#8D6E63]">24</p>
                    <p className="text-[10px] uppercase tracking-widest">Награды</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;