import { iGundam } from '../../models/i-gundam';
import { GundamsService } from './../../gundams.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  randGun: iGundam[] = [];
  brands: iGundam[] = [];
  constructor(private gundamsSvc: GundamsService) {}

  ngOnInit() {
    this.randGun = this.gundamsSvc.getRandomGunds();
    this.brands = this.gundamsSvc.getAllLogos();
  }
}
