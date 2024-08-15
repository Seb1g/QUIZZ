import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { QuestionsWindow } from '../Pages/QuestionsWindow.tsx'
import store from '../Shared/Redux/Store/store.ts'
import { MainPage } from '../Pages/MainPage.tsx'
import "../Shared/Styles/MainPage.sass"
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainPage />}></Route>
                <Route path="/question" element={<QuestionsWindow />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
