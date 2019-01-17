webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulariosPageModule", function() { return FormulariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formularios__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormulariosPageModule = /** @class */ (function () {
    function FormulariosPageModule() {
    }
    FormulariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formularios__["a" /* FormulariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formularios__["a" /* FormulariosPage */]),
            ],
        })
    ], FormulariosPageModule);
    return FormulariosPageModule;
}());

//# sourceMappingURL=formularios.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_formulario_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormulariosPage = /** @class */ (function () {
    function FormulariosPage(navCtrl, navParams, formularioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formularioService = formularioService;
    }
    FormulariosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.formularioService.findAll()
            .subscribe(function (resposta) {
            _this.items = resposta;
        }, function (error) {
            console.log(error);
        });
    };
    FormulariosPage.prototype.excluir = function (id) {
        var _this = this;
        this.formularioService.excluir(id)
            .subscribe(function (resposta) {
            console.log(resposta);
            _this.navCtrl.setRoot('FormulariosPage');
        });
    };
    FormulariosPage.prototype.voltar = function () {
        this.navCtrl.setRoot('HomePage');
    };
    FormulariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formularios',template:/*ion-inline-start:"C:\Users\alanl\Documents\workspace-sts-3.9.4.RELEASE\SRM\FrontSRM\src\pages\formularios\formularios.html"*/'<ion-header>\n  <ion-navbar>\n   <img src="assets/imgs/logoSRM.png" alt="logo">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        <ion-list>\n            <br>\n            <ion-item *ngFor="let item of items">\n              <h2>{{item.nomeCliente}}</h2>\n              <p>Limite de Credito: {{item.limiteCredito}}   ••••   Taxa de Juros: {{item.taxaJuros}}%</p>\n              <button ion-button clear item-end (click)="excluir(item.id)" >Excluir</button>\n            </ion-item>\n          </ion-list>\n          <button style="align-content: center" block ion-button (click)="voltar()">Voltar</button>\n</ion-content>'/*ion-inline-end:"C:\Users\alanl\Documents\workspace-sts-3.9.4.RELEASE\SRM\FrontSRM\src\pages\formularios\formularios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_formulario_service__["a" /* FormularioService */]])
    ], FormulariosPage);
    return FormulariosPage;
}());

//# sourceMappingURL=formularios.js.map

/***/ })

});
//# sourceMappingURL=1.js.map