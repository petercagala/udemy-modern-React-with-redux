import {Reducer} from "redux";
import {User as UserState} from '../';
import {Action, ActionTypes, User as UserAction} from '../../actions/';


export const usersReducer: Reducer<UserState[], Action> = (users: UserState[] = [], action: Action ): UserState[] => {
    switch(action.type) {
        case ActionTypes.fetchUser:
            return [...users, mapUserActionToState(action.payload)];
        default:
            return users;
    }
};

const mapUserActionToState = (userAction: UserAction): UserState => {
    const userState: UserState = {
        id: userAction.id,
        email: userAction.email,
        name: userAction.name,
        phone: userAction.phone,
        username: userAction.username,
        website: userAction.website,
    }
    return userState;
}