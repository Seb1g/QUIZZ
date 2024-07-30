import ReactDOM from 'react-dom/client'
import { MainPage } from '../Pages/MainPage.tsx'
import { QuestionsWindow } from '../Pages/QuestionsWindow.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { UrlStore } from '../Shared/Stores/UrlStore.ts'
import "../Shared/Styles/MainPage.sass"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={UrlStore}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainPage />}></Route>
                <Route path="/question" element={<QuestionsWindow />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
