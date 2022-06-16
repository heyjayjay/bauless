import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

// components
import Sidebar from "components/sidebar/Sidebar";

// views
import Products from "views/app/Products";
import History from "views/app/History";
import Users from "views/app/Users";
import Report from "views/report/Report";

export default function App() {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route exact path="/app/Report" element={<Report />} />
                <Route exact path="/app/history" element={<History />} />
                <Route exact path="/app/users" element={<Users />} />
                <Route exact path="/app/products" element={<Products />} />
                <Route exact path="/app" element={<Products />} />
            </Routes>
        </div>
    );
}
