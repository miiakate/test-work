// GET CUSTOMER
import {createAction, props} from '@ngrx/store';
import {EventModel} from '../../../../../modules/core/api/models/event.model';

export const actionGetEvent = createAction(
  '[Events] Get event',
);

export const actionGetEventSuccess = createAction(
  '[Events] Get event  success',
  props<{ events: EventModel[] }>()
);

export const actionGetEventFailure = createAction(
  '[Events] Get event failure',
  props<{ error: any }>()
);

//  CREATE EVENT
export const actionCreateEvent = createAction(
  '[Events] Create events',
  props<{ event: EventModel }>()
);

export const actionCreateEventSuccess = createAction(
  '[Events] Create events success',
  props<{ event: EventModel[]}>()
);

export const actionCreateEventFailure = createAction(
  '[Events] Create events failure',
  props<{ error: any }>()
);
