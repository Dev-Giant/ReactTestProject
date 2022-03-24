import logo from './logo.svg';
import './App.css';
import { Home } from "./pages/Home"
import { NewMessage } from './pages/NewMessage';
import { MessageDetail } from './pages/MessageDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/message" element={<NewMessage/>}/>
          <Route path="/message/:id" element={<MessageDetail/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
