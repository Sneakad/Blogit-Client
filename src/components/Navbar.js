import React from 'react'
import "../styles/navbar.css"


function Navbar() {




    return (

        <div>
            <div className="navbar">
                <div class="logo">
                    <a href="/">
                        <h1>Blogit</h1>
                    </a>
                </div>
                <div class="nav__links">

                    <a href="/" className="nav__link">Blogs</a>
                    <a href="/about" className="nav__link">About</a>
                    <a href="/create" className="nav__link">New Blog</a>
                    <a href="https://github.com/Sneakad" className="nav__link" target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar