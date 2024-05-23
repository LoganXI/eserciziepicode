import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {

  inactivePostsArr:iPost[] = []
  constructor(
    private postsSvc:PostsService
  ){}

  ngOnInit(){

    this.inactivePostsArr = this.postsSvc.getAllInactive();

  }
}
