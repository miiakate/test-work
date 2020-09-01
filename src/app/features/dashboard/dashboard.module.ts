import {CommonModule} from '@angular/common';
import {IndexComponent} from './containers/index/index.component';
import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../modules/shared/shared.module';
import {AddEventComponent} from './features/components/add-event-form/add-event.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {EventsEffects} from './features/store/effects/event.effects';
import {reducers} from './features/store/state/app.state';
import {CreateComponent} from './features/components/home/create/create.component';
import {ListComponent} from './features/components/home/list/list.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddEventComponent,
    ListComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('events', reducers),
    EffectsModule.forFeature([
      EventsEffects,
    ]),
    SharedModule,
  ],
  providers: []
})
export class DashboardModule {
}
