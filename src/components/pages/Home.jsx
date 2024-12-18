import React from "react";
import Content from "../content";   
import Hero from "../hero";
export default function Home(){
return(<>
<div className="halloweenHero">

</div>
     <Hero/>
     <Content shouldRender={false} header={"Cosplay Contest"} para={" Attention all cosplayers! Get ready to bring your favorite characters to life at our Spooky Halloween Cosplay Contest. Whether you're channeling a terrifying villain, a supernatural hero, or an iconic Halloween figure, this is your chance to shine. Show off your costume-making skills, creativity, and attention to detail as you compete for the title of best cosplay. With exciting prizes and a crowd of enthusiastic fans, this contest promises to be one of the highlights of the night."} imagesrc={"/images/Ryukendo.jpg"} mainDivStyle={"content"} imageStyle={"contentImg"} hrefLink={"/cosplayers"} linkName={"Cosplay Registration"}/>
     <Content shouldRender={false} header={"Performing Artists"} para={"Calling all performing artists! This Halloween, take the stage at our Spooky Halloween Event and showcase your talents in front of a captivated audience. Whether you're a musician, dancer, magician, or performer of any kind, this is your chance to bring your creativity to life in a thrilling, haunted atmosphere. Step into the spotlight and add a touch of magic, mystery, or fright to the night. Join us for an unforgettable evening of performances where art meets the supernatural."} imagesrc={"/images/ArtistMan.jpg"} mainDivStyle={"contentReverse"}  imageStyle={"contentImg"} hrefLink={"/artist"} linkName={"Artist Registration"} />
      <Content shouldRender={false} header={"Welcome to the Spooky Halloween Event"} para={`Get ready for Halloween 4.0—our biggest and boldest event yet! Immerse yourself in a mind-blowing cyberpunk world with jaw-dropping cosplay battles, epic live bands,fantastic small business stalls and mouthwatering food. Step into the eerie world of our Spooky Halloween Event, where haunted thrills and chilling surprises await. Join us for a night filled with creepy costumes, atmosphere that will send shivers down your spine.`} imagesrc={"/images/poster.jpg"} mainDivStyle={"content"} imageStyle={"contentImg"} hrefLink={"https://book.ticketwings.in/event/204"} linkName={"GetTickets"}/>
      
      

    </>)
    
}
