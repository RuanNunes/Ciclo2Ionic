import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

const dados = [];


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  navigateToOtherPage(): void {
      this.navCtrl.navigateRoot('#');
  }

}


