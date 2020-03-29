import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import { LOADING, SUCCESS, ERROR } from '../../constants/misc.js';
import { login_action } from '../../actions/login_action.js';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            userType: null,
            type: null,
            loader: false,
            isLodaing: false,
        }
    }
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }


    submitUserLoginForm = (event, values) => {
        this.setState({ values });
        this.setState({ loader: true, })
        var email = this.state.values.emailid;
        var password = this.state.values.password;
        this.props.login_action(email, password);
    }

    componentDidMount() {

    }


    static getDerivedStateFromProps(props, state) {
        console.log(props.login_reducers);
        if (props.login_reducers.status === LOADING) {
            return { isLodaing: true, waitingIndicator: true }
        } else if (props.login_reducers.status === SUCCESS) {
            NotificationManager.success('Successfully login', 'Message', 3000);
            props.history.push('/admin')
            return { isLodaing: false, waitingIndicator: false };
        } else if (props.login_reducers.status === ERROR) {
            NotificationManager.error('Login failed, please try again!', 'Message', 3000);
            return { isLodaing: false, waitingIndicator: false };
        }
        return null;
    }
    

    render() {
        return (
            <div className="l_main">
                <div className="loginbox">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className="inner">
                                <h1>Login</h1>
                                <div className="formwrap">
                                    <AvForm
                                        method="post"
                                        name="loginfrom"
                                        ref={c => (this.form = c)}
                                        onValidSubmit={this.submitUserLoginForm}
                                    >
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <AvField
                                                type="text"
                                                className="form-control"
                                                placeholder="example@example.com"
                                                name="emailid"
                                                id="emailid"
                                                value={this.state.fields.emailid}
                                                onChange={() => this.handleChange}
                                                validate={{
                                                    required: {
                                                        value: true,
                                                        errorMessage: "Please enter your email address"
                                                    },
                                                    pattern: {
                                                        value:
                                                            "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/",
                                                        errorMessage:
                                                            "Please enter a valid email address"
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <AvField
                                                type="password"
                                                className="form-control"
                                                placeholder="**********"
                                                name="password"
                                                id="password"
                                                value={this.state.fields.password}
                                                onChange={() => this.handleChange}
                                                validate={{
                                                    required: {
                                                        value: true,
                                                        errorMessage: "Please enter your password"
                                                    }
                                                }}
                                            />
                                            <a href="#" className="forger_password">Forget your password ?</a>
                                        </div>
                                        <div className="form-group">
                                            <Button className="btnlogin">Submit</Button>
                                        </div>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className="showcase">
                                <img src="assets/images/login.jpg" alt="showcase image" />
                            </div>
                        </div>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }
}

// export default Login;
const mapStateToProps = state => {
    return {
        login_reducers: state.login_reducers,
    };
};

export default connect(mapStateToProps, { login_action })(Login);