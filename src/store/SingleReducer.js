import Actions from "../dispatchers/Actions"

const INITIAL_STATE = {
    modalIsOpen: false,
    data: {},
    parsed: {},
    loading: false
}

const singleStateManager = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case Actions.OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true
            }

        case Actions.CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false
            }

        case Actions.SINGLE_DATA_FETCHED:
            return {
                ...state,
                data: action.payload,
            }

        case Actions.COMPLETE_DATA_FETCHED:
            return {
                ...state,
                parsed: action.payload
            }

        case Actions.LOADING_COMPLETE_DATA:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }

}

export default singleStateManager;