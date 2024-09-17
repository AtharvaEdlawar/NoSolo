import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import { Route, Routes } from "react-router-dom";
function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
