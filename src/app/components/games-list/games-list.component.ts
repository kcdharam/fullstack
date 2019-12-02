import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Game } from 'src/app/shared/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  GameData: any = [];
  dataSource: MatTableDataSource<Game>;
  @ViewChild(MatPaginator, {static: true} ) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'game_title', 'platform', 'genre', 'rating', 'publisher','release', 'status' ];

  constructor(private gameApi: ApiService) {
    this.gameApi.GetGames().subscribe(data => {
      this.GameData = data;
      this.dataSource = new MatTableDataSource<Game>(this.GameData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }


}