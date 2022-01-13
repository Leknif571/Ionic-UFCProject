import { Component, OnInit } from '@angular/core';
import { CombattantService } from '../combattant/combattant.service';

@Component({
  selector: 'app-combattant-list',
  templateUrl: './combattant-list.page.html',
  styleUrls: ['./combattant-list.page.scss'],
})
export class CombattantListPage implements OnInit {
  combattants!: any;

  constructor(
    private Combattant: CombattantService
    ) { 
    
  }

  ngOnInit() {
    this.Combattant.getAllCombattants().subscribe((data:any) => {
      this.combattants = data;
    })
  }

}
