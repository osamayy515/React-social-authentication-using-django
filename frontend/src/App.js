/* import logo from './logo.svg';*/
/* import './App.css'; */
import React from 'react'
import {BrowserRouter, Route, Routes} from "react";
import Welcome from "./components/welcome";
import Signup from "./components/signup";
import Login from "./components/login";

import Layout from "./components/layout";
// import store from "./store";

import Home from "./components/home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
        <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
