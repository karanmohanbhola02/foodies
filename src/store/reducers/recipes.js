import actions from '../constants';
import { recipes as recipesData } from '../../constants';

const initialState = {
    recipes: recipesData
};

const recipes = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            };
        default:
            return state;
    }
};

export default recipes;