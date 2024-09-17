export default function Content({ shouldRender, header, para, imagesrc, mainDivStyle, imageStyle }) {
  return (
    <>
      <div className={mainDivStyle}>
        <div className="contentP">
          <h1>{header}</h1>
          <p>{para}</p>
          {shouldRender ? (
            <a href="" className="pageLink">See Artists</a>
          ) : (
            <button className="ticketButton">
              <a href="">Get Tickets</a>
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
     
