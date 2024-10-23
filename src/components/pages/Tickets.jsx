import Content from "../content";   
export default function Tickets(){
    return(
        <>
        <Content shouldRender={false} header={"Our Tickets are available on ticketwings"} para={`Get ready for Halloween 4.0—our biggest and boldest event yet! Immerse yourself in a mind-blowing cyberpunk world with jaw-dropping cosplay battles, epic live bands,fantastic small business stalls and mouthwatering food. Step into the eerie world of our Spooky Halloween Event, where haunted thrills and chilling surprises await. Join us for a night filled with creepy costumes, atmosphere that will send shivers down your spine.`} imagesrc={"/images/Tickets.png"} mainDivStyle={"content"} imageStyle={"contentImg"} linkName={"Get Tickets"} hrefLink={"https://book.ticketwings.in/event/204"}/>
        </>
    )
}