import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER, GET_CURRENT_USER } from '../../graphQL/signinQuery';
import Fieldvalidation from '../../utils/validation';
import GoogleSign from './GoogleSign';
import './styles.scss';

const initialState = {
    username: '',
    email: '',
    password: ''
}
class Signup extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }


    handleInputChange = (event, setFieldValue) => {
        const { name, value } = event.target;
        let inputValue = '';
        if (name === 'username') {
            inputValue = Fieldvalidation.limitMaxValue(value, 20);
            setFieldValue(name, inputValue);
            this.setState({
                username: inputValue
            })
        } else if (name === 'emailID') {
            // inputValue = Fieldvalidation.emailValidate(value, Errors)
            setFieldValue(name, value)
            this.setState({
                email: value
            })
        } else if (name === 'password' || name === 'confirmPassword') {
            // inputValue = Fieldvalidation.phoneNumberValidate(value, Errors)
            setFieldValue(name, value)
            this.setState({
                password: value
            })
        }
        // else if (name === 'phoneNumber') {
        //     inputValue = Fieldvalidation.allowOnlyNumber(value);
        //     let phoneNumber = Fieldvalidation.limitMaxValue(inputValue, 10);
        //     setFieldValue(name, phoneNumber);
        // }
    }
    handleSubmit = (values, signUpUser) => {
        const { username, email, password } = values;
        
    }

    navToLoginPage = () => {
        this.props.history.push('./login')
    }


    render() {
        console.log('props', this.props);
        const { username, email, password } = this.state;
        return (
            <div className="form-container">
                <div className="left-box">
                            <Formik
                                initialValues={{
                                    username: '',
                                    emailID: '',
                                    password: '',
                                    confirmPassword: '',
                                }}
                                validateOnBlur={false}
                                validateOnChange={false}
                                validate={(values) => {
                                    let errors = {};
                                    if (values.password !== values.confirmPassword) {
                                        errors.confirmPassword = "confirm password should match password"
                                    }
                                    return errors;
                                }}
                                onSubmit={async (values, actions) => {
                                    this.handleSubmit(values);
                                }}
                                render={props => (
                                    <Fragment>
                                        <Form className="">
                                            <h3>Sign Up</h3>
                                            <div>
                                                {/* <label>User Name</label> */}
                                                <Field
                                                    className="form-control"
                                                    name='username'
                                                    type="text"
                                                    placeholder='User Name'
                                                    required
                                                    value={props.values.firstName}
                                                    onChange={(ev) => this.handleInputChange(ev, props.setFieldValue)}
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
                                                    value={props.values.email}
                                                    onChange={(ev) => this.handleInputChange(ev, props.setFieldValue)}
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
                                                    value={props.values.password}
                                                    onChange={(ev) => this.handleInputChange(ev, props.setFieldValue)}
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
                                                    value={props.values.confirmEmail}
                                                    onChange={(ev) => this.handleInputChange(ev, props.setFieldValue)}
                                                />
                                                <ErrorMessage name="confirmPassword" />
                                            </div>
                                            <br />
                                            <div>
                                                <button className="btn btn-secondary" type="submit" disabled={props.isSubmitting} >Submit</button>
                                            </div>
                                        </Form>
                                    </Fragment>
                                )}
                            />

                </div>

                <div className="right-box">
                    <h3>Sign in with other options</h3>

                    <div className="nav-signin">
                        <GoogleSign />
                        <button className="btn btn-warning" onClick={this.navToLoginPage}>Log-in with Email</button>
                        <button className="btn btn-danger">Log-in with Google</button>
                        <button className="btn btn-primary">Log-in with Facebook</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signup;