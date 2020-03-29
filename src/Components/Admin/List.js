import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LOADING, SUCCESS, ERROR } from '../../constants/misc.js';
import { get_list_action } from '../../actions/get_list_action.js';
import Nav from './Common/Nav';
import Menu from './Common/DashboardMenu';

class List extends Component {

	constructor(props) {
		super(props);
			this.state = {
			allFarmData: [],
			key: '',
			dialogVisible: true,
			isLodaing:false,
		}
	}

	componentDidMount() {
		this.props.get_list_action();
	}


	static getDerivedStateFromProps(props, state) {		
		if (props.get_list_reducers.status === LOADING) {			
			return { isLodaing: true }
		} else if (props.get_list_reducers.status === SUCCESS) {			
			var allfarm = [];			
			props.get_list_reducers.value.data.map((item, index) => {
				allfarm.push({
					id: item.id,
					name: item.name,
					username: item.username,
					email: item.email,
					street: item.address.street,
					suite: item.address.suite,
					city: item.address.city,
					zipcode: item.address.zipcode,
					phone: item.phone,
					website: item.website,
					company: item.company.name,
					
				})
			})			
			return {allFarmData:allfarm ,isLodaing: false };
		} else if (props.get_list_reducers.status === ERROR) {
			return { isLodaing: false, waitingIndicator: false };
		} 
		return null;

  	}


	render() {
		console.log('==========================');
		console.log(this.state.allFarmData);
		console.log('==========================');
		return(
			<div className="main">
                <Nav />
                <Menu />

                <div className="main-content">
                    <div className="page-title col-sm-12">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="h3 m-0">Users</h1>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb m-0 p-0">
                                        <li className="breadcrumb-item">Home</li>
                                        <li className="breadcrumb-item active" aria-current="page">Users</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table table-responsive-sm table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Street</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.allFarmData.map((data, index) => {                    
                                            return (
                                                <tr>
                                                    <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.username}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.street}</td>
                                                    <td><span className="badge badge-success">Active</span></td>
                                                </tr>
                                            )
                                        })}    
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
		)
	}
}


const mapStateToProps = state => {
  return {
    get_list_reducers: state.get_list_reducers,  
  };
};

export default connect(mapStateToProps, { get_list_action })(List);