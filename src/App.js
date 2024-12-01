import './css/style.css';
import Navbar from './components/Nav/Navbar';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
function App() {

  return (
    <>
    <Navbar/>
    <Introduction/>
    <Experience/>
    <Skills/>
    </>
    
  );
}

export default App;
