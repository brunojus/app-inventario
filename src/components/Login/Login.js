import React, {Component, Fragment} from "react";
import {Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../utils/urlUtils";
import {withRouter} from "react-router-dom";
import {firebaseAuth, googleProvider} from "../../utils/firebaseUtils"
import { GoogleLoginButton } from "react-social-login-buttons";

class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    login() {
        firebaseAuth.signInWithPopup(googleProvider) 
          .then((result) => {
            const user = result.user;
            console.log(user)
          });
      };

    createUser = (event) => {
        event.preventDefault();
        const {email} = this.state;
        const {password} = this.state;

        FirebaseService.createUser(email, password).then(
            (user) => {
                this.props.history.push(urls.home.path);
                console.log(user);
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render = () => {
        return (
            <Fragment>
                <Typography variant="headline" component="h2">Login</Typography>
                <GoogleLoginButton style={{marginTop: '10px',marginLeft:"-1px",width:"100px"}} onClick={this.login} >
                    <span>Uiot</span>
                </GoogleLoginButton>
            </Fragment>)
    };
}


export default withRouter(Login);