import React from "react";
import {
  Link
} from "react-router-dom";

function Sidebar(){
  return(
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;