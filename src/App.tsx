import React from 'react';
import {Route} from 'react-router-dom';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Setting from "./component/Setting/Setting";
import './App.css';
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import UsersContainer from "./component/Users/UsersContainer";

const App = () => {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={Music}/>
                <Route path={'/music'} component={News}/>
                <Route path={'/setting'} component={Setting}/>
            </div>
        </div>
    )
};

export default App;
