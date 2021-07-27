import { Component } from '@angular/core';

import { FavoriteChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet: any = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  post: any = {
    title: "Title",
    isFavorite: false,
  };
  title: string = '';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log(eventArgs);
  }
}