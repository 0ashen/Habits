import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/common.scss'
import './assets/styles/index.scss'
import 'react-calendar/dist/Calendar.css';
import { App } from './App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/Habits' : '/'}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()