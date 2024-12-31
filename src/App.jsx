import "./App.css";
import "./input.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import { useState } from "react";
import { data } from "./js/data.js";

function App() {
  const handleOnChange = (product) => {
    setDataState(product);
  };
  const [dataState, setDataState] = useState(data[0]);
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./glassesImage/background.jpg')" }}
      >
        <Header />
        <Content
          imgUrl={dataState.url}
          name={dataState.name}
          desc={dataState.desc}
        />
        <Footer onChangeGlass={handleOnChange} />
      </div>
    </>
  );
}

export default App;
