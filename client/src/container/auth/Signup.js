import React from 'react';
import { Formik, Form } from 'formik';
import CreateAccount from '../../component/CreateAccount';

class Signup extends React.PureComponent {

    render() {
        return (
            <div className="form-container">
                <div className="left-box">
                    <Formik
                        initialValues={{
                            username: '',
                            emailID: '',
                            password: '',
                            confirmPassword: '',
                            phoneNumber: ''
                        }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={(values) => {
                            let errors = {};
                            if (values.password !== values.confirmPassword) {
                                errors.confirmPassword = "confirm passowrd should match password"
                            }
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 2000);
                        }}
                        render={props => (
                            <Form className="">
                                <CreateAccount
                                    {...props}
                                />
                            </Form>
                        )}
                    />
                </div>

                <div className="right-box">
                    <button></button>
                    <button></button>
                </div>


                {/* <div className="nav-login">
                    <p>Already Have an account?
                    <span>Sign In!</span>
                    </p>
                </div> */}


            </div>
        )
    }
}

export default Signup;