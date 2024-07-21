
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QuestionsWindow } from '../Pages/QuestionsWindow.tsx'
import "../Shared/styles.css"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { UrlStore } from '../Shared/Stores/UrlStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={UrlStore}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />}></Route>
                <Route path="/question" element={<QuestionsWindow />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
