import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";
import Host from "./pages/Host.jsx";
import VansDetails from "./pages/VansDetails.jsx"
import Dashboard from "./pages/hostContents/Dashbord.jsx"
import Income from "./pages/hostContents/Income.jsx"
import HostVans from "./pages/hostContents/HostVans.jsx"
import Reviews from "./pages/hostContents/Reviews.jsx"
import HostVansDetails from "./pages/hostContents/HostVansDetails.jsx";
import HostVanInfo from "./pages/hostContents/HostVanInfo.jsx";
import HostVanPrice from "./pages/hostContents/HostVanPrice.jsx"
import HostVansPhotos from "./pages/hostContents/HostVanPhotos.jsx"

import "./Css/index.css"


export default function App(){
    return(
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />} >

            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VansDetails />} />


            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="Reviews" element={<Reviews />}/>
              <Route path="vans" element={<HostVans />}/>
              <Route path="vans/:id" element={<HostVansDetails />} >
                <Route index element={<HostVanInfo />}/>
                <Route path="price" element={<HostVanPrice />}/>
                <Route path="photos" element={<HostVansPhotos />}/> 
              </Route>
            </Route>

            

          </Route>

        </Routes>

      </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)