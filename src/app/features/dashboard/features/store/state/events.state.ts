import {Action, createReducer, on} from '@ngrx/store';
import {actionGetEventSuccess} from '../actions/event.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {EventModel} from '../../../../../modules/core/api/models/event.model';

export interface EventsState extends EntityState<Event> {
  events: EventModel[];

}
export const eventsAdapter: EntityAdapter<Event> = createEntityAdapter<Event>({});

export const initialState: EventsState = eventsAdapter.getInitialState({
    events: [],
  });

const reducer = createReducer(
  initialState,
  on(actionGetEventSuccess, (state, {events}) =>
    ({...state, events})
  ),
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = eventsAdapter.getSelectors();

export function eventsReducer(state: EventsState | undefined, action: Action) {
  return reducer(state, action);
}
