import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Cosplayers from "./components/pages/cosplayers"
import { Route, Routes } from "react-router-dom";
function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cosplayers" element={<Cosplayers/>} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
