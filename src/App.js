import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  const [cartQty, setCartQty] = useState(0);
  return (
    <div className="App">
      <Header className="App-header" cartQty={cartQty} />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                changeQty={function (text) {
                  setCartQty(text);
                }}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
