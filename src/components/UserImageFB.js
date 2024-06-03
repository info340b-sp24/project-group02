import React, { useState, useEffect } from 'react';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';

export default function UserImageInFBStore(props) {
  const currentUser = props.currentUser;
  const displayName = props.currentUser.userName;

  const [imageURL, setImageURL] = useState(undefined)

  const db = getDatabase();
  const userImgURL = dbRef(db, "userData/" + currentUser.userId + "/imgUrl")
  console.log("Were' rendering the userimage component!!!");

  useEffect(() => {

    onValue(userImgURL, (snapshot) => {
      const imageURL = snapshot.val();
      console.log("imageURL :", imageURL);
      setImageURL(imageURL)
    })

  });

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName + "'s"} Image from Firebase Store
      </h2>
      <img src={imageURL} alt="user avatar preview" className="mb-2 userstoreimage" />
    </div>
  )
}

