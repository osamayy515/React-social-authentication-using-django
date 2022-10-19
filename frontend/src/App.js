/* import logo from './logo.svg';*/
/* import './App.css'; */
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Welcome from "./components/welcome";
import Signup from "./components/signup";
import Login from "./components/login";

import Layout from "./components/layout";

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
