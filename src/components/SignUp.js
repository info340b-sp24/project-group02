import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MyActivity } from './MyActivityComponent';

// function for signing up 
export function SignUp(props) {
    const [userActivities, setUserActivities] = useState([]);
    const { activity } = useParams();


    // callback function so that it adds the sign up to the user activities
    const handleSignUp = (userInfo) => {
        setUserActivities([...userActivities, userInfo]);
    };

    const SignUpForm = ({ onSignUp }) => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');

    // callback function for submitting the form
    const handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            name, phoneNum, email, activity
        };
        onSignUp(userInfo);
        setName('');
        setPhoneNum('');
        setEmail('');
        // <Link to="/my-activity" element={<MyActivity />} />
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type='text' value={phoneNum} onChange={(event) => setPhoneNum(event.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

    return (
        <div>
            <h2> Sign up for {activity }</h2>
            <SignUpForm onSignUp={handleSignUp} />
        </div>
    )
}