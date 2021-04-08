import { API } from "../config/API"
import Actions from "./Actions";


export const searchAll = (searchValue) => {

    return async dispatch => {

        const endpoints = [{key:'films', type: 'Films'}, {key: 'people', type: 'People'}, {key: 'planets', type: 'Planets'}, {key: 'species', type: 'Species'}, {key: 'starships', type: 'Starships'}, {key: 'vehicles', type: 'Vehicles'}];
        
        const finalPayload = [];

        for (let i = 0; i < endpoints.length; i++) {
            let endpoint = endpoints[i];

            const response = await API.get(`/${endpoint.key}/?search=${searchValue}`);
            const data = response.data.results;
            data.map(p => {
                p.id = p.url.substring(20);
                p.type = endpoint.type;

                //examples...
                if (endpoint.key === 'films') {
                    p.name = p.title;
                }

                if (endpoint.key === 'starships') {
                    p.name = p.name + ": " + p.model;
                }

                return p;
            })
            
            finalPayload.push(...data);
        }
       
        dispatch({
            type: Actions.SEARCH_FETCHED,
            payload: finalPayload
        });
        
    }

}