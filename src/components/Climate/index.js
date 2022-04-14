import React,{useState, useEffect} from "react"
import { getClimate } from '../../helpers/getClimate'
import { ClimateStyle } from "./style";
import {Check} from '../SearchLogin/index'

function Climate() {
    const [database, setDatabase] = useState({
        city: "",
        temp: "",
        codImage: "",
    });

    const stateUser = Check().state
    const getWeather = () => {
        getClimate().then(res => {
            setDatabase({
                city: `${res.data.name} - ${stateUser}`,
                temp: `${res.data.main.temp.toFixed(0)}°`,
                codImage: `${res.data.weather[0].icon}`,
            });
        })
        .catch(error => console.log(error))
    };


    useEffect(() => {
        getWeather();
    }, []);

    return (
        <ClimateStyle>
           <p>{database ? database.city : ""}</p>
            <div>
                <img alt="" src={`http://openweathermap.org/img/wn/${database.codImage}@4x.png`} />
                <h1>{database ? database.temp : "" }</h1>
            </div>        
        </ClimateStyle>
    )    
}
export default Climate;