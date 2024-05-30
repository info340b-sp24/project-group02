import React, { useState, useEffect } from 'react';
import { Header } from './HeaderBar.js';
import { HomePage } from './HomePage';
import { MyActivity } from './MyActivityComponent.js';
import { ActivityDetails } from './ActivityDetailsComponent.js';
import { CreateActivity } from './CreateActivityComponent.js';
import { Navigate, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import { SignUp } from './SignUp.js';
import SignInPage from './SignInPage.js';
import ProfilePage from './ProfilePage.js';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App(props) {
  const [createdActivities, setCreatedActivities] = useState({});
  const [registeredActivities, setRegisteredActivities] = useState({});
  const [currentUser, setCurrentUser] = useState(null); // default to null user

  const navigateTo = useNavigate();

  useEffect(() => {
    const db = getDatabase();
    const registeredRef = ref(db, "registered");
    const createdRef = ref(db, "created");
    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/blank.jpg";
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    });

    onValue(registeredRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const activitiesArray = Object.values(data);
        setRegisteredActivities(activitiesArray);
      } else {
        setRegisteredActivities([]);
      }
    });

    onValue(createdRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const activitiesArray = Object.values(data);
        setCreatedActivities(activitiesArray);
      } else {
        setCreatedActivities([]);
      }
    });
  }, []);

  const loginUser = (userObj) => {
    setCurrentUser(userObj);

    if (userObj.userId !== null) {
      navigateTo('/my-activity');
    }
  };

  return (
    <div>
      <Header currentUser={currentUser} />

      <main>
        <Routes>
          <Route index element={<HomePage currentUser={currentUser} />} />
          <Route path="/activity" element={<ActivityDetails />} />
          <Route path="/create-activity" element={<CreateActivity />} />
          <Route path="/activity/:name" element={<ActivityDetails />} />
          <Route path="/signin" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />
          <Route path="/sign-up/:activity" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route element={<ProtectedPage currentUser={currentUser} />}>
            <Route path="/my-activity" element={<MyActivity currentUser={currentUser} createdActivities={createdActivities} registeredActivities={registeredActivities} />} />
            <Route path="/profile" element={<ProfilePage currentUser={currentUser} />} />
          </Route>
        </Routes>
      </main>

      <footer>
        Created by Sarah Haworth, Yaqi Lu, and Halle Hwang.
        &copy; 2024
      </footer>
    </div>
  );
}

function ProtectedPage(props) {
  if (!props.currentUser?.userId) {
    return <Navigate to="/signin" />;
  } else {
    return <Outlet />;
  }
}

export default App;
