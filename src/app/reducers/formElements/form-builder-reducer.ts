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
      return {...state, elements: [...state.elements.filter((elem) => elem.id !== action.id)]};
    case actionsTypes.editStyleElements:
      const character = action.payload.character;
      const value = action.payload.value;
      const id = action.payload.id;
      const currentStyle = state.elements.find(el => el.id === action.payload.id);
      const changesStyle = {...currentStyle.styles, [character]: value};
      return {...state, elements: [...state.elements.map((el) => (el.id === id) ? {...el, styles: {...changesStyle}} : el)]};
    default:
      return state;
  }
};
