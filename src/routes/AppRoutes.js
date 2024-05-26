import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function AppRoutes() {    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes