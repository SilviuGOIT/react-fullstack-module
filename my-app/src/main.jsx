import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import persistor from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider store={persistor}>
        <App />
    </ReduxProvider>

)
