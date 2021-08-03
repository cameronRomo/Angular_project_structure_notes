import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { IfComponent } from './if/if.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { ForComponent } from './for/for.component';
import { StyleComponent } from './style/style.component';
import { TaskComponent } from './task/task.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    IfComponent,
    SwitcherComponent,
    ForComponent,
    StyleComponent,
    TaskComponent,
    InputFormatDirective,
    CustomComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
  FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
