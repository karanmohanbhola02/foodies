import actions from '../constants';
import { restaurants as restaurantsData } from '../../constants';

const initialState = {
    restaurants: restaurantsData
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