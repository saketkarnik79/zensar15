import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {type Post } from '../models/Post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //return this.http.post<Post>(this.apiUrl, post, { headers });
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id:number,post: Post): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Post>(url, post);
  }

  deletePost(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}