import Navbar from "./components/Navbar";
import Content from "./components/content";
import Hero from "./components/hero";
import Footer from "./components/footer";
function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <Content header={"Welcome to the Spooky Halloween Event"} para={"Join us for a night of fright and fun"} imagesrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-3b32ff9ae750d2a48f86.png"} mainDivStyle={"content"} imageStyle={"contentImg"} />
      <Content header={"Performing Artists"} para={"Discover the electrifying lineup of artists set to make this Halloween event unforgettable."} imagesrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-f0db940bb3af05dc6fa9.png"} mainDivStyle={"performingArtist"}  imageStyle={"performingArtistImg"} />
      <Content header={"Cosplay Contest"} para={"Cosplay brings people together, no matter who you are."} imagesrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-1fd1140abfbebac42109.png"} mainDivStyle={"content"} imageStyle={"performingArtistImg"}/>
      <Footer />
    </>
  );
}

export default App;
