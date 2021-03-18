import preloader from "../../../assets/img/preloader.gif";
import React from "react";

const Preloader = () => {
    return <div style={{backgroundColor: 'red'}}>
        <img src={preloader}
             style={{height: '30px'}}
        />
    </div>
}

export default Preloader