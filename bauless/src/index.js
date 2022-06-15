import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';

//layout
import App from "./layouts/App";
import Auth from "./layouts/Auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/auth" element={<Auth/>}/>
        <Route exact path="/*" element={<App/>}/>
    </Routes>
</BrowserRouter>
);
