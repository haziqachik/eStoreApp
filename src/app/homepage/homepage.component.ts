import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  post: any = [];
  constructor(private postService: PostService) { 
    this.postService.getPost().subscribe(post => {
      this.post = post;
    })
  }

  ngOnInit() {
  }
}
