import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      {/* <h1 className="text-xl font-bold text-red-500">hi</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
