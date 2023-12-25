import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameById } from './../../models/game.model'
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-games-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games-detail.component.html',
  styleUrl: './games-detail.component.css'
})
export class GamesDetailComponent {

  form: GameById = {} as GameById;

  constructor(private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.api.getGameId(params['id'])
        .subscribe((data) => {
          this.form = data
        })
    })
  }
}
