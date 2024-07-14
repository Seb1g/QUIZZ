
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QuestionsWindow } from '../Pages/QuestionsWindow.tsx'
import "../Shared/styles.css"
// import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App/>}></Route>
                <Route path="/question" element={<QuestionsWindow/>}></Route>
            </Routes>
        </BrowserRouter>
    // </React.StrictMode>,
)
