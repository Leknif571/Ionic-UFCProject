import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Combattant } from 'src/app/models/combattant.model';
import { CombattantService } from 'src/app/combattant/combattant.service';

@Component({
  selector: 'app-combattant-new',
  templateUrl: './combattant-new.page.html',
  styleUrls: ['./combattant-new.page.scss'],
})
export class CombattantNewPage implements OnInit {
  public combattant!: Combattant;
  constructor(
    private Combattant : CombattantService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.combattant = new Combattant();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau combattant enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/combattants']);
      }, 2000);
    });
  }


  add() {
    this.Combattant.saveNewCombattant(this.combattant).subscribe(() => {
      this.combattant = new Combattant();
      this.presentToast();
    })
  }

}
