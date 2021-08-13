import {Action} from '@ngrx/store';
import {IPropertiesObj} from '../../shared/interfaces';

export enum actionsTypes {
  addElement = '[ELEMENTS] add element',
  delElement = '[ELEMENTS] del element',
  editStyleElements = '[ELEMENTS] edit style of element'
}

export class AddElementAction implements Action {
  readonly type = actionsTypes.addElement;

  constructor(public payload: IPropertiesObj) {
  }
}

export class DeleteElementAction implements Action {
  readonly type = actionsTypes.delElement;

  constructor(public id: number) {
  }
}

export class EditStyleElements implements Action {
  readonly type = actionsTypes.editStyleElements;

  constructor(public payload: { id: number, character: string, value: any }) {
  }
}

export type ElementsActions = AddElementAction | DeleteElementAction | EditStyleElements;
