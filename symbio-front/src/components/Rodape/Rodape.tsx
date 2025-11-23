import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import Logo from '../../assets/symbio-logo.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-symbio-dark text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-symbio-purple/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={Logo} alt="Symbio Logo" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight">Symbio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Revolucionando a gestão de talentos através da inteligência artificial e análise de dados comportamentais.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Plataforma</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-symbio-purple transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link to="/match" className="hover:text-symbio-purple transition-colors">Análise de Match</Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-symbio-purple transition-colors">Sobre a IA</Link>
              </li>
              <li>
                <Link to="/equipe" className="hover:text-symbio-purple transition-colors">Nossa Equipe</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Suporte</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/faq" className="hover:text-symbio-purple transition-colors">FAQ & Ajuda</Link>
              </li>
              <li>
                <a href="#" className="hover:text-symbio-purple transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-symbio-purple transition-colors">Privacidade de Dados</a>
              </li>
              <li>
                <a href="#" className="hover:text-symbio-purple transition-colors">Status do Sistema</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Conecte-se</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-symbio-purple hover:border-symbio-purple transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
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