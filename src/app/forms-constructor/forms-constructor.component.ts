import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Store} from '@ngrx/store';
import {IState} from '../reducers';
import {AddElementAction} from '../reducers/formElements/form-builder-actions';
import {Observable} from 'rxjs';
import {DataService} from '../shared/services/data.service';
import {CElementsStyle} from '../shared/constants';
import {IPropertiesObj} from '../shared/interfaces';

@Component({
  selector: 'app-forms-constructor',
  templateUrl: './forms-constructor.component.html',
  styleUrls: ['./forms-constructor.component.scss'],
  providers: [DataService]
})
export class FormsConstructorComponent implements OnInit {
  done = [];
  newElem;
  currentElem;
  id: number;
  styles = CElementsStyle;
  styleObj;
  public stateList$: Observable<IPropertiesObj[]>;

  constructor(private store$: Store<IState>, private storeData: DataService) {
    this.stateList$ = this.storeData.getData();
  }

  ngOnInit(): void {
  }

  addElements(payload): void {
    this.store$.dispatch(new AddElementAction(payload));
    this.done.push(this.newElem);
  }

  drop(event: CdkDragDrop<IPropertiesObj[], any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.id = Math.floor(Math.random() * 10) + new Date().getTime();
      this.currentElem = event.previousContainer.data[event.previousIndex];
      this.styleObj = this.styles[this.currentElem.type];
      this.newElem = {...this.currentElem, id: this.id, styles: this.styleObj};
      this.addElements(this.newElem);
    }
  }
}
