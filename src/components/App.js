import React, { useState } from 'react';
import { Header } from './HeaderBar.js';
import { HomePage } from './HomePage';
import { MyActivity } from './MyActivityComponent.js';
import { ActivityDetails } from './ActivityDetailsComponent.js';
import { CreateActivity } from './CreateActivityComponent.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SignUp } from './SignUp.js';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
// import REGISTERED_ACTIVITIES from '../data/registered_activities.json';


function App(props) {
    const db = getDatabase();

    const registeredRef = ref(db, "registered");
    console.log(registeredRef);
    // activities signed up for
    // const [registeredActivities, setRegisteredActivities] = useState(REGISTERED_ACTIVITIES);
    const [registeredActivities, setRegisteredActivities] = useState(registeredRef);
    // add activity to registered
    const addActivity = (activity) => {
        setRegisteredActivities(registeredActivities => [...registeredActivities, activity]); 
    };

    return (
        <div>
            <Header />

            <main>
                <Routes>
\                   <Route index element={<HomePage db={db}/>} />
                    {/* <Route path="/activity" element={<ActivityDetails />} /> */}
                    <Route path="/create-activity" element={<CreateActivity />} />
                    <Route path="/my-activity" element={<MyActivity registeredActivities={registeredActivities} />} />
                    {/* <Route path="/activity/:name" element={<ActivityDetails />} /> */}
                    <Route path="/sign-up/:activity" element={<SignUp addActivity={addActivity} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>

            <footer>
                Created by Sarah Haworth, Yaqi Lu, and Halle Hwang.
                &copy; 2024
            </footer>
        </div>

    )
}

export default App
