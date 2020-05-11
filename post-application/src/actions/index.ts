import {AnyAction} from "redux";
import {TemplateAction} from "./TemplateAction";

export {TemplateAction} from "./TemplateAction";

interface MyAction extends AnyAction {
    type: TemplateAction.send;
    payload: string;
}

export type Action = MyAction;