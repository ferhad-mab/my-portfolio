import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import HeroSection from './components/heroSection';


function App() {
  return (
    <><header>

            <NavBar />
    </header><body>
        <HeroSection />
      </body></>
    
  );
}

export default App;
