import React from "react";
import Professional from "./Pages/Professional";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Personal from "./Pages/Personal";
import { Route, Routes } from "react-router-dom";
import Qapaper from "./Components/Personal/Qapaper";
import QapaperBlogger from "./Components/Personal/QapaperBlogger";
import FinessCertificates from "./Components/Personal/FitnessCertificates";
import HealthyAndFitClub from "./Components/Personal/HealthyandFitClub";
import BikeRiding from "./Components/Personal/BikeRiding";
function RoutesFile() {
    return ( 
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/professional" element={<Professional/>} />
            <Route exact path="/personal" element={<Personal/>} />
            <Route exact path="/personal/qapaper" element={<Qapaper/>} />
            <Route exact path="/personal/qapaperblog" element={<QapaperBlogger/>} />
            <Route exact path="/personal/fitnessCertificate" element={<FinessCertificates/>} />
            <Route exact path="/personal/healthyandfitclub" element={<HealthyAndFitClub/>} />
            <Route exact path="/personal/bikeriding" element={<BikeRiding/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
     );
}

export default RoutesFile;