import { useState } from "react";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "../../components/Menu/Menu";
import { faqData } from "../../data/FaqData";

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
              Perguntas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-symbio-purple to-pink-500">
                Frequentes
              </span>
            </h1>
            <p className="opacity-80 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300">
              Entenda como a Symbio pode transformar a gestão de talentos da sua
              empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`
                border rounded-2xl transition-all duration-300 overflow-hidden
                ${
                  activeIndex === index
                    ? "bg-white dark:bg-white/5 border-symbio-purple/50 shadow-lg ring-1 ring-symbio-purple/20"
                    : "bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-symbio-purple/30"
                }
              `}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xl ${
                          activeIndex === index
                            ? "text-symbio-purple"
                            : "opacity-50"
                        }`}
                      >
                        <FaQuestionCircle />
                      </span>
                      <span className="font-semibold text-lg pr-4">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`text-symbio-purple transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <FaChevronDown />
                    </span>
                  </button>

                  <div
                    className={`
                  px-6 overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    activeIndex === index
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
                  >
                    <p className="text-base opacity-70 leading-relaxed pl-9 border-l-2 border-symbio-purple/20 text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-8 text-center lg:text-left">
                <p className="opacity-60 mb-4 text-sm">
                  Não achou o que procurava?
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-symbio-purple/10 border border-symbio-purple/30 rounded-2xl p-8 sticky top-32 backdrop-blur-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Ainda precisa de ajuda?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
                  Nossa equipe de suporte técnico está disponível para auxiliar
                  na integração da plataforma.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-symbio-purple flex items-center justify-center text-white shadow-lg shadow-symbio-purple/30">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">
                        Email
                      </p>
                      <a
                        href="mailto:suporte@symbio.com"
                        className="text-gray-800 dark:text-white hover:text-symbio-purple transition-colors font-medium"
                      >
                        suporte@symbio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/30">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">
                        WhatsApp
                      </p>
                      <a
                        href="#"
                        className="text-gray-800 dark:text-white hover:text-green-500 transition-colors font-medium"
                      >
                        +55 (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">
                        Escritório
                      </p>
                      <p className="text-gray-800 dark:text-white text-sm font-medium">
                        Av. Paulista, 1106 - SP
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 py-3 bg-symbio-purple hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-symbio-purple/25 transform hover:-translate-y-1">
                  Abrir Chamado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
