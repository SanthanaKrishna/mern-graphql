// import React, { Component } from 'react';
// // import { connect } from 'react-redux';

// class GoogleSign extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isSignedIn: null
//         }
//     }
//     //gapi(libary) is multipurpose Oauth google for all services 
//     componentDidMount() {
//         //loads js client library
//         window.gapi && window.gapi.load('auth2', () => {
//             window.gapi.auth2.init({
//                 client_id: "754692025128-e1lpb16j1bk4slir96oeto63v8movugf.apps.googleusercontent.com",
//                 scope: 'email',
//                 // Request scopes in addition to 'profile' and 'email'
//                 //scope: 'additional_scope'
//                 // fetch_basic_profile:true
//             }).then(() => {
//                 this.GoogleAuth = window.gapi.auth2.getAuthInstance();
//                 this.onSignIn(this.GoogleAuth.isSignedIn.get());
//                 this.GoogleAuth.isSignedIn.listen(this.onSignIn);
//             })
//         })
//         // .then(function onInit(){
//         //     console.log('GoogleAuth object is initialized sucessfully');

//         // },function onError(){
//         //     console.error()
//         // }) 
//     }

//     onSignIn = (isSignedIn) => {
//         if (isSignedIn) {
//             console.log(this.GoogleAuth.currentUser.get());
//         } else {
//             console.log(isSignedIn)
//         }
//         this.setState({ isSignedIn })
//     }


//     onSignInClick = () => {
//         this.auth.signIn();
//     }

//     onSignOutClick = () => {
//         this.auth.signOut();
//     }

//     // renderAuthButton() {
//     //     console.log('this.state.isSignedI', this.state.isSignedIn)
//     //     if (this.state.isSignedIn === null) {
//     //         return null;
//     //     } else if (this.state.isSignedIn) {
//     //         return (
//     //             <button className="ui red google button" onClick={this.onSignOutClick}>
//     //                 <i className="google icon" />
//     //                 Sign Out
//     //             </button>
//     //         )
//     //     } else {
//     //         return (
//     //             <button className="ui red google button" onClick={this.onSignInClick}>
//     //                 <i className="google icon" />
//     //                 Sign In
//     //             </button>
//     //         )
//     //     }
//     // }
//     render() {
//         return (
//             <div>
//                 {/* <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> */}
//             </div>
//         )
//     }
// }



// // export default connect(mapStateToProps, mapDispatchToProps)(signin)

// export default GoogleSign;