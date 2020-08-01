import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
