import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { iJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  postsArr:iPost[] = [];
  firstPost!:iPost;
  randomPosts:iPost[] = [];

  ngOnInit(){

    this.getPosts().then(()=>{

      let firstPost = this.getFirstPost()

      if(firstPost){
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()

    })
  }

  async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <iJsonContent> await response.json()

      this.postsArr = posts.posts;
  }

  getFirstPost(){
    return this.postsArr.shift()
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }
}
