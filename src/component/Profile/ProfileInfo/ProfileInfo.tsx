import React from 'react';
import bg from "../../../static/bg.png";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    title: any
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.title) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={bg} className={s.bg}/>
            </div>
            <div>
                <img src={props.title.photos.large}/>
            </div>
        </div>
    )
}

export default ProfileInfo;