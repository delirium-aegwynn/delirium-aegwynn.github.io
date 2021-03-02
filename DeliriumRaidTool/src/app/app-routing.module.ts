import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersComponent} from './players/players.component';
import {EncounterComponent} from './encounter/encounter.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {StrawpollsComponent} from './strawpolls/strawpolls.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'strawpolls', component: StrawpollsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'encounters', component: EncounterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
