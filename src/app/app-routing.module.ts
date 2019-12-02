import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-player' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'games-list', component: GamesListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
