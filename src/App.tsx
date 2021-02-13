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
import {StoreType} from "./redux/store";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const store = props.store.getState()
    return (

        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogs={store.dialogsPage}/>}/>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={store.profilePage}
                    message={store.profilePage.newPostText}
                    addPost={props.store.addPost.bind(props.store)}
                    updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                />}/>
                <Route path={'/news'} component={Music}/>
                <Route path={'/music'} component={News}/>
                <Route path={'/setting'} component={Setting}/>
            </div>
        </div>
    )
};

export default App;
