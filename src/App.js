import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
 
function App() {
  return (
    <div className="App">
      <Header />
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
