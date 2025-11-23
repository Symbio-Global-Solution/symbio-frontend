import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 
import Menu from './components/Menu/Menu';
import Footer from './components/Rodape/Rodape'; 

// Importação das Páginas
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Faq from './pages/Faq';
import Sobre from './pages/Sobre';  
import Error from './pages/Error';
import Match from './pages/Match';
import Cadastro from './pages/Cadastro';



function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans selection:bg-symbio-purple selection:text-white bg-symbio-light dark:bg-symbio-dark transition-colors duration-300">
          
          <Menu />
          
          <main className="flex-grow pt-28 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="*" element={<Error />} />
              <Route path='/match' element={<Match />} />
              <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
          </main>

          <Footer />
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;