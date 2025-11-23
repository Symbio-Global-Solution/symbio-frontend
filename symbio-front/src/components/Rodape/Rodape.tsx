import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/symbio-logo.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-[#050510] text-gray-600 dark:text-gray-400 pt-20 pb-10 overflow-hidden border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none hidden dark:block" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={Logo} alt="Symbio Logo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white">Symbio</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Revolucionando a gestão de talentos através da inteligência artificial e análise de dados comportamentais.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Plataforma</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-purple-600 transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link to="/match" className="hover:text-purple-600 transition-colors">Análise de Match</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-purple-600 transition-colors">Sobre a IA</Link>
              </li>
              <li>
                <Link to="/equipe" className="hover:text-purple-600 transition-colors">Nossa Equipe</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Suporte</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/faq" className="hover:text-purple-600 transition-colors">FAQ & Ajuda</Link>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">Privacidade de Dados</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition-colors">Status do Sistema</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-white">Conecte-se</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 group shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-500 dark:text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 group shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-gray-500 dark:text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 group shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-500 dark:text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>
            &copy; {currentYear} SYMBIO. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido para a Global Solution FIAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;