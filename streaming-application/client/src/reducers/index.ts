import {combineReducers, ReducersMapObject} from 'redux';
import {exampleReducer} from './reducers/exampleReducer';

export interface StoreState {
    name: string | null;
}


export const reducers = combineReducers<StoreState>({
        name: exampleReducer,
    }
);