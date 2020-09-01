import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {catchError, concatMap, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  actionCreateEvent, actionCreateEventFailure,
  actionCreateEventSuccess,
  actionGetEvent,
  actionGetEventFailure,
  actionGetEventSuccess
} from '../actions/event.actions';
import {EventsService} from '../../../../../modules/core/api/services/events.service';
import {AppState} from '../../../../../modules/core/core.state';

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventsService: EventsService,
  ) {
  }

// GET EVENTS
  getEvent = createEffect(() =>
    this.actions$.pipe(
      ofType(actionGetEvent),
      tap(params => {
      }),
      concatMap((params) => {
        return this.eventsService.getEvent().pipe(
          map((data: any) => actionGetEventSuccess({events: data})),
          catchError(error => of(actionGetEventFailure({error})))
        );
      })
    ),
  );

  getEventSuccess = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGetEventSuccess),
        tap(params => {
        }),
      ),
    {dispatch: false}
  );

  getEventFailure = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGetEventFailure),
        tap(params => {
        }),
      ),
    {dispatch: false}
  );

  // CREATE EVENT
  createEvent = createEffect(() =>
    this.actions$.pipe(
      ofType(actionCreateEvent),
      concatMap((params) => {
        return this.eventsService.addEvent(params.event).pipe(
          map((data: any) => actionCreateEventSuccess({event: data})),
          catchError(error => of(actionCreateEventFailure({error})))
        );
      })
    ),
  );

  createEventSuccess = createEffect(() =>
      this.actions$.pipe(
        ofType(actionCreateEventSuccess),
        tap(params => {
          this.store$.dispatch(actionGetEvent());
        }),
      ),
    {dispatch: false}
  );

}
