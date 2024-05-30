import React from 'react';
import { Navigate } from 'react-router-dom';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


export default function SignInPage(props) {
  const currentUser = props.currentUser;
  const loginCallback = props.loginCallback;

  const auth = getAuth();

  if (currentUser?.userId) { 
    return <Navigate to="/my-activity" />
  }
  const configObj = {
    signInOptions: [
      {
        provider: GoogleAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false 
    },
    credentialHelper: 'none'
  }

  return (
    <div className="card bg-light mx-auto">
      <div className="container card-body">
        <StyledFirebaseAuth uiConfig={configObj} firebaseAuth={auth} />

      </div>
    </div>
  )
}