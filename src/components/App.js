import React, { useState, useEffect } from 'react';
import { Header } from './HeaderBar.js';
import { HomePage } from './HomePage';
import { MyActivity } from './MyActivityComponent.js';
import { ActivityDetails } from './ActivityDetailsComponent.js';
import { CreateActivity } from './CreateActivityComponent.js';
import { Navigate, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import { SignUp } from './SignUp.js';
import SignInPage from './SignInPage.js';
import REGISTERED_ACTIVITIES from '../data/registered_activities.json';
import ProfilePage from './ProfilePage.js';
import DEFAULT_USERS from '../data/users.json';
import { getDatabase, ref, set as firebaseSet, onValue, push as FirebasePush } from 'firebase/database';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App(props) {
    const db = getDatabase();
    const registeredRef = ref(db, "registered");
    // activities signed up for
    const [registeredActivities, setRegisteredActivities] = useState(registeredRef);

    // add activity to registered
    const addActivity = (activity) => {
        setRegisteredActivities(registeredActivities => [...registeredActivities, activity]);
    };
    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

    const navigateTo = useNavigate();

    useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        console.log("signing in as", firebaseUser.displayName)
        console.log("firebaseuser: ", firebaseUser);
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/blank.jpg";
        console.log("firebaseuser after adding fields :", firebaseUser)
        setCurrentUser(firebaseUser);
      }
      else {
        console.log("signed out");
        setCurrentUser(DEFAULT_USERS[0]);
      }
    })


  }, [])

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    
    if(userObj.userId !== null){
      navigateTo('/my-activity');
    }
  }


    return (
        <div>
            <Header currentUser={currentUser} />

            <main>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/activity" element={<ActivityDetails />} />
                    <Route path="/create-activity" element={<CreateActivity />} />
                    <Route path="/my-activity" element={<MyActivity registeredActivities={registeredActivities} />} />
                    <Route path="/activity/:name" element={<ActivityDetails />} />
                    <Route path="/signin" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />
                    <Route path="/sign-up/:activity" element={<SignUp addActivity={addActivity} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route element={<ProtectedPage currentUser={currentUser} />}>
                        <Route path="my-activity" element={<MyActivity currentUser={currentUser} />} />
                        <Route path="my-activity" element={<Navigate to="/my-activity" />} />
                        <Route path="profile" element={<ProfilePage currentUser={currentUser} />} />

                    </Route>
                </Routes>
            </main>

            <footer>
                Created by Sarah Haworth, Yaqi Lu, and Halle Hwang.
                &copy; 2024
            </footer>
        </div>

    )
}
function ProtectedPage(props) {
    if(props.currentUser.userId === null) {
      return <Navigate to="/signin" />
    }
    else {
      return <Outlet />
    }
  }
export default App
