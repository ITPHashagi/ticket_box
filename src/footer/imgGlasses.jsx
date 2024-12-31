import React from "react";
export default function ImageGlasses({ product, onChangeGlass }) {
  return (
    <div>
      <img
        src={product.url}
        alt="glasses"
        className="w-48 h-[90px] border border-black"
        onClick={() => {
          onChangeGlass(product);
        }}
      />
    </div>
  );
}
