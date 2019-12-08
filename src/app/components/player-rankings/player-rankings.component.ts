import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Player } from 'src/app/shared/player';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-player-rankings',
  templateUrl: './player-rankings.component.html',
  styleUrls: ['./player-rankings.component.css']
})
export class PlayerRankingsComponent implements OnInit {
  
  enableJoin: boolean = false;
  searchKey: string;


  PlayerData: any = [];
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator, {static: true} ) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'player_name', 'rank', 'score', 'time', 'gamesPlayed', 'status', 'action'];

  constructor(private playerApi: ApiService) {
    this.playerApi.GetPlayers().subscribe(data => {
      this.PlayerData = data;
      this.dataSource = new MatTableDataSource<Player>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    }) 
       
  }

  // joinPlayer(){
  //   if() {
  //     const data = this.dataSource.data;
  //     data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
  //     this.dataSource.data = data;
  //     this.playerApi.DeletePlayer(e._id).subscribe()
  //   }
  // }

  ngOnInit() { }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

}
