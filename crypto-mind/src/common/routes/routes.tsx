import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "components/pages/home/home";
import MyAssets from "components/pages/myAssets/myAssets";
import Trade from "components/pages/trade/trade";
import Market from "components/pages/market/market";
import Analytics from "components/pages/analytic/analytics";
import Page404 from "components/pages/404/404";

const RoutesComponent = () => {
    return(
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/home' Component={Home}/>
            <Route path='/my-assets' Component={MyAssets}/>
            <Route path='/trade' Component={Trade}/>
            <Route path='/market' Component={Market}/>
            <Route path='/analytic' Component={Analytics}/>
            <Route path='*' Component={Page404}/>
        </Routes>
    )
}

export default RoutesComponent