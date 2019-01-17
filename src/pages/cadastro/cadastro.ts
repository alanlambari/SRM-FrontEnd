import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormularioService } from '../../services/domain/formulario.service';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public formularioService: FormularioService,
    public alertCtrl: AlertController) {

    this.formGroup = formBuilder.group({
        nomeCliente: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        limiteCredito: ['', [Validators.required, Validators.pattern(`^[0-9]*$`)]],
        risco: ['', [Validators.required]]
      })
  }

  cadastrar() {
    this.formularioService.cadastrar(this.formGroup.value)
        .subscribe(resposta => {
          this.showInsertOk();
        },
        error => {});
  }


  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  voltar(){
    this.navCtrl.setRoot('HomePage');
  }



}
