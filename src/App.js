import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import HeroSection from './components/heroSection';
import AboutMe from './components/aboutMe';


function App() {
  return (
    <><header>

            <NavBar />
    </header><body>
        <HeroSection />
        <AboutMe/>
      </body></>
    
  );
}

export default App;
