import React from 'react'
import "./Menubar.css"

function Menubar() {
    return (
      
        <nav className="header">
            <div className="items">
                <h1>Home</h1>
            </div>
            <div className="items">
                <h1>Products & Services</h1>
            </div>
            <div className="items">
                <h1>About</h1>
            </div>
            <div className="items">
                <h1>Contact & Support</h1>
            </div>
            <div className="items">
                <h1>Login</h1>
            </div>
        </nav>

    )
}

export default Menubar