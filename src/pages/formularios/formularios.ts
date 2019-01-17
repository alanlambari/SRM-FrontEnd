import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormularioService } from '../../services/domain/formulario.service';
import { FormularioDTO } from '../../models/FormularioDTO';



@IonicPage()
@Component({
  selector: 'page-formularios',
  templateUrl: 'formularios.html',
})
export class FormulariosPage {

  items: FormularioDTO[];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public formularioService: FormularioService) {
  }

  ionViewDidLoad() {
    this.formularioService.findAll()
        .subscribe(resposta => {this.items = resposta;
         },
        error => {
          console.log(error);
        });
  }

  excluir(id: string){
    this.formularioService.excluir(id)
      .subscribe(resposta => {
        console.log(resposta);
        this.navCtrl.setRoot('FormulariosPage');
        }  
      );
  }

  voltar(){
    this.navCtrl.setRoot('HomePage');
  }
      

  

}
