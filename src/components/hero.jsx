import React from "react";
import "./hero.css";
import deadpoolImg from "../assets/deadpool.png"; 

const Hero = ({ 
  TITLE,
  heroRef, 
  scanRef, 
  characterRef, 
  handleMouseMove, 
  handleMouseLeave, 
  playPressed, 
  setPlayPressed 
}) => {
  return (
    <div className="cd-hero" ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      
      {/* Decorative Part Indicator */}
      <div className="cd-part-marker">
        <div className="cd-tick" /> III <div className="cd-tick" />
      </div>

      {/* Actor Billing Header */}
      <div className="cd-cast-row">
        <div className="cd-cast-group left">
          <span>RYAN REYNOLDS</span>
          <span>KARAN SONI</span>
        </div>
        <div className="cd-cast-group right">
          <span>EMMA CORRIN</span>
          <span>HUGH JACKMAN</span>
        </div>
      </div>

      {/* THE STACKED GRAPHICS SECTION */}
      <div className="cd-center-stage">
        
        {/* Background Layer: Red Disc Target */}
        <div className="cd-scan-wrap" ref={scanRef}>
          <div className="cd-red-disc" />
        </div>

        {/* Middle Layer: The Giant Text */}
        <div className="cd-title-row">
          <h1 className="cd-movie-title">
            {TITLE.split("").map((letter, i) => (
              <span key={i} className="cd-ch" style={{ animationDelay: `${0.75 + i * 0.06}s` }}>
                {letter}
              </span>
            ))}
          </h1>
          <span className="cd-year-tag">[2024]</span>
        </div>

        {/* Foreground Layer: The Centered Character */}
        <img 
          src={deadpoolImg} 
          alt="Deadpool" 
          className="cd-character-img" 
          ref={characterRef}
        />

      </div>
      
    </div>
  );
};

export default Hero;