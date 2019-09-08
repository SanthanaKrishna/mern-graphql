import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './styles.scss';


class Login extends React.Component {

    handleInputChange = (event, props) => {
        const { setFieldValue } = props;
        const { name, value } = event.target;
        // let inputValue = '';
        if (name === 'username') {
            setFieldValue(name, value);
        } else if (name === 'password') {
            setFieldValue(name, value);
        }
    }
    render() {
        return (
            <div className="">
                <Formik
                    initialValues={{
                        emailId: '',
                        password: ''
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={(values) => {

                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 2000);
                    }}

                    render={(props) => (
                        <div>
                            < Form >
                                <Field
                                    className="form-control"
                                    name='username'
                                    type="email"
                                    placeholder='Email id'
                                    required
                                    value={props.values.username}
                                    onChange={(ev) => this.handleInputChange(ev, props)}
                                />
                                <Field
                                    className="form-control"
                                    name='password'
                                    type="password"
                                    placeholder='Password'
                                    required
                                    value={props.values.password}
                                    onChange={(ev) => this.handleInputChange(ev, props)}
                                />
                                <button className="btn btn-secondary" type="submit" >Login</button>
                            </Form>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export default Login;