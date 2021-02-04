import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}

// reportWebVitals();




