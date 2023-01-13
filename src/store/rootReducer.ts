import { combineReducers } from 'redux';

import { charactersReducer } from './characters/charactersSlice';


const rootReducer = combineReducers({
  characters: charactersReducer,
});

export { rootReducer };