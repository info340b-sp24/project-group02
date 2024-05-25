import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateActivity(props) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: add to database
        navigate("/");
    };

    return (
        <div>
             <h1 className="text-center">Create An Activity</h1>
            <form className="m-2" onSubmit={handleSubmit}>
                <div className="bottom-spacing">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="phone-number" className="form-label">Phone Number:</label>
                    <input type="text" className="form-control" id="phone-number" name="phonenum" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-name" className="form-label">Event Name:</label>
                    <input type="text" className="form-control" id="event-name" name="event" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="activity" className="form-label">Activity Type:</label>
                    <select id="activity" name="activity" className="form-control" required>
                        <option value=""></option>
                        <option value="grocery">Grocery</option>
                        <option value="hike">Hike</option>
                        <option value="coffee">Coffee</option>
                        <option value="food">Getting Food</option>
                        <option value="concert">Concert</option>
                        <option value="recreationalsports">Recreational Sports</option>
                        <option value="water">By the Water</option>
                        <option value="sports">Sports Events</option>
                        <option value="selfcare">Self Care</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-details" className="form-label">Event Details:</label>
                    <textarea className="form-control" id="event-details" rows="4" required></textarea>
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-date" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="event-date" name="date" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-time" className="form-label">Start Time:</label>
                    <input type="time" className="form-control" id="event-time" name="starttime" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-duration" className="form-label">Estimated Duration (in minutes):</label>
                    <input type="number" className="form-control" id="event-duration" name="duration" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="num-spots" className="form-label">Number of Spots Available:</label>
                    <input type="number" className="form-control" id="num-spots" name="spots" required />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="banner-image" className="form-label">Banner Image: </label>
                    <input type="file" className="form-control" id="banner-image" required />
                </div>
                <div className="bottom-spacing">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    )
}