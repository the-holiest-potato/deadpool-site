import React from "react";
import { Search, User } from "lucide-react";
import "./MetaRow.css";
const MetaRow = () => {
    return (
<div className="cd-meta-row">
          <div className="cd-tags">
            <span className="cd-tag">ACTION</span>
            <span className="cd-tag">COMEDY</span>
            <span className="cd-tag">SCI-FI</span>
          </div>
          <div className="cd-release">RELEASE (MAY 3, 2024)</div>
        </div>
    )
}
export default MetaRow;