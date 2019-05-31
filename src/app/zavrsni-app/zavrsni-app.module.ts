import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZavrsniAppRoutingModule} from './zavrsni-app-routing.module';
import {MainComponent} from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ZavrsniAppRoutingModule,
  ]
})
export class ZavrsniAppModule { }
