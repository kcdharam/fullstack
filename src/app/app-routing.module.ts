import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { PlayerRankingsComponent } from './components/player-rankings/player-rankings.component';
import { JoinGameComponent } from './components/join-game/join-game.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { AuthGuard } from "./shared/auth.guard";
//dharamone
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'player-rankings' },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'games-list', component: GamesListComponent },
  { path: 'player-rankings', component: PlayerRankingsComponent },
  { path: 'join-game/:id', component: JoinGameComponent },

  
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
  
  //dharamone
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
