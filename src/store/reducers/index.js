import { combineReducers } from 'redux';
import recipes from './recipes';
import restaurants from './restaurants';

const rootReducers = combineReducers({
    recipes,
    restaurants    
});

export default rootReducers;