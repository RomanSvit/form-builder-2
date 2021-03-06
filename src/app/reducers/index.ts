import {
  ActionReducerMap, createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {formBuilderNode, formBuilderReducer} from './formElements/form-builder-reducer';
import {IFormBuilder} from '../shared/interfaces';

import * as elementsSelectors from './formElements/form-buider-selector';

export interface IState {
  [formBuilderNode]: IFormBuilder;
}

export const reducers: ActionReducerMap<IState> = {
  [formBuilderNode]: formBuilderReducer
};

export const getElementsListStyles = (state: IState): IFormBuilder => state[formBuilderNode];

export const selectElementsListStyles = createSelector(
  getElementsListStyles,
  elementsSelectors.selectListStyles
);


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
