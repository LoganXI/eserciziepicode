import { iJsonContent } from './Models/i-json-content';
import { Injectable } from '@angular/core';
import { iPost } from './Models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postArr:iPost[] = [];

  constructor() {
    this.getPosts().then(()=>{

      let firstPost = this.getFirstPost()

      if(firstPost){
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()

    })
  }

  postsArr:iPost[] = [];
  firstPost!:iPost;
  randomPosts:iPost[] = [];



  async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <iJsonContent> await response.json()

      this.postsArr = posts.posts;
  }

  getFirstPost(){
    return this.postsArr.shift()
  }

  getAll(): iPost[] {
    return this.postsArr;
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }
}
