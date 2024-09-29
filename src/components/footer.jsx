
export default function Footer(){
    return( <>
        <div className="footer">
            <div className="footerDiv">
               <h1 >Get In Touch</h1>
            <p className="footerP">Need any Assistance? Do you think we are cool?</p>
            <button className="footerButton" ><a href="https://www.instagram.com/nosolotribe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Join The Tribe</a></button>
            </div>
            <div className="socials">
               <a className="socialsA"  href="https://www.instagram.com/nosolotribe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <img className="socialsLogo"  src="/images/instagram.png" alt=""  href=""/></a>
               <a className="socialsA" href="nosolotribe@gmail.com"><img className="socialsLogo" src="/images/email.png" alt=""></img></a>
                <a className="socialsA"  href="https://x.com/nosolotribe"><img className="socialsLogo"   src="/images/X.png" alt=""  href="" /></a>
               
              </div> 
        </div>
        </>)
   
}