import React, { useState, useEffect, useRef } from "react";
import { Search, User } from "lucide-react";
import Navbar from "../components/navbar";
import "./LandingPage.css";
import MetaRow from "../components/MetaRow";
import Hero from "../components/hero";
import Footer from "../components/footer";

const TITLE = "DEADPOOL";

export default function CineDailyLanding() {
  const [ripples, setRipples] = useState([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playPressed, setPlayPressed] = useState(false);

  const heroRef = useRef(null);
  const characterRef = useRef(null);
  const scanRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const handleMouseMove = (e) => {
    if (reducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (characterRef.current) {
      characterRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
    if (scanRef.current) {
      scanRef.current.style.transform = `translate(${-50 + x * -3}%, ${-50 + y * -3}%)`;
    }
  };

  const handleMouseLeave = () => {
    if (characterRef.current) characterRef.current.style.transform = "";
    if (scanRef.current) scanRef.current.style.transform = "translate(-50%,-50%)";
  };

  const handleBookClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const id = Date.now();
    const style = {
      width: size,
      height: size,
      left: e.clientX - rect.left - size / 2,
      top: e.clientY - rect.top - size / 2,
    };
    setRipples((prev) => [...prev, { id, style }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <div className="cd-body">
      <div className="cd-card">
        <div className="cd-grid-bg" />
        <div className="cd-sweep" />

        {/* NAVBAR */}
        <Navbar />

        {/* META ROW */}
       <MetaRow />

       <Hero TITLE={TITLE} />

        {/* FOOTER */}
        <Footer ripples={ripples} handleBookClick={handleBookClick} />
       
      </div>
    </div>
  );
}
