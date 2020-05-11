import {combineReducers, ReducersMapObject} from 'redux';
import {exampleReducer} from './reducers';

export interface StoreState {
    name: string | null;
}


export const reducers = combineReducers<StoreState>({
        name: exampleReducer,
    }
);