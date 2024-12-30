import React from "react";
import ImageGlasses from "./imgGlasses";

export default function ColorGlasses() {
  return (
    <div className="w-[1280px] bg-white mx-auto my-5">
      <div className="flex flex-wrap ml-6 py-3 items-center gap-4">
        <ImageGlasses image="./glassesImage/g1.jpg" />
        <ImageGlasses image="./glassesImage/g2.jpg" />
        <ImageGlasses image="./glassesImage/g3.jpg" />
        <ImageGlasses image="./glassesImage/g4.jpg" />
        <ImageGlasses image="./glassesImage/g5.jpg" />
        <ImageGlasses image="./glassesImage/g6.jpg" />
        <ImageGlasses image="./glassesImage/g7.jpg" />
        <ImageGlasses image="./glassesImage/g8.jpg" />
        <ImageGlasses image="./glassesImage/g9.jpg" />
      </div>
    </div>
  );
}
