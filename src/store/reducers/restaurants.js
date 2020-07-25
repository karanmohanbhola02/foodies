import actions from '../constants';

const initialState = {
    restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_RECIPES:
            return {
                ...state,
                restaurants: action.payload
            };
        default:
            return state;
    }
};

export default restaurants;