import React, { Component } from 'react';
import { Link } from "react-router-dom";

class DashboardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="dashboard-menu">
                <div className="nav-menu">
                    <div className="user-info">
                        <div className="user-icon"><img src="assets/admin/images/avatar-1.jpg" alt="img" /></div>
                        <div className="user-name">
                            <h5>John S</h5>
                            <span className="h6 text-muted">Administrator</span>
                        </div>
                    </div>
                    <ul className="list-unstyled nav">
                        <li className="nav-item"><span className="menu-title text-muted">NAVIGATION</span></li>
                        <li className="nav-item"><Link to={"/admin"} className="nav-link"><i className="fa fa-home"></i> Dashboard</Link></li>                        
                        <li className="nav-item"><span className="menu-title text-muted">NAVIGATION</span></li>                       
                        <li className="nav-item">
                            <Link to={"/admin/list"} className="nav-link"> <i className="fa fa-users"></i> Users</Link>
                        </li>
                        <li className="nav-item"><Link to={"logout"} className="nav-link"><i className="fa fa-sign-out"></i>Logout</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DashboardMenu;