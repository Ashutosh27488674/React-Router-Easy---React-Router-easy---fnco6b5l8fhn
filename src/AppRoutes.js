import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import {Index} from "./Pages/Index";
import {Home} from "./Pages/Home";
import {NotFound} from "./Pages/NotFound";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router />

    )
}
