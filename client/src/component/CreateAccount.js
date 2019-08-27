import React, { Component, Fragment } from 'react';
import { Field, ErrorMessage } from 'formik';
import Fieldvalidation from '../utils/validation';
import '../container/auth/styles.css';


const Errors = {
    requiredError: {
        userName: "Enter your First Name",
        emailId: "Enter a valid email address",
        confirmEmail: "You must confirm Email",
        mobileNumber: "Enter a valid Phone number"
    },
    invalidError: {
        emailId: "Enter a valid email address",
        confirmEmail: "Email and Confirm Email dIdn't match",
        mobileNumber: "Provide a valid contact number"
    }
}


class CreateAccount extends Component {

    handleInputChange = (event) => {
        const { setFieldValue } = this.props;
        const { name, value } = event.target;
        let inputValue = '';
        if (name === 'username') {
            inputValue = Fieldvalidation.limitMaxValue(value, 20);
            setFieldValue(name, inputValue);
        } else if (name === 'emailID') {
            // inputValue = Fieldvalidation.emailValidate(value, Errors)
            setFieldValue(name, value)
        } else if (name === 'password' || name === 'confirmPassword') {
            // inputValue = Fieldvalidation.phoneNumberValidate(value, Errors)
            setFieldValue(name, value)
        }
        // else if (name === 'phoneNumber') {
        //     inputValue = Fieldvalidation.allowOnlyNumber(value);
        //     let phoneNumber = Fieldvalidation.limitMaxValue(inputValue, 10);
        //     setFieldValue(name, phoneNumber);
        // }
    }


    render() {
        const { values, errors, isSubmitting } = this.props;
        return (
            <Fragment>
                <div>
                    {/* <label>User Name</label> */}
                    <Field
                        className="form-control"
                        name='username'
                        type="text"
                        placeholder='User Name'
                        required
                        value={values.firstName}
                        onChange={(ev) => this.handleInputChange(ev)}
                    />
                    <ErrorMessage name="firstName" />
                </div>
                <div>
                    {/* <label>E-mail</label> */}
                    <Field
                        className="form-control"
                        name='emailID'
                        type='email'
                        placeholder='Email Id'
                        required
                        value={values.email}
                        onChange={(ev) => this.handleInputChange(ev)}
                    />
                    <ErrorMessage name="emailID" />
                </div>
                <div>
                    {/* <label>Password</label> */}
                    <Field
                        className="form-control"
                        name='password'
                        type='password'
                        placeholder='Password'
                        required
                        value={values.password}
                        onChange={(ev) => this.handleInputChange(ev)}
                    />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    {/* <label>Confirm Password</label> */}
                    <Field
                        className="form-control"
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirm password'
                        required
                        value={values.confirmEmail}
                        onChange={(ev) => this.handleInputChange(ev)}
                    />
                    <ErrorMessage name="confirmPassword" />
                </div>
                <br />
                <div>
                    <button className="btn btn-secondary" type="submit" disabled={isSubmitting} >Submit</button>
                </div>
            </Fragment>
        )
    }
}

export default CreateAccount;

