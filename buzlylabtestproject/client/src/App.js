import logo from './logo.svg';
import './App.css';
import { Home } from "./pages/Home"
import { NewMessage } from './pages/NewMessage';
import { MessageDetail } from './pages/MessageDetail';
import { Messages } from './pages/Messages';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/message" element={<NewMessage/>}/>
          <Route path="/message/:messageid" element={<MessageDetail/>}/>
          <Route path="/message/all" element={<Messages/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
