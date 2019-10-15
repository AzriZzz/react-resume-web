import React , { Component } from "react";

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-body">
                    <div className="container">
                        <div className="navbar-container">
                            <ul className="list-unstyled ">
                                <li>About Me</li>
                                <li>Experience</li>
                                <li>Language/Framework</li>
                                <li>Project</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sidebar-footer">
                    <div className="social-link-container">
                        <ul className="list-unstyled social-link-list">
                            <li>L</li>
                            <li>E</li>
                            <li>G</li>
                            <li>B</li>
                        </ul>
                    </div>

                    <div className="container-copyright">
                        <p>Muhammad Azri &copy; 2019</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar