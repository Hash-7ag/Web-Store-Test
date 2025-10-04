import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import "./style/variables.css";
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
   <Provider store={store}> 
      <App />         
   </Provider>
)
