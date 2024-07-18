import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Knowldge from './components/knowldge/Knowldge'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  return (
    <div className="App">
       <Header/>
        <Hero/>
        <About/>
        <Knowldge/>
        <Projects/>
        <Testimonials/>
    </div>
  );
}

export default App;
