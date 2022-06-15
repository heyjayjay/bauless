import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
} from "react-router-dom";

// components
import Sidebar from "components/sidebar/Sidebar"

// views
import Products from "views/app/Products";
import History from "views/app/History";
import Users from "views/app/Users";
import Report from "views/report/Report";

export default function App() {
  // const routes = [
  //   {
  //     path: "/app",
  //     exact: true,
  //     element: () => <Report/>,
  //     main: () => <h2>Home</h2>
  //   },
  //   {
  //     path: "/bubblegum",
  //     sidebar: () => <div>bubblegum!</div>,
  //     main: () => <h2>Bubblegum</h2>
  //   },
  //   {
  //     path: "/shoelaces",
  //     sidebar: () => <div>shoelaces!</div>,
  //     main: () => <h2>Shoelaces</h2>
  //   }
  // ];
//   <Switch>
//   {routes.map((route, index) => (
//     // You can render a <Route> in as many places
//     // as you want in your app. It will render along
//     // with any other <Route>s that also match the URL.
//     // So, a sidebar or breadcrumbs or anything else
//     // that requires you to render multiple things
//     // in multiple places at the same URL is nothing
//     // more than multiple <Route>s.
//     <Route
//       key={index}
//       path={route.path}
//       exact={route.exact}
//       children={<route.sidebar />}
//     />
//   ))}
// </Switch>

  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route exact path="/app/Report" element={<Report/>}/>
        <Route exact path="/app/history" element={<History/>}/>
        <Route exact path="/app/users" element={<Users/>}/>
        <Route exact path="/app/products" element={<Products/>}/>
        <Route exact path="/app" element={<Products/>}/>
      </Routes>
    </div>      

  );
}
