import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './../../components/game/game.component';
import { Game } from './../../models/game.model'
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [ CommonModule, GameComponent, FormsModule ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  constructor(private api:ApiService) { }

  games: Game[] = [];
  gamesSearch: Game[] = [];

  // Filters
  filterSearch: string = '';
  filterGender: string = '';
  filterPlat: string = '';

  // Selects
  genders: string[] = [];
  platforms: string[] = [];
  
  // Functions
  onSearchChange() {

    if(this.filterSearch) {
      this.games = this.games?.filter(v => v.title.includes(this.filterSearch))
    } else {
      this.games = this.gamesSearch
    }
  }
  onFilterGender() {

    if(this.filterGender && this.filterGender !== 'All') {
      this.games = this.gamesSearch?.filter(v => v.genre == this.filterGender)
    } else {
      this.games = this.gamesSearch
    }
  }
  onFilterPlat() {

    if(this.filterPlat && this.filterPlat !== 'All') {
      this.games = this.gamesSearch?.filter(v => v.platform == this.filterPlat)
    } else {
      this.games = this.gamesSearch
    }
  }

  getList() {
    this.api.getGames('', null)
      .subscribe((data) => {
        
        // Data
        this.games = data

        // Find genders for select options
        const findGen = data.map((v:any) => {
          return v.genre
        })
        const dataGen = new Set(findGen);
        this.genders = [...dataGen];

        // Find platforms for select options
        const findPlat = data.map((v:any) => {
          return v.platform
        })
        const dataPlat = new Set(findPlat);
        this.platforms = [...dataPlat];

        
        this.gamesSearch = this.games
      });
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.getList()
  }

}
