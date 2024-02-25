import React from "react"
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Github from "./components/Github/Github";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Header/>

                {/* we can use 'Outlet' for dynamic change */}
                <Outlet/>
                {/* <Github/> */}
            <Footer/>
        </>
    )
}

export default Layout
