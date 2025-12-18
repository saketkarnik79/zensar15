import { Component, OnInit, signal } from '@angular/core';
import { Post } from '../models/Post'
import { PostService } from '../services/post-service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-posts',
  imports: [CommonModule, RouterLink],
  templateUrl: './view-posts.html',
  styleUrl: './view-posts.css',
  providers: [PostService]
})
export class ViewPosts implements OnInit {
  //posts: Post[] = [];
  posts = signal<Post[]>([]);

  constructor(private postService: PostService, private router: Router) {}
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      //console.log(posts);
      //this.posts = posts;
      this.posts.set(posts);
      //console.log(this.posts);
    });
  };

  updatePost(id:number): void {
    //sessionStorage.setItem('postId', id.toString());
    // this.router.navigate(['/update']);
    this.router.navigate([`/update/${id}`]);
  };

  deletePost(id:number): void {
    this.postService.deletePost(id).subscribe();
    this.getPosts();
  };
}
