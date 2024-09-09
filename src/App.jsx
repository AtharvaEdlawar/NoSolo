import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
