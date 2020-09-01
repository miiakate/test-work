import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const sharedModules = [
  ReactiveFormsModule,
  FontAwesomeModule,

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ...sharedModules,
  ],
  exports: [
    FormsModule,

    ...sharedModules,
  ]
})
export class SharedModule {
}
