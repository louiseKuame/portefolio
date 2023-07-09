// import logo from './logo.svg';
import './App.css';
import './Style.css';
// import Test from './pages/Test';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Testimony from './pages/Testimony';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/testimonies" element={ <Testimony/> } />
    </Routes>


     
    </div>
  );
}

export default App;
