import React from "react";
import ReactDOM from "react-dom/client";
import App from './app'
import reducer from "./reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";


function Ind() {

    const store = createStore(reducer)

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )

}

const conteiner=document.querySelector('#root');
const root = ReactDOM.createRoot(conteiner);
root.render(<Ind/>)
