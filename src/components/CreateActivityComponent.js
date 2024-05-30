import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, push as firebasePush, getDatabase } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export function CreateActivity(props) {
    const navigate = useNavigate();
    const db = getDatabase();
    const storage = getStorage();
    const createdRef = ref(db, "created");

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [eventName, setEventName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [duration, setDuration] = useState("");
    const [spots, setSpots] = useState("");
    const [bannerImage, setBannerImage] = useState(null);
    const [error, setError] = useState("");

    const handleInputChange = (setter) => {
        return (event) => {
            setter(event.target.value);
        };
    };

    const handleImageChange = (event) => {
        setBannerImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (bannerImage) {
            const storageRefPath = storageRef(storage, `images/${bannerImage.name}`);
            uploadBytes(storageRefPath, bannerImage)
                .then((snapshot) => {
                    return getDownloadURL(snapshot.ref);
                })
                .then((url) => {
                    saveActivity(url);
                })
                .catch((error) => {
                    setError("Image upload failed: " + error.message);
                });
        } else {
            saveActivity(null);
        }
    };

    const saveActivity = (imageURL) => {
        firebasePush(createdRef, {
            name: name,
            phoneNumber: phoneNumber,
            activity: eventName,
            type: type,
            description: description,
            date: `${date} at ${startTime}`,
            duration: duration,
            spots: spots,
            image: imageURL,
        })
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            setError("Activity creation failed: " + error.message);
        });
    };

    return (
        <div>
            <h1 className="text-center">Create An Activity</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form className="m-2" onSubmit={handleSubmit}>
                <div className="bottom-spacing">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required value={name} onChange={handleInputChange(setName)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="phone-number" className="form-label">Phone Number:</label>
                    <input type="text" className="form-control" id="phone-number" name="phonenum" required value={phoneNumber} onChange={handleInputChange(setPhoneNumber)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-name" className="form-label">Event Name:</label>
                    <input type="text" className="form-control" id="event-name" name="event" required value={eventName} onChange={handleInputChange(setEventName)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="activity" className="form-label">Activity Type:</label>
                    <select id="activity" name="activity" className="form-control" required value={type} onChange={handleInputChange(setType)}>
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
                    <textarea className="form-control" id="event-details" rows="4" required value={description} onChange={handleInputChange(setDescription)}></textarea>
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-date" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="event-date" name="date" required value={date} onChange={handleInputChange(setDate)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-time" className="form-label">Start Time:</label>
                    <input type="time" className="form-control" id="event-time" name="starttime" required value={startTime} onChange={handleInputChange(setStartTime)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="event-duration" className="form-label">Estimated Duration (in minutes):</label>
                    <input type="number" className="form-control" id="event-duration" name="duration" required value={duration} onChange={handleInputChange(setDuration)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="num-spots" className="form-label">Number of Spots Available:</label>
                    <input type="number" className="form-control" id="num-spots" name="spots" required value={spots} onChange={handleInputChange(setSpots)} />
                </div>
                <div className="bottom-spacing">
                    <label htmlFor="banner-image" className="form-label">Banner Image: </label>
                    <input type="file" className="form-control" id="banner-image" required onChange={handleImageChange} />
                </div>
                <div className="bottom-spacing">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
}
