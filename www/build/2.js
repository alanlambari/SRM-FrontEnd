webpackJsonp([2],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_formulario_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, formBuilder, formularioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.formularioService = formularioService;
        this.alertCtrl = alertCtrl;
        this.formGroup = formBuilder.group({
            nomeCliente: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            limiteCredito: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[0-9]*$")]],
            risco: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    CadastroPage.prototype.cadastrar = function () {
        var _this = this;
        this.formularioService.cadastrar(this.formGroup.value)
            .subscribe(function (resposta) {
            _this.showInsertOk();
        }, function (error) { });
    };
    CadastroPage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            message: 'Cadastro efetuado com sucesso',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    CadastroPage.prototype.voltar = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\alanl\Documents\workspace-sts-3.9.4.RELEASE\SRM\FrontSRM\src\pages\cadastro\cadastro.html"*/'<ion-header>\n    <ion-navbar>\n     <img src="assets/imgs/logoSRM.png" alt="logo">\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <ion-title>Cadastro</ion-title><br><br>\n    <form [formGroup]="formGroup" (ngSubmit)="cadastrar(); $event.preventDefault()">\n      <ion-item>\n        <ion-label stacked>Nome do Cliente*</ion-label>\n        <ion-input formControlName="nomeCliente" type="text"></ion-input>\n      </ion-item>\n      <p class="danger" *ngIf="formGroup.controls.nomeCliente.dirty && formGroup.controls.nomeCliente.errors" margin-left>Valor inválido</p>\n      \n      <ion-item>\n        <ion-label stacked>Limite de Crédito*</ion-label>\n        <ion-input formControlName="limiteCredito" type="text"></ion-input>\n      </ion-item>\n      <p class="danger" *ngIf="formGroup.controls.limiteCredito.dirty && formGroup.controls.limiteCredito.errors" margin-left>Valor inválido</p>\n\n      <ion-item>\n          <ion-label stacked>Risco*</ion-label>\n          <ion-select formControlName="risco">\n            \n            <ion-option value="1">A</ion-option>\n            <ion-option value="2">B</ion-option>\n            <ion-option value="3">C</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <br><br><br>\n      \n        <button ion-button block type="submit" [disabled]="formGroup.invalid">Cadastrar</button>\n        <button  block outline ion-button (click)="voltar()">Voltar</button>\n\n    </form>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\alanl\Documents\workspace-sts-3.9.4.RELEASE\SRM\FrontSRM\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_formulario_service__["a" /* FormularioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ })

});
//# sourceMappingURL=2.js.map