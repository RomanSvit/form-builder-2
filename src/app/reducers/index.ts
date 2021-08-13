import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { formBuilderNode, formBuilderReducer } from './formElements/form-builder-reducer';
import { IFormBuilder } from '../shared/interfaces';

export interface IState {
  [formBuilderNode]: IFormBuilder;
}

export const reducers: ActionReducerMap<IState> = {
  [formBuilderNode]: formBuilderReducer
};

export const getElementsListStyles = (state: IState) => state[formBuilderNode];




export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
