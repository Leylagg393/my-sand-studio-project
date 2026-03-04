import React from 'react';

const ServicesPage = () => {
  const services = [
    { title: 'Interior Design', price: 'от $50/м²', desc: 'Создаем интерьеры, в которых хочется проснуться. Используем только тактильные материалы: дерево, лен, шерсть.' },
    { title: 'Styling & Decor', price: 'от $300', desc: 'Финальный штрих вашего дома. Подбор винтажа, ваз и текстиля для создания живой атмосферы.' },
    { title: 'Renovation', price: 'Индивидуально', desc: 'Авторский надзор и управление стройкой, чтобы вы могли просто наслаждаться результатом.' }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-[#F2EAE4]">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#3E2723] mb-4">Наши услуги</h1>
          <p className="text-[#8D6E63] uppercase tracking-[0.3em] text-xs font-bold">Как мы создаем магию</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div key={index} className="bg-[#EADFD5] p-10 rounded-[3rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#3E2723]/5">
              <div className="w-12 h-12 bg-[#8D6E63] rounded-full flex items-center justify-center text-[#F2EAE4] mb-8 font-serif italic text-xl">
                {index + 1}
              </div>
              <h3 className="text-2xl font-serif text-[#3E2723] mb-4">{s.title}</h3>
              <p className="text-[#3E2723]/70 font-light leading-relaxed mb-8 h-24">{s.desc}</p>
              <div className="pt-6 border-t border-[#3E2723]/10">
                <span className="text-[#8D6E63] font-bold uppercase text-[10px] tracking-widest">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;