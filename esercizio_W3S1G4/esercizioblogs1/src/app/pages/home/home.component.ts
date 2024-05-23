import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost[] = []

  constructor(
    private postsSvc:PostsService
  ){}

  ngOnInit(){

    this.postsArr = this.postsSvc.getAll()

  }

}
