import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Game } from './../../models/game.model'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  @Input() game!: Game;
}
