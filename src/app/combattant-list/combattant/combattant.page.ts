import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CombattantService } from 'src/app/combattant/combattant.service';


@Component({
  selector: 'app-combattant',
  templateUrl: './combattant.page.html',
  styleUrls: ['./combattant.page.scss'],
})
export class CombattantPage implements OnInit {
  modif!: boolean;
  combattant: any = null;
  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Combattant: CombattantService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Combattant.getById(id).subscribe((value: any) => {
      this.combattant = value;
    });
  }



  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });
  
      await alert.present();
    } else {
    this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Combattant.update(this. combattant).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Combattant.delete(id);
    this.router.navigate(['/tab/combattants'])
  }

}
