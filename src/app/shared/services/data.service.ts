import { Store } from '@ngrx/store';
import {getElementsListStyles, IState, selectElementsListStyles} from '../../reducers';
import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {IFormBuilder, IPropertiesObj} from '../interfaces';
import {takeUntil} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  public unsubscribe$ = new Subject<void>();
  public stateList = this.store$.select(selectElementsListStyles);
  constructor(private store$: Store<IState>) {
  }
  getData(): Observable<IPropertiesObj[]> {
    return this.stateList;
  }

}
