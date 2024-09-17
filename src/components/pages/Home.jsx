import React from "react";
import Content from "../content";   
import Hero from "../hero";
export default function Home(){
return(<>
       <Hero />
      <Content shouldRender={false} header={"Welcome to the Spooky Halloween Event"} para={"Get ready for Halloween 4.0—our biggest and boldest event yet! Immerse yourself in a mind-blowing cyberpunk world with jaw-dropping cosplay battles, epic live bands,  fantastic small business stalls and mouthwatering food."} imagesrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-3b32ff9ae750d2a48f86.png"} mainDivStyle={"content"} imageStyle={"contentImg"}/>
      <Content shouldRender={true} header={"Performing Artists"} para={"The event features two nights of non-stop energy with thrilling bands, solo artists, DJs, and incredible dance performances! Feel the rush of performing in front of thousands and making your mark. Think you’ve got what it takes? Jump in and register now to wow the crowd!  "} imagesrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-f0db940bb3af05dc6fa9.png"} mainDivStyle={"performingArtist"}  imageStyle={"performingArtistImg"} />
      <Content shouldRender={true} header={"Cosplay Contest"} para={" A spectacular cosplay competition—the highlight of the event with jaw-dropping costumes and epic transformations will take the center stage! If you’re ready to bring your A-game and compete for amazing prizes, we want you to join the fun. Don’t miss out—register now and let your cosplay shine."} imagesrc={"https://storage.googleapis.com/uxpilot-auth.appspot.com/b29814cf57-1fd1140abfbebac42109.png"} mainDivStyle={"content"} imageStyle={"performingArtistImg"}/>

    </>)
    
}
