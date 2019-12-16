import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Main from "./neko-1-main/main-1-ui/Main";
import {Provider} from "react-redux";
import store from "./neko-1-main/main-2-bll/store";

// add context
const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
};

export default App;
