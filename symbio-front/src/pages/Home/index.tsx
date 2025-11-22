import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBriefcase, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
import { apiService } from '../../services/apiService'; 

interface DashboardData {
  colaboradores: number;
  vagas: number;
  cargos: number;
}

const Home = () => {
  const [stats, setStats] = useState<DashboardData>({ colaboradores: 0, vagas: 0, cargos: 0 });
  const [loading, setLoading] = useState(true);

  // buscar dados da API 
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [colabData, vagasData, cargosData] = await Promise.all([
          apiService.get<any[]>('/colaboradores'),
          apiService.get<any[]>('/vagas'),
          apiService.get<any[]>('/cargos')
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
    <div className="min-h-screen w-full relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#764A95] opacity-20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto pt-10 pb-20 px-6">
        
        <div className="text-center mb-20 mt-10">
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Não espere o futuro. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B265D9]">
              A Evolução do Trabalho é agora.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            A plataforma da SYMBIO utiliza IA para analisar o perfil dos seus colaboradores e encontrar o match perfeito para vagas internas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/match"
              className="bg-[#764A95] hover:bg-[#5e3b7a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(118,74,149,0.5)] transition-all hover:scale-105 flex items-center gap-2"
            >
              Iniciar Análise de Match <FaArrowRight size={16} />
            </Link>
            
            <Link 
              to="/sobre"
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              Saiba como funciona
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#764A95]/50 transition-colors group">
            <div className="bg-[#764A95]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaUsers className="text-[#B265D9] text-xl" />
            </div>
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Total Colaboradores</h3>
            <p className="text-4xl font-bold text-white">
              {loading ? <span className="animate-pulse">...</span> : stats.colaboradores}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#764A95]/50 transition-colors group">
            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaBriefcase className="text-blue-400 text-xl" />
            </div>
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Vagas Abertas</h3>
            <p className="text-4xl font-bold text-white">
              {loading ? <span className="animate-pulse">...</span> : stats.vagas}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#764A95]/50 transition-colors group">
            <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaLayerGroup className="text-emerald-400 text-xl" />
            </div>
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Cargos Mapeados</h3>
            <p className="text-4xl font-bold text-white">
              {loading ? <span className="animate-pulse">...</span> : stats.cargos}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;