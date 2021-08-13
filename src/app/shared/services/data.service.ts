import { Store } from '@ngrx/store';
import { getElementsListStyles, IState } from '../../reducers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormBuilder } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class DataService {
  public stateList = this.store$.select(getElementsListStyles);
  constructor(private store$: Store<IState>) {
  }

  getData(): Observable<IFormBuilder> {
    return this.stateList;
  }

}
