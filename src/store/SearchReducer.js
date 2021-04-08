import Actions from "../dispatchers/Actions"

const INITIAL_STATE = {
   data: []
}

const searchStateManager = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case Actions.SEARCH_FETCHED: 
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }

}

export default searchStateManager;