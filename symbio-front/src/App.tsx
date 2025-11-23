import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Menu from './components/Menu/Menu';

import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Faq from './pages/Faq';
import Error from './pages/Error';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans selection:bg-symbio-purple selection:text-white">
          <Menu />
          
          <main className="flex-grow pt-28 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/faq" element={<Faq />} />
              <Route path='/error' element={<Error/>} />
            </Routes>
          </main>
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;