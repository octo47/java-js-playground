import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroMasterComponent} from './hero-master.component';
import {VersionParentComponent} from './version-parent.component';

const routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'master', component: HeroMasterComponent},
  {path: 'version', component: VersionParentComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
