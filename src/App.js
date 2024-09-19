// import logo from './logo.svg';
import './App.css';
import Navbar from './Main Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomeFooter from './Main Components/HomeFooter';

import FishHome from './ProductHomePages/FishHome';
import Home from "./ProductHomePages/Home";
import FishProductPage from './ProductPages/FishProductPage';

function App() {

  return (
    <Router>
      <div className="App" >
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Fish Home" element={<FishHome />}/>
          <Route exact path="/Fish info" element={<FishProductPage />}/>
        </Routes>

        <HomeFooter/>
      </div>

    </Router>
  );
}

export default App;
