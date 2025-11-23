import { FaRocket } from "react-icons/fa";
import Navbar from "../../components/Menu/Menu";
import { values, steps } from "../../data/sobreData";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-symbio-light dark:bg-symbio-dark text-gray-800 dark:text-white font-sans relative overflow-x-hidden flex flex-col transition-colors duration-300">
      <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-symbio-purple/10 rounded-full blur-[120px] pointer-events-none hidden dark:block" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none hidden dark:block" />

      <Navbar />

      <div className="w-full pt-32 pb-20 px-6 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-symbio-purple font-bold tracking-widest text-sm uppercase mb-4 block animate-pulse">
              Sobre Nós
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A Revolução do <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-symbio-purple to-pink-500">
                Reskilling Corporativo
              </span>
            </h1>
            <p className="opacity-70 text-lg max-w-2xl mx-auto leading-relaxed">
              Nascemos da necessidade de fechar o gap entre o talento que as
              empresas têm e as habilidades que o futuro exige.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-32 space-y-8">
            <h2 className="text-3xl font-bold">
              Por que a <span className="text-symbio-purple">SYMBIO</span>{" "}
              existe?
            </h2>
            <p className="opacity-80 leading-relaxed text-lg text-gray-600 dark:text-gray-300">
              O mundo corporativo enfrenta um paradoxo: temos mais vagas abertas
              em tecnologia do que profissionais qualificados, ao mesmo tempo em
              que temos talentos internos estagnados por falta de
              direcionamento.
            </p>
            <p className="opacity-80 leading-relaxed text-lg text-gray-600 dark:text-gray-300">
              A <strong>Symbio</strong> surgiu para resolver essa equação.
              Criamos uma "simbiose" entre inteligência artificial e gestão de
              pessoas, identificando potenciais ocultos dentro da sua própria
              organização e sugerindo trilhas de aprendizado precisas.
            </p>
          </div>

          <div className="mb-32 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Como funciona a Simbiose?
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Nosso processo em 4 etapas estruturadas.
              </p>
            </div>

            <div className="absolute left-8 md:left-1/2 top-20 bottom-0 w-1 bg-gradient-to-b from-symbio-purple/20 via-symbio-purple to-symbio-purple/20 -translate-x-1/2 hidden md:block"></div>
            <div className="absolute left-8 top-20 bottom-0 w-1 bg-gray-300 dark:bg-gray-800 -translate-x-1/2 block md:hidden"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-[#000010] border-4 border-gray-100 dark:border-[#2d1b3e] z-10 shadow-[0_0_20px_rgba(118,74,149,0.3)]">
                    <span className="text-xl text-symbio-purple dark:text-white">
                      {step.icon}
                    </span>
                  </div>

                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-symbio-purple/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${step.color} bg-opacity-80`}
                      >
                        PASSO 0{step.id}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-symbio-purple transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-center text-3xl font-bold mb-12">
              Nossos Pilares
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-symbio-purple/50 hover:-translate-y-2 transition-all duration-300 group text-center shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/20 text-symbio-purple rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="opacity-70 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-symbio-purple to-transparent"></div>

            <FaRocket className="text-4xl text-symbio-purple mx-auto mb-6" />

            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              De onde viemos?
            </h2>
            <p className="opacity-80 leading-relaxed text-gray-600 dark:text-gray-300">
              A Symbio nasceu como um projeto acadêmico inovador na{" "}
              <strong>FIAP</strong>, desenvolvido por estudantes apaixonados por
              tecnologia e gestão. O que começou como um código em Python e
              Java, evoluiu para uma plataforma completa de Inteligência de
              Negócios e RH.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
