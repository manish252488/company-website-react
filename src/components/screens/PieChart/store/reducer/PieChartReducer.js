import * as Actions from '../actions';
const initialState = {
    data: null
}
function PieChartReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}
export default PieChartReducer;