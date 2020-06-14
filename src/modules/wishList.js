const initialState = {
    test: '초기 redux'
};

// Action
const ADD_MOVIE = 'WISHLIST/ADD_MOVIE';
const REMOVE_MOVIE = 'WISHLIST/REMOVE_MOVIE';

// Action Creator Function
export const addMovie = (movie) => ({
    type: ADD_MOVIE,
    movie,
});

export const removeMovie = (id) => ({
    type: REMOVE_MOVIE,
    id,
});

const wishList = (state = [], action) => {
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

export default wishList;
