import React from 'react';
import bg from "../../../static/bg.png";
import s from "../Profile.module.css";

type ProfileInfoType = {
    title: string
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img src={bg} className={s.bg}/>
            </div>
            <div>
                Ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;