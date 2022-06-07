import React from 'react';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";

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
