import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx";
import ContactInfo from './Pages/ContactInfo';
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/id/:id" element = {<ContactInfo />} />
      </Routes>
    </div>
  );
}

export default App;
