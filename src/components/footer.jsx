import React from "react";
import "./footer.css";

const Footer = ({ ripples, handleBookClick }) => {
  return (
    <div className="cd-info-bar">
      <div className="cd-story">
        <div className="cd-i">i</div>
        <div>
          <h4>DEADPOOL III STORY</h4>
          <p>
            <b>PART 3.</b> The merc with the mouth teams up for one more wild ride in the third
            chapter of the saga — louder, redder, and far less responsible than the last.
          </p>
        </div>
      </div>

      <button className="cd-book-btn" onClick={handleBookClick}>
        BOOK NOW
        {ripples.map((r) => (
          <span key={r.id} className="cd-ripple" style={r.style} />
        ))}
      </button>

      <div className="cd-video-badge">
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="cdCirclePath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="50" cy="50" r="48" fill="#111113" stroke="#2a2a2e" />
          <g className="cd-ring-text">
            <text fontSize="9" letterSpacing="2" fill="#9b9b9f">
              <textPath href="#cdCirclePath">• VIDEO • VIDEO • VIDEO</textPath>
            </text>
          </g>
          <polygon fill="var(--red, #e2222b)" points="44,38 44,62 64,50" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;