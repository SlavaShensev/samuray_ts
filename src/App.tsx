import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <Dialogs/>
        </div>
    )
};

export default App;
