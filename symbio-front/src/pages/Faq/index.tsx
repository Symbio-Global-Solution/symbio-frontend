import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../../components/Menu/Menu';
import { faqData } from '../../data/FaqData'; 

const Faq = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleFaq = (index: number) => {
setActiveIndex(activeIndex === index ? null : index);
};

return (
<div className="min-h-screen bg-symbio-light dark:bg-symbio-dark text-gray-800 dark:text-white font-sans relative overflow-x-hidden flex flex-col transition-colors duration-300">

  <div className="fixed top-20 left-[-100px] w-96 h-96 bg-symbio-purple/20 rounded-full blur-[120px] pointer-events-none hidden dark:block" />
  <div className="fixed bottom-0 right-[-100px] w-80 h-80 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none hidden dark:block" />

  <Navbar />

  <div className="w-full pt-32 pb-20 px-6 relative z-10 flex-grow">
    <div className="max-w-6xl mx-auto">
      
      <div className="text-center mb-16">
        <span className="text-symbio-purple font-bold tracking-wider text-sm uppercase mb-2 block">
          Tira Dúvidas
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-symbio-purple to-pink-500">Frequentes</span>
        </h1>
        <p className="opacity-80 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
          Entenda como a Symbio pode transformar a gestão de talentos da sua empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        <div className="lg:col-span-2 space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`
                border rounded-2xl transition-all duration-300 overflow-hidden
                ${activeIndex === index 
                  ? 'bg-white dark:bg-white/5 border-symbio-purple/50 shadow-lg ring-1 ring-symbio-purple/20'
                  : 'bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-symbio-purple/30'
                }
              `}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xl ${activeIndex === index ? 'text-symbio-purple' : 'opacity-50'}`}>
                    <FaQuestionCircle />
                  </span>
                  <span className="font-semibold text-lg pr-4">
                    {item.question}
                  </span>
                </div>
                
                <span className={`text-symbio-purple transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>

              <div 
                className={`
                  px-6 overflow-hidden transition-all duration-300 ease-in-out
                  ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <p className="text-base opacity-70 leading-relaxed pl-9 border-l-2 border-symbio-purple/20 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8 text-center lg:text-left">
             <p className="opacity-60 mb-4 text-sm">Não achou o que procurava?</p>
          </div>
        </div>

        

      </div>
      
    </div>
  </div>
</div>


);
};

export default Faq;