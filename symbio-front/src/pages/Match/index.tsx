import { useState, useEffect } from 'react';
import { apiService } from '../../services/apiService';
import Menu from '../../components/Menu/Menu'; 
import { FaRobot, FaCheckCircle, FaExclamationTriangle, FaSearch, FaSpinner } from 'react-icons/fa';

interface SimpleData {
  id: number;
  nome: string;
  cargo?: string;
}

interface MatchResult {
  compatibilidade: number;
  skillsMatch: string[];
  gaps: string[];
  mensagem?: string;
}

const Match = () => {
  const [colaboradores, setColaboradores] = useState<SimpleData[]>([]);
  const [vagas, setVagas] = useState<SimpleData[]>([]);
  
  const [selectedColab, setSelectedColab] = useState<string>("");
  const [selectedVaga, setSelectedVaga] = useState<string>("");
  
  const [result, setResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState(false);         
  const [initialLoading, setInitialLoading] = useState(true); 
  const [usingMock, setUsingMock] = useState(false); 

  useEffect(() => {
    const loadData = async () => {
      setInitialLoading(true);
      try {
        console.log("🔄 Tentando conectar com a API Java...");

        const [rawVagas, rawColabs] = await Promise.all([
          apiService.get<any[]>('/vagas').catch(() => []),
          apiService.get<any[]>('/colaboradores').catch(() => [])
        ]);

        if (rawVagas.length === 0 && rawColabs.length === 0) {
           throw new Error("Listas vazias retornadas pela API");
        }

        const vagasMapped = rawVagas.map((v) => ({
          id: v.id_vaga || v.id,
          nome: v.ds_titulo || v.titulo || v.nome || "Vaga sem título"
        }));

        const colabsMapped = rawColabs.map((c) => ({
          id: c.id_colaborador || c.id,
          nome: c.nm_colaborador || c.nome,
          cargo: c.nm_cargo || c.ds_cargo || c.cargo || "Cargo não informado"
        }));

        setVagas(vagasMapped);
        setColaboradores(colabsMapped);
        setUsingMock(false);
        console.log("✅ Dados carregados da API Real!");

      } catch (err) {
        console.error("⚠️ Falha na API. Ativando Modo Mock.", err);
        setUsingMock(true);
        loadMockData(); 
      } finally {
        setInitialLoading(false);
      }
    };

    loadData();
  }, []);

  const loadMockData = () => {
    setColaboradores([
      { id: 1, nome: "Henrique Cesar (Demo)", cargo: "FullStack" },
      { id: 2, nome: "Maria Santos (Demo)", cargo: "Analista" }
    ]);
    setVagas([
      { id: 101, nome: "Dev Frontend React (Demo)" },
      { id: 102, nome: "Tech Lead Java (Demo)" }
    ]);
  };

  // AÇÃO DE MATCH
  const handleAnalyze = async () => {
    if (!selectedColab || !selectedVaga) return;
    setLoading(true);
    setResult(null);

    if (usingMock) {
      setTimeout(() => {
        setResult({
          compatibilidade: 88,
          skillsMatch: ['React', 'TypeScript', 'Git'],
          gaps: ['Java', 'Spring Boot'],
          mensagem: "Resultado Simulado (API Offline)"
        });
        setLoading(false);
      }, 1500);
      return;
    }

    try {
      const data = await apiService.get<any>(`/match/${selectedColab}/${selectedVaga}`);
      
      console.log("JSON MATCH:", data);

      // Mapeia a resposta do Java
      const safeResult: MatchResult = {
        compatibilidade: data.porcentagemMatch || 0,
        skillsMatch: data.skillsEmComum || [],
        gaps: data.skillsFaltantes || [],
        mensagem: data.mensagem || (data.porcentagemMatch === 100 ? "Match Perfeito!" : "Análise concluída.")
      };

      setResult(safeResult);

    } catch (err) {
      console.error("Erro no match:", err);
      setResult({
          compatibilidade: 0,
          skillsMatch: [],
          gaps: [],
          mensagem: "Erro ao processar. Tente novamente."
      });
    } finally {
      setLoading(false);
    }
  };

  const getDisplayPercentage = (value: number) => {
    if (typeof value !== 'number') return 0;
    return value <= 1 ? Math.round(value * 100) : Math.round(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050510] text-gray-900 dark:text-white pt-28 pb-20 px-6 flex flex-col items-center transition-colors duration-300 font-sans">
      
      <Menu />

      <div className="max-w-3xl w-full mt-6">
        
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 dark:bg-purple-600/20 rounded-full mb-4 shadow-[0_0_20px_rgba(124,58,237,0.3)] ring-1 ring-purple-500/30">
            <FaRobot className="text-4xl text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-2 tracking-tight">IA Match Analysis</h1>
          <p className="text-gray-500 dark:text-gray-400">Selecione os parâmetros para a IA calcular a aderência.</p>
          
          {usingMock && !initialLoading && (
             <span className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded-full border border-yellow-200 dark:border-yellow-500/20">
               <FaExclamationTriangle /> API Java Offline - Modo Demonstração
             </span>
          )}
        </div>

        {initialLoading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <FaSpinner className="animate-spin text-5xl text-purple-600 mb-6" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">Conectando ao ecossistema Symbio...</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-xl animate-fade-in-up">
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="group">
                   <label className="text-xs font-bold ml-1 mb-2 block uppercase text-gray-400 tracking-wider">Colaborador</label>
                   <div className="relative">
                     <select 
                       className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all appearance-none cursor-pointer"
                       value={selectedColab} 
                       onChange={(e) => setSelectedColab(e.target.value)}
                     >
                       <option value="">Selecione...</option>
                       {colaboradores.map(c => (
                         <option key={c.id} value={c.id} className="dark:bg-gray-900">
                           {c.nome}
                         </option>
                       ))}
                     </select>
                     <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"/>
                   </div>
                </div>

                <div className="group">
                   <label className="text-xs font-bold ml-1 mb-2 block uppercase text-gray-400 tracking-wider">Vaga Alvo</label>
                   <div className="relative">
                     <select 
                       className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all appearance-none cursor-pointer"
                       value={selectedVaga} 
                       onChange={(e) => setSelectedVaga(e.target.value)}
                     >
                       <option value="">Selecione...</option>
                       {vagas.map(v => (
                         <option key={v.id} value={v.id} className="dark:bg-gray-900">
                           {v.nome}
                         </option>
                       ))}
                     </select>
                     <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"/>
                   </div>
                </div>
             </div>

             <button 
               onClick={handleAnalyze} 
               disabled={!selectedColab || !selectedVaga || loading} 
               className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25
                 ${!selectedColab || !selectedVaga || loading
                   ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                   : 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-[1.01]'
                 }
               `}
             >
                {loading ? <><FaSpinner className="animate-spin"/> Processando...</> : 'Calcular Match'}
             </button>

             {result && (
                <div className="mt-8 overflow-hidden rounded-2xl animate-fade-in-up">
                   <div className={`p-8 text-center border ${
                      result.compatibilidade >= 70 
                        ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-500/30' 
                        : result.compatibilidade >= 40 
                        ? 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-500/30'
                        : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-500/30'
                   }`}>
                      <h2 className={`text-5xl font-bold mb-2 ${
                        result.compatibilidade >= 70 ? 'text-green-600 dark:text-green-400' : 
                        result.compatibilidade >= 40 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {getDisplayPercentage(result.compatibilidade)}%
                      </h2>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">Índice de Compatibilidade</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl">
                             <p className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                               <FaCheckCircle className="text-green-500"/> Pontos Fortes
                             </p>
                             <div className="flex flex-wrap gap-2">
                                 {result.skillsMatch?.length > 0 ? result.skillsMatch.map((s, i) => (
                                     <span key={i} className="text-xs bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 px-2 py-1 rounded border border-green-200 dark:border-green-500/20">{s}</span>
                                 )) : <span className="text-xs text-gray-400 italic">Nenhum ponto forte detectado.</span>}
                             </div>
                          </div>

                          <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl">
                             <p className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                               <FaExclamationTriangle className="text-orange-500"/> Gaps
                             </p>
                             <div className="flex flex-wrap gap-2">
                                 {result.gaps?.length > 0 ? result.gaps.map((g, i) => (
                                     <span key={i} className="text-xs bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 px-2 py-1 rounded border border-orange-200 dark:border-orange-500/20">{g}</span>
                                 )) : <span className="text-xs text-gray-400 italic">Nenhum gap crítico.</span>}
                             </div>
                          </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/5">
                        <p className="text-sm italic text-gray-600 dark:text-gray-400">
                          <span className="font-bold text-purple-600 dark:text-purple-400 not-italic mr-2">Insight IA:</span> 
                          "{result.mensagem}"
                        </p>
                      </div>
                   </div>
                </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Match;