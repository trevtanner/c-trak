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

ReactDOM.render(
  <Fragment>
    <BrowserRouter>
    <section id="heading">
      <Heading />
    </section>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/prices' element={<Prices />} />
    </Routes>

   
    <section className="footer">
      <Footer />
    </section>
    </BrowserRouter>
  </Fragment>,
  document.getElementById("root")
);
