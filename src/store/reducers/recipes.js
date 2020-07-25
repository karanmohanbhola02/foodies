import actions from '../constants';

const initialState = {
    recipes: [1,2,3],
};

const recipes = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_RECIPES:
            return state.update('recipes', () => action.payload);
        default:
            return state;
    }
};

export default recipes;