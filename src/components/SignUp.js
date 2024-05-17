import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// function for signing up 
export function SignUp({ addActivity }) {
    // const [userActivities, setUserActivities] = useState([]);
    const { activity } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');

    // callback function for submitting the form
    const handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            name, phoneNum, email, activity
        };
        // onSignUp(userInfo);
        addActivity(userInfo);
        setName('');
        setPhoneNum('');
        setEmail('');
        navigate('/my-activity');
        // <Link to="/my-activity" element={<MyActivity />} />
    };

    return (
        <div>
            <h2>Sign up for {activity}</h2>
            <form onSubmit={handleSubmit}>
                <div className="bottom-spacing">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input id="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="phone-number" className="form-label">Phone Number:</label>
                    <input id="phone-number" className="form-control" value={phoneNum} onChange={(event) => setPhoneNum(event.target.value)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="email" className="form-label">Email:</label>
                   <input id="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="bottom-spacing">
                    <button type="submit" className="btn btn-dark mb-4">Submit</button>
                </div>
            </form>
        </div>    
    );


}