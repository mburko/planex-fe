import AxiosClient from '../utilities/AxiosClient';
import React, { useEffect, useState } from 'react'
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

const LOGIN_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const Login = (props) => {

    const url = "/login";
    const [user] = useState({
        login: "",
        password: ""
    })
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [inpLogin, setInpLogin] = useState(false);
    const [inpPassword, setInpPassword] = useState(false);

    const [loginError, setLoginError] = useState('Login can not be empty!');
    const [passwordError, setPasswordError] = useState('Password can not be empty!');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [loginError, passwordError])


    const loginHandle = (e) => {
        setLogin(e.target.value)
        if (!LOGIN_REGEX.test(e.target.value)) {
            setLoginError('Login is not valid!');
            if (!e.target.value) {
                setLoginError('Login can not be empty!');
            }
        } else {
            user.login = e.target.value;
            setLoginError('');
        }

    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
        if (!PWD_REGEX.test(e.target.value)) {
            setPasswordError('Password is not valid!');
            if (!e.target.value) {
                setPasswordError('Password can not be empty!');
            }
        } else {
            user.password = e.target.value;
            setPasswordError('');
        }

    }



    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'login':
                setInpLogin(true)
                break
            case 'password':
                setInpPassword(true)
                break

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    function loginUser(e) {
        e.preventDefault();
        AxiosClient.post(url, {
            login: user.login,
            password: user.password
        }).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div class="containerRegForm">
            <form onSubmit={handleSubmit} class="form" id="login">
                <h1 class="form_title">{props.title}</h1>


                <div form="form_input">
                    {(inpLogin && loginError) && <div className="form_message input_error">{loginError}<BsFillXCircleFill className="form_error_icon" /></div>}

                    <div className="input_success_div">
                        <input
                            name="login"
                            type="text"
                            className={(loginError && inpLogin) ? "form_input_error" : "form_input_success"}
                            autofocus placeholder="Login"
                            value={login}
                            onChange={e => loginHandle(e)}
                            onBlur={e => blurHandle(e)}

                        />
                        {(inpLogin && !loginError) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                    </div>
                </div>


                <div form="form_input">
                    {(inpPassword && passwordError) && <div className="form_message input_error">{passwordError} <BsFillXCircleFill className="form_error_icon" /></div>}

                    <div className="input_success_div">
                        <input
                            name="password"
                            type="password"
                            className={(passwordError && inpPassword) ? "form_input_error" : "form_input_success"}
                            autofocus placeholder="Password"
                            value={password}
                            onChange={e => passwordHandle(e)}
                            onBlur={e => blurHandle(e)}

                        />
                        {(inpPassword && !passwordError) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}

                    </div>
                </div>


                <button
                    disabled={!formValid}
                    className="form_button"
                    type="submit"
                    onClick={(e) => loginUser(e)}


                >Join</button>

                <p className="form_link" onClick={() => props.onFormSwitch('signup')} >Don't have an account? Sign up</p>

            </form>
        </div>

    )
}