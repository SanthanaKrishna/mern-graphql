import React, { Component } from 'react'
import { Query } from 'mongoose';
import { GET_CURRENT_USER } from '../../graphQL/signinQuery';

class UserDetails extends Component {
    render() {
        return (
            <div>
                <Query query={GET_CURRENT_USER}>
                    {(data) => {
                        console.log('dashbord', data)
                        return (
                            <h1>Welcome to dashbord</h1>
                        )
                    }}
                </Query>

            </div>
        )
    }
}

export default UserDetails;
