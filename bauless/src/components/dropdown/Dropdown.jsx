import React from "react";

function Dropdown(){
  return(
    <div className="product p-6 max-w-xl mx-auto bg-white border-2 border-black rounded-xl flex items-center space-x-4 m-4">
      <input type="checkbox" id="producto" value="second_checkbox"/> 
      <div>
        <p className="text-sm font-light">
          {/* {codigo} */} ID SC20222
        </p>
        <label className="text-2xl font-bold" for="product">
          {/* {producto.name} */} Nombre del producto
        </label>
      </div>
      <p className="text-base font-light"><span className="text-2xl font-bold">200</span> unidades</p>
      <p className="bg-white border border-gray-300 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded">Existencias</p>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </div>
  );
}

export default Dropdown;