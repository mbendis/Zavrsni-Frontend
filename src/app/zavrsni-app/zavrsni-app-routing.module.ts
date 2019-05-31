import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'app', component: MainComponent,
    children: [
      {path: '', redirectTo: 'user/login', pathMatch: 'full'},
      {path: 'user', loadChildren: 'src/app/zavrsni-app/auth/authorization.module#AuthorizationModule'},
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ZavrsniAppRoutingModule { }
