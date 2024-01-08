import React from "react";
import ReactDOM from 'react-dom/client';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans,{loader as vansLoader} from "./pages/Vans.jsx";
import Host,{loader as hostLoader} from "./pages/Host.jsx";
import VansDetails from "./pages/VansDetails.jsx"
import Dashboard from "./pages/hostContents/Dashbord.jsx"
import Income from "./pages/hostContents/Income.jsx"
import HostVans from "./pages/hostContents/HostVans.jsx"
import Reviews from "./pages/hostContents/Reviews.jsx"
import HostVansDetails from "./pages/hostContents/HostVansDetails.jsx";
import HostVanInfo from "./pages/hostContents/HostVanInfo.jsx";
import HostVanPrice from "./pages/hostContents/HostVanPrice.jsx"
import HostVansPhotos from "./pages/hostContents/HostVanPhotos.jsx"
import Login,{loader as loginLoader, action as loginAction} from "./pages/Login.jsx";

import "./Css/index.css";
import { useRouteError } from "react-router-dom";
function Error(){
  const error = useRouteError()
  return (
    <div>
    {error.message}
    </div>
  )
}



function App(){
 let router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}  errorElement={<Error />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route path="vans" element={<Vans />}  loader={vansLoader} />
      <Route path="vans/:id" element={<VansDetails />} />
      <Route path="host" element={<Host />} loader={hostLoader}>
        <Route index element={<Dashboard />}/>
        <Route path="income" element={<Income />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />}/>
        <Route path="vans/:id" element={<HostVansDetails />} >
          <Route index element={<HostVanInfo />} />
          <Route path="price" element={<HostVanPrice />}/>
          <Route path="photos" element={<HostVansPhotos />}/> 
        </Route>
      </Route>
    </Route>
  ))

    return(
      <RouterProvider router={router}/>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)