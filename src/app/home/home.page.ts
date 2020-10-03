import { Component, NgModule } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const games = ['Pokémon Yellow', 'Pokémon Gold', 'The Legend of Zelda', 'Pac-Man', 'Super Mario Delux']

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('../pages/timeline/timeline.module').then(m => m.TimelinePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public toastController: ToastController ) {}
      showToast() {
        
        this.toastController.create({
          header: 'Hoorray!',
          message: `Você escolheu Pokémon Yellow`,
          position: 'bottom',
          cssClass: 'my-custom-class',
          buttons: [
              {
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Close clicked');
              }
            }
          ]
        }).then((obj) => {
          obj.present();
        });
      }

      showToast2() {
        
        this.toastController.create({
          header: 'Hoorray!',
          message: `Você escolheu Pokémon Gold`,
          position: 'bottom',
          cssClass: 'my-custom-class',
          buttons: [
              {
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Close clicked');
              }
            }
          ]
        }).then((obj) => {
          obj.present();
        });
      }

      showToast3() {
        
        this.toastController.create({
          header: 'Hoorray!',
          message: `Você escolheu The Legend of Zelda`,
          position: 'bottom',
          cssClass: 'my-custom-class',
          buttons: [
              {
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Close clicked');
              }
            }
          ]
        }).then((obj) => {
          obj.present();
        });
      }

      showToast4() {
        
        this.toastController.create({
          header: 'Hoorray!',
          message: `Você escolheu The Legend of Zelda`,
          position: 'bottom',
          cssClass: 'my-custom-class',
          buttons: [
              {
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Close clicked');
              }
            }
          ]
        }).then((obj) => {
          obj.present();
        });
      }

      showToast5() {
        
        this.toastController.create({
          header: 'Hoorray!',
          message: `Você escolheu Super Mario Deluxe`,
          position: 'bottom',
          cssClass: 'my-custom-class',
          buttons: [
              {
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Close clicked');
              }
            }
          ]
        }).then((obj) => {
          obj.present();
        });
      }

      Cart() {
        
        this.toastController.create({
          header: '',
          message: `Para o carrinho de compras!`,
          position: 'bottom',
          cssClass: 'my-custom-class',
          buttons: [
              {
              side: 'end',
              text: 'Close',
              role: 'cancel',
              handler: () => {
                console.log('Close clicked');
              }
            }
          ]
        }).then((obj) => {
          obj.present();
        });
      }
}


