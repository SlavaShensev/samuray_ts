import {RootStateType, state, subscribe} from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)



