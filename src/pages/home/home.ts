import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  login(){
    this.navCtrl.setRoot('FormulariosPage');
  }

  entrarCadastro(){
    this.navCtrl.push('CadastroPage');
  }


  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }




}
