import React, { useEffect, useState } from "react";

export default function Content({ imgUrl, name, desc }) {
  const [dataState, setDataState] = useState({
    imgUrl: "public/glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });

  useEffect(() => {
    setDataState({
      imgUrl,
      name,
      desc,
    });
  }, [imgUrl, name, desc]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center space-x-80 mt-16">
        <div className="relative">
          <img src="./public/glassesImage/model.jpg" alt="" className="w-64" />

          {/* Đoạn văn bản */}
          <div className="absolute bottom-0 left-0 bg-orange-500 text-white opacity-70 p-1 w-full h-28">
            <h6 className="text-xl font-bold text-blue-900">
              {dataState.name}
            </h6>
            <p className="mt-2 h-auto">{dataState.desc}</p>
          </div>
          <div className="absolute top-[70px] left-12 w-40 opacity-50">
            <img src={dataState.imgUrl} alt="glasses" />
          </div>
        </div>
        <div>
          <img src="./public/glassesImage/model.jpg" alt="" className="w-64" />
        </div>
      </div>
    </div>
  );
}
