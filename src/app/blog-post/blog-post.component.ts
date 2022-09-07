import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfullService } from '../services/contentfull.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {


  constructor(private route:ActivatedRoute, private contentfullService:ContentfullService) { }

  bloPosts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id= params['id'];
        this.bloPosts$= this.contentfullService.getEntryById(id);
        
      }
    )


  }

}
