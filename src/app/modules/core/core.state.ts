import {ActionReducerMap, createFeatureSelector, MetaReducer} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router/router.state';


export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
export const metaReducers: MetaReducer<AppState>[] = [];

export const selectRouterState = createFeatureSelector<AppState,
  fromRouter.RouterReducerState<RouterStateUrl>>('router');

export const {
  selectCurrentRoute,   // select the current route
} = fromRouter.getSelectors(selectRouterState);

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const selectCoreState = state => state;
