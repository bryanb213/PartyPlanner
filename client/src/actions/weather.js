import axios from 'axios';
import { GET_WEATHER } from './types';

const apiKey = 'e7f6b2ade7d4404e80c9d27e0ad3d479';

//Get weather
export const getWeather = (query) => async dispatch => {

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=Imperial`)

        .then(res =>  dispatch({
            type: GET_WEATHER,
            payload: res.data
        })
        )
        .catch(err => dispatch({
            type: GET_WEATHER,
            payload: {}
        }))
}