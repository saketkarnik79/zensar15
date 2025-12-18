import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  imports: [FormsModule],
  templateUrl: './add-post.html',
  styleUrl: './add-post.css',
})
export class AddPost implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic can go here
  }

  id: number = 0;
  userId: number = 0;
  title: string = '';
  body: string = '';

  addPost(){
    this.postService.addPost(
      {
        id: this.id,
        userId: this.userId,
        title: this.title,
        body: this.body
      }
    ).subscribe();
    this.router.navigate(['/view']);
  }
}
