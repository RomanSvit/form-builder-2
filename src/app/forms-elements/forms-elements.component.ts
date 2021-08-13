import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { IState } from '../reducers';
import { DeleteElementAction } from '../reducers/formElements/form-builder-actions';


export interface Elems {
  type: string;
  placeholder: string;
  id?: number;
}

@Component({
  selector: 'app-forms-elements',
  templateUrl: './forms-elements.component.html',
  styleUrls: ['./forms-elements.component.scss']
})
export class FormsElementsComponent implements OnInit {

  formElements: Elems[] = [];
  elId;

  constructor(private http: HttpClient, private store$: Store<IState>) {
  }

  ngOnInit(): void {
    this.http.get<Elems[]>('http://localhost:3000/elements').subscribe(response => {
      this.formElements = response;
    });
  }

  deleteElement(id: number): void {
    this.store$.dispatch(new DeleteElementAction(id));
  }

  drop(event: CdkDragDrop<Elems[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.elId = event.item.element.nativeElement.dataset.id;
      console.log("444444444", typeof this.elId);
      transferArrayItem(event.previousContainer.data,
        event.container.data.concat(),
        event.previousIndex,
        event.currentIndex);
      this.deleteElement(+this.elId);
    }
  }
}
