import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Store} from '@ngrx/store';
import {getElementsListStyles, IState} from '../reducers';
import {AddElementAction} from '../reducers/formElements/form-builder-actions';
import {selectFeature} from '../reducers/formElements/form-buider-selector';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DataService} from '../shared/services/data.service';
import {IFormBuilder} from '../shared/interfaces';
import {any} from 'codelyzer/util/function';
import {CElementsStyle} from '../shared/constants';

@Component({
  selector: 'app-forms-constructor',
  templateUrl: './forms-constructor.component.html',
  styleUrls: ['./forms-constructor.component.scss']
})
export class FormsConstructorComponent implements OnInit, DoCheck, OnDestroy {
  done = [];
  newElem;
  currentElem;
  public id: number;
  styles = CElementsStyle;
  styleObj;

  public unsubscribe$ = new Subject<void>();
  // public formElemenstList = this.store$.select(getElementsListStyles);
  // public dataState: Observable<any>;
  // public dataState: Observable<IFormBuilder>;
  constructor(private store$: Store<IState>, private storeData: DataService) {
  }

  ngOnInit(): void {
    // this.dataState = this.storeData.getData();
    // this.dataState = this.storeData.getData().pipe(map((data) => console.log(data)));
  }

  ngDoCheck(): void {
    // this.getData();
  }

  // getData(): void {
  //   this.formElemenstList.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.dataState = data);
  // }

  addElements(payload): void {
    this.store$.dispatch(new AddElementAction(payload));
    this.done.push(this.newElem);
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.id = Math.floor(Math.random() * 10) + new Date().getTime();
      this.currentElem = event.previousContainer.data[event.previousIndex];
      this.styleObj = this.styles[this.currentElem.type];
      this.newElem = {...this.currentElem, id: this.id, styles: this.styleObj};
      this.addElements( this.newElem );
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
