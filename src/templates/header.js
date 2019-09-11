import React , { Component } from "react";

class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="container">
                    <h1 className="brand brand-top">
                        {/* <a href="">
                            <span></span>
                            <img src="" alt=""/>
                        </a> */}
                    </h1>
                    <span className="brand brand-top">
                        {/* <a href="" title="">
                            <span className="text"></span>
                            <img src="" alt="Logo " />
                        </a> */}
                    </span>
                </div>
                <nav className="nav-main">
                    <button className="btn-nav">
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </button>
                    <ul className="nav nav-menu">
                        <li className="nav-li">
                            {/* <a href="#" title="Home">Home</a> */}
                            <span>Home</span>
                        </li>
                        <li className="nav-li">
                            <span>Contact</span>
                            {/* <a href="#" title="Contact">Contact</a> */}
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header