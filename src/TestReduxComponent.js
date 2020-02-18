import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import logo from './logo.svg';
import newReducer from "./store/new-reducer/new-reducer.ducks";
import {setMessage} from "./store/old-reducer/actions";


const TestReduxComponent = () => {
    const oldReducerMessage = useSelector(state => state.oldReducer.message);
    const newReducerMessage = useSelector(state => state.newReducer.message);
    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(setMessage(event.target.value));
        dispatch(newReducer.actions.setMessage(event.target.value));
    };

    return (
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <input type="text" onChange={onChange}/>
                    <p>
                        {oldReducerMessage}
                    </p>
                   <p>
                        {newReducerMessage}
                    </p>
                </header>
            </div>
    );
};


export default TestReduxComponent
