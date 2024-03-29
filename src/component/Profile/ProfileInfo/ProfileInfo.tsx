import React from 'react';
import bg from "../../../static/bg.png";
import s from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    title: any
    status: string
    updateStatus: any
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
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
            />
            <div>
                {props.title.photos.large
                    ? <img src={props.title.photos.large}/>
                    : <h3>
                        No photo
                    </h3>
                }
            </div>

            <div>
                <h2>
                    {`User ID: - ${props.title.userId} -`}

                </h2>
            </div>
            <div>
                <h2>
                    {` Need work: - ${props.title.lookingForAJob.toString()} -`}
                </h2>
            </div>
        </div>
    )
}

export default ProfileInfo;