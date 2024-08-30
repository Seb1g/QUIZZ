import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QuestionsWindow } from '../Pages/QuestionsWindow.tsx';
import '../Shared/Styles/ScrollBarStyle/ScrollBar.sass';
import '../Shared/Styles/MainPageStyle/MainPage.sass';
import store from '../Shared/Redux/Store/store.ts';
import '../Shared/Styles//DefaultStyle/styles.css';
import { MainPage } from '../Pages/MainPage.tsx';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

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
