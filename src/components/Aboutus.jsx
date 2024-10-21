import React from "react";


export default function Timeline ({ events }) {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="event-content">
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <img src={event.imgUrl} alt={event.title} />
              <p>{event.description}</p>
            </div>
          </div>
        ))}
        <div className="vertical-line">
          {events.map((_, index) => (
            <div className="timeline-dot" key={index}></div>
          ))}
        </div>

      </div>
    </div>
  );
};


