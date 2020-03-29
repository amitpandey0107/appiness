import React, { Component } from 'react';
import Nav from './Common/Nav';
import Menu from './Common/DashboardMenu';
// import { Link } from "react-router-dom";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div className="main mainDashboard">
                <Nav />
                <Menu />

                <div className="main-content">
                    <div className="page-title col-sm-12">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3 m-0">Dashboard</h1>
                            </div>                            
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="box bg-white">
                                    <div className="box-row">
                                        <div className="box-content">
                                            <h6>Today Revenue</h6>
                                            <p className="h1 m-0">$2189</p>
                                        </div>
                                        <div className="box-icon chart">
                                            <div id="today-revenue">
                                                <i className="fa fa-dollar text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="box bg-white">
                                    <div className="box-row">
                                        <div className="box-content">
                                            <h6>Product Sold</h6>
                                            <p className="h1 m-0">1200</p>
                                        </div>
                                        <div className="box-icon chart">
                                            <div id="product-sold">
                                                <i className="fa fa-cubes text-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="box bg-white">
                                    <div className="box-row">
                                        <div className="box-content">
                                            <h6>New Customer</h6>
                                            <p className="h1 m-0">2000</p>
                                        </div>
                                        <div className="box-icon chart">
                                            <div id="new-customer">
                                                <i className="fa fa-users text-danger"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="box bg-white">
                                    <div className="box-row">
                                        <div className="box-content">
                                            <h6>New Visitors</h6>
                                            <p className="h1 m-0">720</p>
                                        </div>
                                        <div className="box-icon chart">
                                            <div id="new-visitors">
                                                <i className="fa fa-user text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                   
                </div>

            </div>
        )
    }
}

export default Dashboard;