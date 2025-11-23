import { Link } from 'react-router-dom';
import { FaRobot, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-symbio-light dark:bg-symbio-dark text-gray-800 dark:text-white transition-colors duration-300">
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-symbio-purple/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="glass p-12 rounded-3xl text-center max-w-lg mx-4 border border-white/20 shadow-2xl backdrop-blur-xl z-10">
        
        <div className="inline-flex mb-6 text-symbio-purple animate-bounce">
            <FaRobot size={60} />
        </div>

        <h1 className="font-display text-9xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-symbio-purple to-pink-500">
          404
        </h1>

        <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-white">
          Falha no Algoritmo
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mb-8 leading-relaxed">
          Parece que a página que você procura foi deletada ou nunca existiu neste universo de dados. Nossa IA não conseguiu encontrar um match para esta rota.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-symbio-purple hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-symbio-purple/40 hover:-translate-y-1"
        >
          <FaArrowLeft /> Voltar para o Sistema
        </Link>

      </div>

      <div className="absolute bottom-10 text-center w-full opacity-20 font-mono text-xs">
        ERRO_SISTEMA: ROTA_INVALIDA // REINICIANDO_PROTOCOLO_SYMBIO...
      </div>

    </div>
  );
};

export default NotFound;
