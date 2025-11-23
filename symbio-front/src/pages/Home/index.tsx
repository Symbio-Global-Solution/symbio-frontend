import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBriefcase, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
import { apiService } from '../../services/apiService'; 
import logo from '../../assets/symbio-logo.png';
// Importe o Menu aqui se ele não estiver no Layout principal (App.tsx)
import Menu from '../../components/Menu/Menu'; 

interface DashboardData {
  colaboradores: number;
  vagas: number;
  cargos: number;
}

const Home = () => {
  const [stats, setStats] = useState<DashboardData>({ colaboradores: 0, vagas: 0, cargos: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Adicionei um tratamento de erro silencioso com fallback (0) caso a API falhe no início
        const [colabData, vagasData, cargosData] = await Promise.all([
          apiService.get<any[]>('/colaboradores').catch(() => []),
          apiService.get<any[]>('/vagas').catch(() => []),
          apiService.get<any[]>('/cargos').catch(() => [])
        ]);

        setStats({
          colaboradores: colabData.length,
          vagas: vagasData.length,
          cargos: cargosData.length
        });
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    // 1. CONTAINER PRINCIPAL: Fundo cinza claro no Light, Fundo Preto no Dark
    <div className="min-h-screen w-full relative overflow-x-hidden bg-gray-50 dark:bg-[#050510] transition-colors duration-300">
      
      <Menu />

      {/* Efeito de Fundo (Só aparece no Dark Mode para manter o Light Mode limpo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#764A95] opacity-20 blur-[120px] rounded-full pointer-events-none -z-10 hidden dark:block"></div>

      <div className="max-w-6xl mx-auto pt-32 pb-20 px-6">
        
        <div className="text-center mb-20 mt-10">
          
          <img 
            src={logo} 
            alt="Symbio Logo" 
            className="h-32 mx-auto mb-8 drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />

          {/* TÍTULO: Preto no Light, Branco no Dark */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Não espere o futuro. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-white dark:to-[#B265D9]">
              A Evolução do Trabalho é agora.
            </span>
          </h1>
          
          {/* SUBTÍTULO: Cinza escuro no Light, Cinza claro no Dark */}
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            A plataforma da SYMBIO utiliza IA para analisar o perfil dos seus colaboradores e encontrar o match perfeito para vagas internas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/match"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              Iniciar Análise de Match <FaArrowRight size={16} />
            </Link>
            
            {/* BOTÃO SECUNDÁRIO: Ajustado para Light/Dark */}
            <Link 
              to="/sobre"
              className="px-8 py-4 rounded-full font-medium transition-all border 
                bg-white text-gray-700 border-gray-300 hover:bg-gray-100
                dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10"
            >
              Saiba como funciona
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* --- CARDS DE ESTATÍSTICAS --- 
              Mudança: Fundo branco e sombra no Light | Fundo translúcido no Dark
          */}

          {/* Card 1 */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg dark:shadow-none hover:border-purple-500/50 transition-colors group">
            <div className="bg-purple-100 dark:bg-[#764A95]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaUsers className="text-purple-600 dark:text-[#B265D9] text-xl" />
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Total Colaboradores</h3>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              {loading ? <span className="animate-pulse">...</span> : stats.colaboradores}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg dark:shadow-none hover:border-blue-500/50 transition-colors group">
            <div className="bg-blue-100 dark:bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Vagas Abertas</h3>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              {loading ? <span className="animate-pulse">...</span> : stats.vagas}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg dark:shadow-none hover:border-emerald-500/50 transition-colors group">
            <div className="bg-emerald-100 dark:bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaLayerGroup className="text-emerald-600 dark:text-emerald-400 text-xl" />
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Cargos Mapeados</h3>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              {loading ? <span className="animate-pulse">...</span> : stats.cargos}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;