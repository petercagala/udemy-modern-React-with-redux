import {Reducer} from 'redux';
import {Action} from '../actions/index';


export const exampleReducer: Reducer<string | null, Action> = (name: string | null | undefined , action: Action): string | null => {
    if(name === undefined) {
        return null;
    }

    return null;
};