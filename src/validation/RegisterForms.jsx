import React, { useState } from 'react'
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const RegisterForms = () => {

    const [currForm, setCurrForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrForm(formName);
    }
    return (
        <div className="RegisterForm">
            {
                currForm === 'login' ? <Login title="Log In" onFormSwitch={toggleForm} /> : <SignUp title="Sign Up" onFormSwitch={toggleForm} />
            }

        </div>

    )

}