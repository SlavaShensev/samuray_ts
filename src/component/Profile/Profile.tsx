import React from 'react';
import bg from '../../static/bg.png';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src={bg} className={s.bg}/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;