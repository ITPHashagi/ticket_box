import React from "react";
export default function ImageGlasses(product) {
  return (
    <div className="border border-black">
      <img src={product.image} alt="glasses" className="w-48 h-[90px]" />
    </div>
  );
}
