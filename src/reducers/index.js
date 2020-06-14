import {ADD_MOVIE, REMOVE_MOVIE} from "../actions";

export default function wishList(state = [], action) {
    console.log(`reducer, ${state}, action : ${action}`);
    switch (action.type) {
        case ADD_MOVIE:
            return [
                ...state, action.movie
            ];
        case REMOVE_MOVIE:
            const nextState = state.filter(movie => movie.id !== action.id);
            return nextState;
        default:
            return state;
    }
}
