import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {metaReducers, reducers} from './core.state';
import {RouterEffects} from './router/router.effects';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryService} from './api/services/in-memory.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    // ngrx
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers, runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    // HTTP
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryService, {dataEncapsulation: false}
    ),
    EffectsModule.forRoot([
      RouterEffects,
    ]),
  ],
  exports: [
    // Angular
    FormsModule,
  ],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }

  }
}
