import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullService } from '../services/contentfull.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contentfullService:ContentfullService) { }

  blogPosts$ : Observable<any> | undefined; 
  ngOnInit(): void {
    this.blogPosts$ = this.contentfullService.getAllEntries()
  }

}
