import React from 'react';
import bg from '../static/bg.png';
import p from "../Profile/Profile.module.css";

const Profile = () => {
    return (
        <div className={p.profile}>
            <img src={bg} className={p.bg}/>
            Content
        </div>
    )
}

export default Profile;