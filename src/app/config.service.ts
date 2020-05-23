import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Posts } from './Posts';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  public configUrl = 'https://my-json-server.typicode.com/gokulnathv/demo/posts';

  public getPosts() {
    return this.http.get<Posts>(this.configUrl); 
  }

  public addPosts(posts: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.configUrl, posts, {responseType: 'json'});
  }
}