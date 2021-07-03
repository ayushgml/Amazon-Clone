import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/350px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5 className="login__email">Email</h5>
                    <input className="login__inputboxes" type="text"/>
                    <h5 className="login__password">Password</h5>
                    <input className="login__inputboxes" type="text"/>
                    <button className="login__signInButton">Sign In</button>
                    <p>By continuing, you agree to Amazon's 
                        Conditions of Use and Privacy Notice.
                    </p>
                    <button className="login__createbutton">
                        Create your own Amazon Account
                    </button>
                </form>
            </div>

            <img 
            className="login__banner"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg"
            alt=""
            />

            <h6 className="login__clone">Clone by- Ayush Gupta</h6>
        </div>

    )
}

export default Login
