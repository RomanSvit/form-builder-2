import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../reducers';
import { Observable } from 'rxjs';
import { DataService } from '../shared/services/data.service';
import { IFormBuilder } from '../shared/interfaces';
import { EditStyleElements } from '../reducers/formElements/form-builder-actions';

@Component({
  selector: 'app-forms-styles',
  templateUrl: './forms-styles.component.html',
  styleUrls: ['./forms-styles.component.scss']
})
export class FormsStylesComponent implements OnInit {
  items = {};
  expandedIndex = 0;
  isEditList = [];
  name = '';
  public stateList: Observable<IFormBuilder>;
  value = '';

  constructor(private store$: Store<IState>,
              private storeData: DataService) {
    this.stateList = this.storeData.getData();
  }

  ngOnInit(): void {
  }

  onEdit(character: string): void {
    this.isEditList.push(character);
    console.log(this.isEditList);
  }

  onEditMode(id: number, character: string, value: string): void {
    this.store$.dispatch( new EditStyleElements({id, character, value}));
    this.isEditList = this.isEditList.filter(elem => elem !== character);
    this.value = '';
  }

  cancelEdit(character: string): void {
    this.isEditList = this.isEditList.filter(elem => elem !== character);
  }

  checkEmptyObj(obj): boolean {
    // tslint:disable-next-line:forin
    for (const key in obj) {
      return obj.hasOwnProperty(key);
    }
  }
}
