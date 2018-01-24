import { NgModule, ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { StaggerComponent } from './stagger/stagger.component';

const appRoutes: Routes = [
 {path: 'stagger', component: StaggerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
