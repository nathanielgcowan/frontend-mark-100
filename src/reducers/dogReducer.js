import { FETCH_DOGS } from '../actions/types';

const inititalState = { plural: [], singular: {} };

export default function(state =inititalState, action) {
    switch(action.type) {
        case FETCH_DOGS:
            return ...state, items: action.payload,
        default:
            return state;
    }
}