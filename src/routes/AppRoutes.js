import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Comunidade from '../Pages/Comunidade/Comunidade'
import FormarEquipe from '../Pages/FormarEquipe/FormarEquipe'
import Matching from "../Pages/Matching/Matching";

function AppRoutes() {    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comunidade" element={<Comunidade />} />
                <Route path="/formar-equipe" element={<FormarEquipe />} />
                <Route path="/formar-equipe/matching" element={<Matching />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes