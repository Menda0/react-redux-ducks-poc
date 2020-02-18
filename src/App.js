import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import TestReduxComponent from "./TestReduxComponent";

function App() {



    return (
        <Provider store={store}>
            <TestReduxComponent/>
        </Provider>
    );
}

export default App;
