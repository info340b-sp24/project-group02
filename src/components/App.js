import React from 'react';
import { Header } from './HeaderBar.js';
import { HomePage } from './HomePage';
import { MyActivity } from './MyActivityComponent.js';
import { ActivityDetails } from './ActivityDetailsComponent.js';
import { CreateActivity } from './CreateActivityComponent.js';
import { Navigate, Route, Routes } from 'react-router-dom';


function App(props) {
    return (
        <div>
            <header>
                <Header />
            </header>


            <main>
                <Routes>
\                   <Route index element={<HomePage />} />
                    <Route path="/activity" element={<ActivityDetails />} />
                    <Route path="/create-activity" element={<CreateActivity />} />
                    <Route path="/my-activity" element={<MyActivity />} />
                    <Route path="/activity/:name" element={<ActivityDetails />} />
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
