import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService, Posts } from './api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  obtainedPost: Posts[] = []; //to store all the received posts
  pageSlice!: Posts[]; //to store only the required number of posts to be displayed

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData() {
    this.service.getData().subscribe((data: any) => {
      this.obtainedPost = data;
      this.pageSlice = this.obtainedPost.slice(0, 5); //To initially store 5 items
    });
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.obtainedPost.length) {
      endIndex = this.obtainedPost.length;
    }
    this.pageSlice = this.obtainedPost.slice(startIndex, endIndex);
  }
}
