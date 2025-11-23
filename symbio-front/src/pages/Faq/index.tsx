import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import Menu from '../../components/Menu/Menu';
import { faqData } from '../../data/Faqdata';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-page text-page font-sans relative overflow-x-hidden flex flex-col transition-colors duration-300">
      
      <div className="fixed top-20 left-[-100px] w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none hidden dark:block" />
      <div className="fixed bottom-0 right-[-100px] w-80 h-80 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none hidden dark:block" />

      <Menu />

      <div className="w-full pt-32 pb-20 px-6 relative z-10 flex-grow">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wider text-sm uppercase mb-2 block">
              Tira Dúvidas
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Frequentes</span>
            </h1>
            <p className="opacity-80 max-w-2xl mx-auto text-lg">
              Entenda como a Symbio pode transformar a gestão de talentos da sua empresa.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className={`
                  border rounded-2xl transition-all duration-300 overflow-hidden
                  ${activeIndex === index 
                    ? 'bg-card border-purple-500/50 shadow-lg ring-1 ring-purple-500/20'
                    : 'bg-card border-themeBorder hover:border-purple-500/30'
                  }
                `}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl ${activeIndex === index ? 'text-purple-500' : 'opacity-50'}`}>
                        <FaQuestionCircle />
                    </span>
                    <span className="font-semibold text-lg pr-8">
                      {item.question}
                    </span>
                  </div>
                  
                  <span className={`text-purple-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <FaChevronDown />
                  </span>
                </button>

                <div 
                  className={`
                    px-6 overflow-hidden transition-all duration-300 ease-in-out
                    ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <p className="text-base opacity-70 leading-relaxed pl-9 border-l-2 border-purple-500/20">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="opacity-60 mb-4">Ainda tem dúvidas?</p>
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1">
              Falar com Suporte
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq;