import axios from "axios"
import {Check} from '../components/SearchLogin/index'

export const getClimate =  async () => {

    const localUser = Check().local
    const lat = localUser.substring(0, localUser.indexOf(","));
    const lon = localUser.substring(localUser.indexOf(",") + 2);
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=52f592c34ccda232d98128280512d784`)
    return weather;
}
