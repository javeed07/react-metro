import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./Components/App.js"
// import {configureStore,getDefualtMiddleware} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import store from './store'
// import createSagaMiddleware from 'redux-saga'
// import userSaga from './Sagas/userSaga';

//create saga middleware
// const sagaMiddleware = createSagaMiddleware()

// const store = configureStore({
//     reducer:userReducer,
//     middleware:[...getDefualtMiddleware(),sagaMiddleware]
// })
// sagaMiddleware.run(userSaga)
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))
