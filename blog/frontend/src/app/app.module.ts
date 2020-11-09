import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { ExcerptPipe } from './excerpt.pipe';
import { TimeAgoExtendsPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    ExcerptPipe,
    TimeAgoExtendsPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
