
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { ScrollToTop } from './hooks/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <ScrollToTop/>
      <App></App>
    </BrowserRouter>

)
