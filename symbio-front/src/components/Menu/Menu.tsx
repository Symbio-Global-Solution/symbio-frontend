import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';
import {  FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-symbio-purple to-blue-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className="font-display font-bold text-xl text-gray-800 dark:text-white hidden sm:block">SYMBIO</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link to="/" className="hover:text-symbio-purple dark:hover:text-white transition-colors">Home</Link>
            <Link to="/equipe" className="hover:text-symbio-purple dark:hover:text-white transition-colors">Equipe</Link>
            <Link to="/sobre" className="hover:text-symbio-purple dark:hover:text-white transition-colors">Sobre</Link>
            <Link to="/faq" className="hover:text-symbio-purple dark:hover:text-white transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-symbio-purple dark:text-yellow-400"
                aria-label="Alternar Tema"
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            <Link 
                to="/match" 
                className="bg-symbio-purple hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(118,74,149,0.4)] transition-all hover:scale-105"
            >
                Match
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;