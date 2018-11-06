/**
 * Created by slinker on 3/18/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {hashHistory} from "react-router";
//
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import ThemeDefault from "../../theme-default";
import {LoginPageStyle as styles} from "./Styles";
// Import actions
import {AdminActions as actions} from "../../actions";
//
import Progress from "../Progress";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            isProgress: false,
            username: '',
            password: '',
            errorText: '',
            isAdmin: true
        };
        this.login = this.login.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentWillMount() {
        if (this.props.isAuthen) {
            hashHistory.replace('/admin');
        }
    }

    onChangeHandler(params, e) {
        switch (params) {
            case 'username':
                this.setState({
                    username: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
        }
    }

    login() {
        const self = this;
        const {
            username,
            password,
            isAdmin
        } = this.state;
        self.setState({
            isProgress: true
        });
        this.props.login({
            username,
            password,
            isAdmin
        }, function (err) {
            if (err) {
                self.setState({
                    errorText: err,
                    isProgress: false
                })
            }
        });
    }

    render() {
        const {
            isProgress
        }  = this.state;
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Progress isShow={isProgress}/>
                    <div style={styles.loginContainer}>
                        <p disabled={!this.state.errorText}>{this.state.errorText}</p>
                        <Paper style={styles.paper}>
                            <form>
                                <TextField
                                    floatingLabelText="Username"
                                    fullWidth={true}
                                    value={this.state.username}
                                    onChange={(e) => {
                                        this.onChangeHandler('username', e);
                                    }}
                                />

                                <TextField
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                    type="password"
                                    value={this.state.password}
                                    onChange={(e) => {
                                        this.onChangeHandler('password', e);
                                    }}
                                />

                                <div>
                                    <RaisedButton
                                        label="Login"
                                        primary={true}
                                        style={styles.loginBtn}
                                        disabled={!this.state.username || !this.state.password}
                                        onClick={this.login}
                                    />
                                </div>
                            </form>
                        </Paper>

                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthen: state.admin.isAuthen
    };
}

LoginPage.propTypes = {
    isAuthen: React.PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(actions.login, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginPage);
