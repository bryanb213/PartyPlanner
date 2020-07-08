import { GET_WEATHER } from "../actions/types";

const initialState = {
    weather: null,
    city: null,
    temp: null
}

export default function(state = initialState, action){

    switch(action.type){
        
        case GET_WEATHER:
            console.log(state)
            return {
                ...state,
                weather: action.payload,
            };
        default:
            return state;
    }
}