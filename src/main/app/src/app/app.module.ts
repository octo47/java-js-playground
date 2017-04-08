import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./hero.service";
import {HeroChildComponent} from './hero-child.component';
import {HeroMasterComponent} from './hero-master.component';
import {VersionComponent} from './version-child.component';
import {VersionParentComponent} from './version-parent.component';
import {HeroVoterComponent} from './hero-voter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroChildComponent,
    HeroMasterComponent,
    HeroVoterComponent,
    VersionComponent,
    VersionParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
