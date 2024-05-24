import { iJsonContent } from './Models/i-json-content';
import { Injectable } from '@angular/core';
import { iPost } from './Models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {



  constructor() {
    this.getPosts().then(()=>{

      let firstPost = this.getFirstPost()

      if(firstPost){
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()

      this.allActives = this.getAllActive();
      this.allInactives = this.getAllInactive();



    })
  }

  postsArr:iPost[] = [];
  firstPost!:iPost;
  randomPosts:iPost[] = [];
  allActives:iPost[] = [];
  allInactives:iPost[] = [];


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
  getAllActive(): iPost[] {
    const attivi = this.postsArr.filter(p => p.active);
    console.log(attivi);
    return attivi;
  }

  getAllInactive(): iPost[] {
    const nonattivi = this.postsArr.filter(p => !p.active);
    console.log(nonattivi);
    return nonattivi;
  }


}
