import React from 'react';
import bg from '../../static/bg.png';
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                <img src={bg} className={p.bg}/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;