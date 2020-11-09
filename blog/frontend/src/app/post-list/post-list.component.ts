import { Component, OnInit } from '@angular/core';
import { M3oService } from '../m3o.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  m3o: M3oService;
  posts: Object[];

  constructor(m3o: M3oService) {
    this.m3o = m3o
  }

  ngOnInit(): void {
    this.m3o.get("posts", "query", null).then(v => {
      this.posts = v["posts"]
    })
  }

}
