import preloader from "../../../assets/img/Basketball.gif";
import React from "react";

const Preloader = () => {
    return <div style={{margin:'15px', borderRadius: '10px'}}>
        <img src={preloader}
             style={{height: '30px'}}
        />
    </div>
}

export default Preloader