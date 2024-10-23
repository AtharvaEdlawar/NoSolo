import { button } from "framer-motion/client"

export default function Content({ shouldRender, header, para, imagesrc, mainDivStyle, imageStyle,hrefLink,linkName }) {
  return (
    <>
      <div className={mainDivStyle}>
        <div className="contentP">
          <h1 >{header}</h1>
          <p>{para}</p>
          {shouldRender ? (
           <button className="contentButton"> <a href={hrefLink} className="pageLink">{linkName}</a> </button> //No longer in use can be used to add hightlighted links instead of button set shouldRender to true for use
          ) : (
            <button className="ticketButton">
              <a href={hrefLink}>{linkName}</a>
            </button>
          )}
        </div>
        <div className="contentI">
          <img className={imageStyle} src={imagesrc} alt="WitchImg" />
        </div>
      </div>
    </>
  );
};
     
