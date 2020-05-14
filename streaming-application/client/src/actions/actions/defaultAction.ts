import {jsonPlaceHolder} from '../../apis';
import {AnyAction, Dispatch} from "redux";
import {StoreState} from "../../reducers";
import {AxiosResponse} from "axios";
import {Type, ActionTypes} from '../';

export interface DefaultAction extends AnyAction {
    type: ActionTypes.default;
    payload: Type[];
}


export const defaultAction = (): Function => {

    /**
     * dispatch and getState is unlimited power of redux applicaton
     * dispatch: change any data we want
     * getState: read (access) any data we want, getState nieje povinny parameter, napriklad tu ho ani nebudeme potrebovat
     */
    return async (dispatch: Dispatch<DefaultAction>, getState: () => StoreState): Promise<void> => {
        const response: AxiosResponse<Type[]> = await jsonPlaceHolder().get<Type[], AxiosResponse<Type[]>>("/posts");


        const fetchPostAction: DefaultAction = {
            type: ActionTypes.default,
            payload: response.data,
        }

        // Dispatch si spravime krasne manualne, ked sa skonci await
        dispatch<DefaultAction>(fetchPostAction);
    }
};