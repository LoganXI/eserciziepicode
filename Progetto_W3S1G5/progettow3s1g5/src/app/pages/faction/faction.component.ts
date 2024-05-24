import { Component } from '@angular/core';
import { iGundam } from '../../models/i-gundam';
import { GundamsService } from '../../gundams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrl: './faction.component.scss'
})
export class FactionComponent {
  faction: iGundam[] = [];
  constructor(
    private gundamsSvc: GundamsService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe((params:any) => {

    this.faction= this.gundamsSvc.getGundamFaction(params.id)

    })
  }




}
