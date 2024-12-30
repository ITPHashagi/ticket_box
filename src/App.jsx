import "./App.css";
import "./input.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./glassesImage/background.jpg')" }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
