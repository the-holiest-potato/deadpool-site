import React from "react";
import { Search, User } from "lucide-react";
import "./navbar.css";
        
      const Navbar = () => {
        return (      
        
        <div className="cd-navbar">
          <div className="cd-logo">CINE<span>•</span>DAILY</div>
          <ul className="cd-nav-links">
            <li><a href="#top">Top Casts</a></li>
            <li className="cd-sep">•</li>
            <li><a href="#prod">Production</a></li>
            <li className="cd-sep">•</li>
            <li><a href="#box">Box Office</a></li>
            <li className="cd-sep">•</li>
            <li><a href="#imax">IMAX®</a></li>
          </ul>
          <div className="cd-nav-actions">
            <button className="cd-icon-btn" aria-label="Search"><Search size={14} /></button>
            <button className="cd-icon-btn" aria-label="Account"><User size={14} /></button>
            <div className="cd-avatar" />
          </div>
        </div>)
        };
export default Navbar;