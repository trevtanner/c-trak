import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Heading from "./components/UI/Layout/Heading";
import Footer from "./components/UI/Layout/Footer";
import Prices from "./components/Prices/Prices"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resources from "./components/Resources/Resources";

ReactDOM.render(
  <BrowserRouter>
  <body>
    <div className="content">
    <section id="heading">
      <Heading />
    </section>
    <section className="body">
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/prices' element={<Prices />} />
    <Route path='/resources' element={<Resources />} />
    </Routes>
    </section>
    </div>
    <section className="footer">
      <Footer />
    </section>
  </body>
    </BrowserRouter>,
  document.getElementById("root")
);
