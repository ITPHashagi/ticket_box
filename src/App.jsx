import "./App.css";
import "./index.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./img/background_cinema.png')" }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
