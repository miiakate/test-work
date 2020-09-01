import {Component, OnInit} from '@angular/core';
import {EventModel} from '../../../../../../modules/core/api/models/event.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../modules/core/core.state';
import {selectEvents} from '../../../store/selectors/event.selectors';
import {actionGetEvent} from '../../../store/actions/event.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public events$ = this.store$.select(selectEvents);


  constructor(private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.dispatch(actionGetEvent());
  }

}
