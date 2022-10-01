import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Posts {
  id: number
  userId: number,
  title: string,
  body: string,
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
