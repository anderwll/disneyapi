import { combineReducers } from 'redux';

import { charactersReducer } from './characters/charactersSlice';
import { characterReducer } from './character/characterSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer
});

export { rootReducer };