import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {eventsReducer, EventsState} from './events.state';
import {AppState} from '../../../../../modules/core/core.state';

export const selectEventState = createFeatureSelector<State, EventState>('events');

export const reducers: ActionReducerMap<EventState> = {
  events: eventsReducer,
};

export interface EventState {
  events: EventsState;
}

export interface State extends AppState {
  events: EventState;
}
