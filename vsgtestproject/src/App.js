import logo from './logo.svg';
import './App.css';
import { Home } from "./pages/Home"
import { Crypto } from './pages/Crypto';
import { Whishlist } from './pages/Whishlist';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/crypto" element={<Crypto/>}/>
          <Route path="/whishlist" element={<Whishlist/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
