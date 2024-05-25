import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SUGGESTED from '../data/suggest.json';

export function SignUp(props) {

// export function SignUp({ addActivity }) {
    const { activity } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');

    // find the activity from the suggested json file
    const selectedActivity = SUGGESTED.find(act => act.activity === activity);

    const handleSubmit = (event) => {
        event.preventDefault();
        const actInfo = {
            date: selectedActivity.date,
            description: selectedActivity.description,
            img: selectedActivity.img,
            activity: selectedActivity.activity,
            name,
            phoneNum,
            email
        };
        props.addActivity(actInfo);
        // addActivity(actInfo);
        setName('');
        setPhoneNum('');
        setEmail('');
        navigate('/my-activity');
    };

    return (
        <div>
            <h2>Sign up for {activity}</h2>
            <form onSubmit={handleSubmit}>
                <div className="bottom-spacing">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input id="name" className="form-control" value={name} required onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="phone-number" className="form-label">Phone Number:</label>
                    <input id="phone-number" className="form-control" value={phoneNum} required onChange={(event) => setPhoneNum(event.target.value)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input id="email" className="form-control" value={email} required onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="bottom-spacing">
                    <button type="submit" className="btn btn-dark mb-4">Submit</button>
                </div>
            </form>
        </div>
    );
}