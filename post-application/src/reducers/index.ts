import {combineReducers, ReducersMapObject} from 'redux';
import {exampleReducer} from './postReducers';

export interface StoreState {
    name: string | null;
}


export const reducers = combineReducers<StoreState>({
        name: exampleReducer,
    }
);