import React from 'react'
import Navbar from "../components/navbar";


const Layout = (props) => {
    return (
        <div className="container">
            <Navbar/>
            {props.children}
        </div>
    )
}

export default Layout