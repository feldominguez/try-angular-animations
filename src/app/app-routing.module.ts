import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaggerComponent } from './stagger/stagger.component';
import { MainComponent } from './main/main.component';
import { OverviewComponent } from './overview/overview.component';
import { FadeComponent } from './fade/fade.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: OverviewComponent },
      { path: 'stagger', component: StaggerComponent },
      { path: 'fade', component: FadeComponent }
    ]
  },
  // Wildcard Route Back Home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
