import axios from "axios";
import { API } from "../config/API"
import Actions from "./Actions";


export const getSingleData = (endpoint) => {

    return async dispatch => {
     
        const response = await API.get(`${endpoint}`);
        const originalData = response.data;

        dispatch({type: Actions.SINGLE_DATA_FETCHED, payload: originalData})
        dispatch({type: Actions.OPEN_MODAL});

        dispatch({type: Actions.LOADING_COMPLETE_DATA, payload: true})

        let parsed = JSON.parse(JSON.stringify(originalData));
        let keys = Object.keys(parsed);
        
        for (let k = 0; k < keys.length; k++) {
            let key = parsed[keys[k]];
        
            if (Array.isArray(key)) {
                if (key.length > 0 && key[0].startsWith('http://swapi.dev/api/'))
                for (let i = 0; i < key.length; i++) {
                    const response = await API.get(key[i]);
                    const data = response.data;
                    parsed[keys[k]][i] = data;
                }
            }
            else if (key.startsWith("http://swapi.dev/api/")) {
                const response = await API.get(key);
                const data = response.data;
                parsed[keys[k]] = data;
            }
        };


        dispatch({type: Actions.COMPLETE_DATA_FETCHED, payload: parsed})
        dispatch({type: Actions.LOADING_COMPLETE_DATA, payload: false})

    }

}

export const closeModal = () => {
    return dispatch => {
        dispatch({type: Actions.CLOSE_MODAL})
    }
}