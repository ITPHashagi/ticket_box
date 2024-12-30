import React from "react";
import { data } from "../js/data.js";

export default function Content() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center space-x-80 mt-16">
        <div className="relative">
          <img src="./public/glassesImage/model.jpg" alt="" className="w-64" />

          {/* Đoạn văn bản */}
          <div className="absolute bottom-0 left-0 bg-orange-500 text-white opacity-70 p-1 w-full h-28">
            <h6 className="text-xl font-bold text-blue-900">FENDI F8750</h6>
            <p className="mt-2 h-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              cum.
            </p>
          </div>
        </div>
        <div>
          <img src="./public/glassesImage/model.jpg" alt="" className="w-64" />
        </div>
      </div>
    </div>
  );
}
