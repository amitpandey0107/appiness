import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="navbar navbar-expand flex-column flex-md-row align-items-center navbar-custom">
                <div className="container-fluid">
                    <Link to={"/admin"} className="navbar-brand mr-0 mr-md-2 logo">
                        <h2>LOGO</h2>
                    </Link>
                    <button type="button" className="navigation-btn"><i className="fa fa-bars"></i></button>
                    <ul className="navbar-nav flex-row ml-auto d-flex align-items-center list-unstyled topnav-menu mb-0">
                        <li className="d-none d-lg-block">
                            <form className="header-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <i className="fa fa-search icon"></i>
                            </form>
                        </li>
                        <li className="dropdown notification-list">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="false" aria-expanded="false">
                                <i className="fa fa-bell"></i>
                                <span className="noti-icon-badge"></span>
                            </a>
                            
                        </li>
                        <li className="dropdown user-link">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="false" aria-expanded="false">
                                <i className="fa fa-cog"></i>
                                <span className="noti-icon-badge"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                                <Link to={"/admin"} className="dropdown-item"> <i className="fa fa-user"></i> My Profile</Link>                               
                                <div className="dropdown-divider"></div>
                                <Link to={"/logout"} className="dropdown-item"><i className="fa fa-sign-out"></i> Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;