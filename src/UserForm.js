import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const firstNameVal = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("First Name must be 3 characters or longer!");
        }else{
            setFirstNameError("")
        }
    }
    const lastNameVal = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if (e.target.value.length < 3) {
            setLastNameError("Last name must be 3 characters or longer!");
        }else{
            setLastNameError("")
        }
    }
    const emailval = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        }else{
            setEmailError("")
        }
    }
    const passwordVal = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else {
            setPasswordError("")
        }
    }
    const confirmPasswordVal = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!");
        } else if (e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be 8 characters or longer!");
        }else{
            setConfirmPasswordError("")
        }
    }

    const hasError = (e)=>{
        if (e.target.value.length < 0) {
            
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    };

    return (
        <form onSubmit={createUser}>
            {hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={firstNameVal} value={firstName} />
                {
                    firstNameError ?
                        <p style={{ color: 'red' }}>{firstNameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={lastNameVal} value={lastName} />
                {
                    lastNameError ?
                        <p style={{ color: 'red' }}>{lastNameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" onChange={emailval} value={email} />
                {
                    emailError ?
                        <p style={{ color: 'red' }}>{emailError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={passwordVal} value={password} />
                {
                    passwordError ?
                        <p style={{ color: 'red' }}>{passwordError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={confirmPasswordVal} value={confirmPassword} />
                {
                    confirmPasswordError ?
                        <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                        ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
