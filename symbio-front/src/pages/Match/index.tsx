import { useState, useEffect } from 'react';
import { apiService } from '../../services/apiService';
import { FaRobot, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

interface SimpleData {
  id: number;
  nome?: string;
  titulo?: string;
  descricao?: string;
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
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [colabs, vgs] = await Promise.all([
          apiService.get<SimpleData[]>('/colaboradores'),
          apiService.get<SimpleData[]>('/vagas')
        ]);
        setColaboradores(colabs);
        setVagas(vgs);
      } catch (err) {
        console.error("Erro ao carregar listas:", err);
        setError("Falha ao carregar dados da API Java. Verifique a conexão.");
      }
    };
    loadData();
  }, []);

  const handleAnalyze = async () => {
    if (!selectedColab || !selectedVaga) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await apiService.get<MatchResult>(`/match/${selectedColab}/${selectedVaga}`);
      setResult(data);
      
    } catch (err) {
      console.error(err);
      setError("Erro ao calcular match. Tente novamente.");
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 flex flex-col items-center">
      
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-symbio-purple/20 rounded-full mb-4">
            <FaRobot className="text-3xl text-symbio-purple" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-2">IA Match Analysis</h1>
          <p className="text-gray-400">Selecione os parâmetros para a IA calcular a aderência.</p>
        </div>

        <div className="glass p-8 rounded-3xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300 ml-2">COLABORADOR</label>
              <select 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-symbio-purple focus:outline-none transition-colors"
                value={selectedColab}
                onChange={(e) => setSelectedColab(e.target.value)}
              >
                <option value="">Selecione um talento...</option>
                {colaboradores.map((c) => (
                  <option key={c.id} value={c.id} className="bg-gray-900">{c.nome || `ID: ${c.id}`}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300 ml-2">VAGA ALVO</label>
              <select 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-symbio-purple focus:outline-none transition-colors"
                value={selectedVaga}
                onChange={(e) => setSelectedVaga(e.target.value)}
              >
                <option value="">Selecione uma vaga...</option>
                {vagas.map((v) => (
                  <option key={v.id} value={v.id} className="bg-gray-900">{v.titulo || `Vaga ID: ${v.id}`}</option>
                ))}
              </select>
            </div>
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={!selectedColab || !selectedVaga || loading}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2
              ${!selectedColab || !selectedVaga 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-symbio-purple hover:bg-purple-600 text-white shadow-[0_0_20px_rgba(118,74,149,0.4)] hover:scale-[1.02]'
              }
            `}
          >
            {loading ? 'Processando IA...' : 'Calcular Compatibilidade'}
          </button>

          {error && <p className="text-red-400 text-center mt-4 text-sm">{error}</p>}
        </div>

        {result && (
          <div className="glass p-8 rounded-3xl animate-fade-in-up">
            <h2 className="text-center font-bold text-2xl mb-8">Resultado da Análise</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
              
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-symbio-purple"
                    strokeDasharray={`${result.compatibilidade}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-3xl font-bold text-white">{result.compatibilidade}%</span>
                  <span className="block text-xs text-gray-400">MATCH</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                  <h3 className="text-green-400 font-bold text-sm flex items-center gap-2 mb-2">
                    <FaCheckCircle /> SKILLS COMPATÍVEIS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.skillsMatch?.length > 0 ? result.skillsMatch.map(s => (
                      <span key={s} className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">{s}</span>
                    )) : <span className="text-xs text-gray-500">Nenhuma skill direta encontrada.</span>}
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg">
                  <h3 className="text-orange-400 font-bold text-sm flex items-center gap-2 mb-2">
                    <FaExclamationTriangle /> GAPS IDENTIFICADOS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     {result.gaps?.length > 0 ? result.gaps.map(g => (
                      <span key={g} className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">{g}</span>
                    )) : <span className="text-xs text-gray-500">Nenhum gap crítico.</span>}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Match;
