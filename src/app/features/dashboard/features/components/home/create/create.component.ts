import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../modules/core/core.state';
import {actionCreateEvent} from '../../../store/actions/event.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private store$: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  create(event) {
    this.store$.dispatch(actionCreateEvent({event}));
  }


}
