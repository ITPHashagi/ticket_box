import React from "react";
import ImageGlasses from "./imgGlasses";
import { data } from "../js/data";

export default function Footer({ onChangeGlass }) {
  return (
    <div className="w-full min-h-64 bg-cover bg-center">
      <div className="w-[1280px] bg-white mx-auto my-5">
        <div className="flex flex-wrap ml-6 py-3 items-center gap-4">
          {data.map((item) => (
            <ImageGlasses product={item} onChangeGlass={onChangeGlass} />
          ))}
        </div>
      </div>
    </div>
  );
}
