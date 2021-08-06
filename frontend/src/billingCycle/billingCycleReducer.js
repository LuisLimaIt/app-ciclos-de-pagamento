const INITIAL_STATE = {};

export default (state, INITIA_STATE, action) => {
    switch(action.type){
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data };
        default:
            return state;
    };
};