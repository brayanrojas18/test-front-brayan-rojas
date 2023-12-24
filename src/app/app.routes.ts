import { Routes } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { GamesDetailComponent } from './pages/games-detail/games-detail.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Games',
        component: GamesComponent
    },
    {
        path: 'games/:id',
        title: 'Games Details',
        component: GamesDetailComponent
    }
];
