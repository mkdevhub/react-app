import { createBrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.scss";

//Import components
import { Layout, Header, Footer } from "./components";

//Import all pages
import * as Page from "./pages";

function App() {
  const [cartQty, setCartQty] = useState(0);

  /* const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Page.Home
          changeQty={function (text) {
            setCartQty(text);
          }}
        />
      ),
    },
    {
      path: "/about",
      element: <Page.About />,
    },
    {
      path: "/todo",
      element: <Page.Todo />,
    },
    {
      path: "/contact",
      element: <Page.Contact />,
    },
    {
      path: "*",
      element: <Page.NoPage />,
    }
  ]); */

  return (
    <div className="App">
      <Header className="App-header" cartQty={cartQty} />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Page.Home
                changeQty={function (text) {
                  setCartQty(text);
                }}
              />
            }
          />
          <Route path="about" element={<Page.About />} />
          <Route path="todo" element={<Page.Todo />} />
          <Route path="contact" element={<Page.Contact />} />
          <Route path="*" element={<Page.NoPage />} />
        </Routes>
      </Layout>
      <Footer className="App-footer" />
    </div>
  );
}

export default App;
