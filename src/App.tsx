import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Setting from "./component/Setting/Setting";
import { RootStateType } from '.';

type PropsType = {
    state: RootStateType
}

const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={()=> <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path={'/news'} component={Music}/>
                    <Route path={'/music'} component={News}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
