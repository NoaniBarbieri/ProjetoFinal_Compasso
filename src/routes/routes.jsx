import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage/index.jsx'
import HomePage from '../Pages/HomePage.jsx'
import SearchPage from '../Pages/SearchPage.jsx'
import NotFound from '../Pages/NotFoundPage/index.jsx'

function PageRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LoginPage/>} />
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/SearchPage' element={<SearchPage />}/>
            <Route  path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
