import {IFormBuilder} from '../../shared/interfaces';
import {actionsTypes, ElementsActions} from './form-builder-actions';

export const formBuilderNode = 'form-builder';

export const initialState: IFormBuilder = {
  elements: []
};
export const formBuilderReducer = (state = initialState, action: ElementsActions): IFormBuilder => {
  switch (action.type) {
    case actionsTypes.addElement:
      return {...state, elements: [...state.elements, action.payload]};
    case actionsTypes.delElement:
      return {...state, elements: [...state.elements.filter((element) => element.id !== action.id)]};
    case actionsTypes.editStyleElements:
      return state;
    default:
      return state;
  }
};
