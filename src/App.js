import "./App.css";
import React from 'react'
import Home from './components/Pages/Home/Home'
import { useRoutes } from "react-router-dom";
import Casino from "./components/Pages/Casino/Casino";
import { Navbar } from "./components/Navbar/Nav";
import CasinoLanding from "./components/Pages/Casino/CasinoLanding";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/casinolandpage",
      element: <CasinoLanding />,
    },
    {
      path: "/casino",
      element: <Casino />,
    }
  ]);
  return (
    <div className="App ">
      <div className="z-40 fixed ">
        <Navbar />
      </div>
      <div className="">
        {element}
      </div>

    </div>




  );
}

export default App;
