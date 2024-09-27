import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Cosplayers from "./components/pages/cosplayers"
import Artists from "./components/pages/Artists";
import Aboutus from "./components/pages/About";
import Tickets from "./components/pages/Tickets";
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cosplayers" element={<Cosplayers/>} />
        <Route path="/artist" element={<Artists/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
