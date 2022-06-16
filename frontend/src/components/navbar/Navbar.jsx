

import React from "react";
import {
  Link
} from "react-router-dom";

function Navbar(props){
  return(
    <nav className="flex justify-between p-3 align-middle border-b-2 border-gray-300">
        <h1 className="text-2xl font-bold  ">{props.nameNav}</h1>
        <div>
            <h2 className="text-md font-bold">{props.name}</h2>
            <h3 className="text-sm font-light">{props.rol}</h3>
        </div>
    </nav>
  );
}

export default Navbar;