import { IFormBuilder } from '../../shared/interfaces';


export interface AppState {
  feature: IFormBuilder;
}

export const selectFeature = (state: AppState): IFormBuilder => state.feature;



