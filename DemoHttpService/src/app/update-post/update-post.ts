import { Component, OnInit, signal } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Post } from '../models/Post';
import { PostService } from '../services/post-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  imports: [FormsModule],
  templateUrl: './update-post.html',
  styleUrl: './update-post.css',
})
export class UpdatePost implements OnInit {

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {}

  id: number = 0;
  // userId: number = 0;
  // title: string = '';
  // body: string = '';

  //posts = signal<Post[]>([])
  post = signal<Post>({id:0, userId:0, title:'', body:''});

  ngOnInit(): void {
    // Initialize the component
    //const postId = sessionStorage.getItem('postId');
    // const postId = null;
    // this.id = postId ? JSON.parse(postId) : 0;
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.id= Number(this.route.snapshot.params['id']);
    this.postService.getPost(this.id).subscribe((post) => {
      this.post.set(post);
      // this.userId = post?.userId ?? 0;
      // this.title = post?.title ?? '';
      // this.body = post?.body ?? '';
    });
  };

  updatePost(): void {
    this.postService.updatePost(this.id, {
      id: this.id,
      userId: this.post().userId,
      title: this.post().title,
      body: this.post().body
    }).subscribe();
    this.router.navigate(['/view']);
  }
}
