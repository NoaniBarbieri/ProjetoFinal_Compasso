import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'
import SearchPage from './Pages/SearchPage'
import NotFound from './Pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<LoginPage/>} />
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/SearchPage' element={<SearchPage />}/>
            <Route exact path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
