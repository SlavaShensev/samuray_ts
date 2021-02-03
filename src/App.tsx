import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Setting from "./component/Setting/Setting";
import {addPost, RootStateType} from "./redux/state";


type PropsType = {
    state: RootStateType
}

const App = (props: PropsType) => {
    return (

            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={()=> <Profile
                        profilePage={props.state.profilePage}
                        addPost={addPost}
                    />}/>
                    <Route path={'/news'} component={Music}/>
                    <Route path={'/music'} component={News}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
    )
};

export default App;
