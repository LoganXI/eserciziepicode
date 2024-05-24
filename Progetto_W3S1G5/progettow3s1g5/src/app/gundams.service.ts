import { Injectable } from '@angular/core';
import { iGundam } from './models/i-gundam';

@Injectable({
  providedIn: 'root'
})
export class GundamsService {

  gundArr:iGundam[]=[];

  constructor() {
    this.getGundams().then(() => {
      this.getRandomGunds()
    });


  }


  async getGundams(){
    const response = await fetch('../../../assets/db.json')
    const gund = <iGundam[]>await response.json()
    this.gundArr = gund;
  }
  getRandomGunds(): iGundam[] {
    const shuffled = [...this.gundArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  getAllLogos(): iGundam[] {
    const seenBrands = new Set<string>();
    const uniqueCars: iGundam[] = [];

    for (const gund of this.gundArr) {
      if (!seenBrands.has(gund.brand)) {
        seenBrands.add(gund.brand);
        uniqueCars.push(gund);
      }
    }

    return uniqueCars;
  }

  getGundamFaction(brand:string):iGundam[]{
    console.log(brand);

    return this.gundArr.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  }
}
