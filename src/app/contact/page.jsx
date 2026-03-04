import React from 'react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-[#3E2723] min-h-screen text-[#F2EAE4]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h1 className="text-6xl font-serif italic mb-10">Заходите <br/> на кофе</h1>
            <p className="text-[#F2EAE4]/60 mb-12 text-lg">Обсудим ваш будущий проект в нашей уютной студии или онлайн.</p>
            
            <div className="space-y-8">
               <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-[#8D6E63] mb-2">Напишите нам</p>
                  <p className="text-2xl font-serif group-hover:text-[#8D6E63] transition-colors">hello@warmstudio.kz</p>
               </div>
               <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-[#8D6E63] mb-2">Позвоните</p>
                  <p className="text-2xl font-serif group-hover:text-[#8D6E63] transition-colors">+7 (777) 123 45 67</p>
               </div>
            </div>
          </div>

          <div className="bg-[#F2EAE4] p-10 rounded-[3rem] text-[#3E2723] shadow-2xl">
            <h3 className="text-2xl font-serif mb-8 text-center uppercase tracking-tighter">Оставить заявку</h3>
            <form className="flex flex-col gap-5">
              <input type="text" placeholder="Ваше имя" className="bg-transparent border-b border-[#3E2723]/20 py-4 outline-none focus:border-[#8D6E63]" />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-[#3E2723]/20 py-4 outline-none focus:border-[#8D6E63]" />
              <textarea placeholder="О каком доме вы мечтаете?" rows="4" className="bg-transparent border-b border-[#3E2723]/20 py-4 outline-none focus:border-[#8D6E63] resize-none"></textarea>
              <button className="mt-6 bg-[#3E2723] text-[#F2EAE4] py-5 rounded-full hover:bg-[#8D6E63] transition-all uppercase text-[10px] tracking-[0.3em] font-bold">
                Отправить в работу
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;