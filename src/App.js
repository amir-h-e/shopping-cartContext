import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
