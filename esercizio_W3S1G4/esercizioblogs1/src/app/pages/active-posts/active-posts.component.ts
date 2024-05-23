import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { iJsonContent } from '../../Models/i-json-content';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  activePostsArr:iPost[] = []
  constructor(
    private postsSvc:PostsService
  ){}

  ngOnInit(){

    this.activePostsArr = this.postsSvc.getAllActive();

  }

}
