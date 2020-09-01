import {createSelector} from '@ngrx/store';
import * as fromEvents from '../state/events.state';
import {EventState, selectEventState} from '../state/app.state';

export const selectEventsState = createSelector(
  selectEventState,
  (state: EventState) => state.events
);

export const selectEvents = createSelector(
  selectEventsState,
  (state: fromEvents.EventsState) => state.events
);
