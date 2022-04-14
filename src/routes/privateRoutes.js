import { Check } from '../components/SearchLogin/index'
import {Route, Navigate} from 'react-router';

const PrivateRoute = (props) => Check() ? <Route {... props} /> : <Navigate to='/'/>

export default PrivateRoute