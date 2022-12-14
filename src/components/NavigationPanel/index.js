import React from "react";
import {Link} from "react-router-dom";

const NavigationPanel = (
    {
        active = "home"
    }) => {

    const resumeButtonClick = () => {
        window.open('/res/Resume_Nisarg_Patel.pdf', '_blank');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/about" className={"navbar-brand"}>Nisarg Patel</Link>

                    <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/about" className={"nav-link"}>
                                    <div className={`${active === "home" ? "al-navbar-active" : ""}`}>
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/experience" className={"nav-link"}>
                                    <div className={`${active === "experience" ? "al-navbar-active" : ""}`}>
                                        Experience
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className={"nav-link"}>
                                    <div className={`${active === "project" ? "al-navbar-active" : ""}`}>
                                        Projects
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className={"al-height-full al-v-center al-resume-btn"} onClick={resumeButtonClick}>Resume</button>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-2">
                                <a href={"https://github.com/Nisarg-Pat"}>
                                    <i className="fa-brands fa-github al-icon-link"/>
                                </a>
                            </li>
                            <li className="nav-item me-2">
                                <a href={"mailto:patel.nisargs@northeastern.edu"}>
                                    <i className="fa-solid fa-envelope al-icon-link"/>
                                </a>
                            </li>
                            <li className="nav-item me-2">
                                <a href={"https://www.linkedin.com/in/nisarg-patel-076733171/"}>
                                    <i className="fa-brands fa-linkedin al-icon-link"/>
                                </a>
                            </li>
                            <li className="nav-item me-2" style={{marginTop: "3px"}}>
                                <a href={"https://leetcode.com/Nisarg_Pat/"} style={{textDecoration:"none"}}>
                                    <i className="cib-leetcode al-icon-link" style={{padding:0}}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )

}

export default NavigationPanel;