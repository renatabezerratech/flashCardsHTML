"use strict";
(self["webpackChunkflash_cards_html_client"] = self["webpackChunkflash_cards_html_client"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards/cards.component */ 1734);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'cards',
  component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_0__.CardsComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'flash_cards_html_client';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/cards.component */ 1734);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__.CardsComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1734:
/*!******************************************!*\
  !*** ./src/app/cards/cards.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsComponent: () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;



// protocolo HTTP: fazer requisições POST, PUT, DELETE e outras interações.
class CardsComponent {
  toggle() {
    this.flipped = !this.flipped;
  }
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.flipped = false;
    /****************************************************************** */
    this.arrayFrenteVersoCard = [];
    this.frente = '';
    this.verso = '';
    this.contAcerto = 0;
    this.contCards = 0;
  }
  // O HttpClient agora está disponível como 'http' dentro deste construtor
  // Construtor configura o objeto
  // Métodos do HttpClient (como get(), post(), put(), delete()) para realizar as operações de rede necessárias.
  // router é a class de navegação de página do angula. Chama o arquivo de rotas
  ngOnInit() {
    this.leiaJsonData();
  }
  leiaJsonData() {
    this.http.get('../../assets/data/cards.json').subscribe(jsonData => {
      if (jsonData != null && jsonData != undefined) {
        this.arrayFrenteVersoCard = jsonData['cards'];
        this.contCards = this.arrayFrenteVersoCard.length;
        this.populaCard();
      }
    }, error => {
      console.error('Error loading JSON data:', error);
    });
  }
  populaCard() {
    if (this.arrayFrenteVersoCard.length > 0) {
      this.frente = this.arrayFrenteVersoCard[0]['F'];
      this.verso = this.arrayFrenteVersoCard[0]['V'];
    } else {
      this.router.navigate(['']); // Navega até a home denovo
    }
  }

  certo() {
    if (this.arrayFrenteVersoCard.length > 0) {
      this.arrayFrenteVersoCard.shift(); // remove o primeiro elemento do array 
      this.populaCard(); // tô chamando a função de cima
    }

    this.contAcerto += 1; //tô incrementando a propriedade contAcerto 
    this.flipped = false;
  }
  errado() {
    if (this.arrayFrenteVersoCard.length > 0) {
      this.arrayFrenteVersoCard.push(this.arrayFrenteVersoCard[0]);
      this.arrayFrenteVersoCard.shift();
      this.populaCard();
    }
    this.flipped = false;
  }
}
_class = CardsComponent;
_class.ɵfac = function CardsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-cards"]],
  decls: 17,
  vars: 6,
  consts: [[1, "fundo"], [1, "flashcards"], [1, "flashcard", 3, "click"], [1, "front"], [1, "textoCard"], [1, "back"], [1, "buttonDiv"], [3, "click"]],
  template: function CardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label")(5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_div_click_5_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_button_click_13_listener() {
        return ctx.certo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Certo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_button_click_15_listener() {
        return ctx.errado();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Errado");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Placar: ", ctx.contAcerto, "/", ctx.contCards, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("flipped", ctx.flipped);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frente);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.verso);
    }
  },
  styles: ["@charset \"UTF-8\";\n.fundo[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(238, 255, 238);\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.flashcards[_ngcontent-%COMP%] {\n  display: block;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  width: 700px;\n  height: 400px;\n  perspective: 1000px; \n\n  cursor: pointer;\n}\n\n.flashcard[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  transform-style: preserve-3d;\n  transition: all 600ms;\n}\n\n.flashcard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 15%;\n  border: 2px solid rgb(105, 105, 105);\n}\n\n.flashcard[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background-color: rgba(92, 147, 74, 0.488);\n}\n\n.textoCard[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  padding: 5%;\n}\n\n.flashcard.flipped[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg);\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.buttonDiv[_ngcontent-%COMP%] {\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n\n}\n.buttonDiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  margin: 2%;\n  font-size: 20px;\n  cursor: pointer;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUEsRUFBQSwyQ0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7RUFFQSxxQkFBQTtBQUVKOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFFUjs7QUFDSTtFQUVJLDBCQUFBO0VBQ0ksMENBQUE7QUFFWjs7QUFDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFTjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFHQSw0REFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0FBREY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBS0E7RUFDRSx5QkFBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmRve1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI1NSwgMjM4KTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZsYXNoY2FyZHN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4OyAvKiBOZWNlc3PDg8KhcmlvIHBhcmEgbyBlZmVpdG8gZGUgcm90YcODwqfDg8KjbyAzRCAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZsYXNoY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2MDBtcztcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcclxufVxyXG5cclxuICAgIC5mbGFzaGNhcmQgZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNSU7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMTA1LCAxMDUsIDEwNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsYXNoY2FyZCAuYmFjayB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgMTQ3LCA3NCwgMC40ODgpO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0b0NhcmR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgIH1cclxuXHJcblxyXG4uZmxhc2hjYXJkLmZsaXBwZWQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG5cclxuLyogRXN0aWxvcyBwYXJhIG8gcGFyw4PCoWdyYWZvIGNvbnRlbmRvIGEgY29udGFnZW0gZGUgYWNlcnRvcyAqL1xyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4gIFxyXG4uYnV0dG9uRGl2e1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC8qIEVzdGlsb3MgcGFyYSBvcyBib3TDg8K1ZXMgKi9cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class HomeComponent {
  constructor(router) {
    this.router = router;
  }
  getStart() {
    this.router.navigate(['/cards']);
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 9,
  vars: 0,
  consts: [[1, "fundo"], [1, "centro"], [1, "buttonDiv"], [3, "click"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flash Cards HTML");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Memoriza\u00E7\u00E3o de conceitos html");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() {
        return ctx.getStart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clica aqui para come\u00E7ar!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["@charset \"UTF-8\";\n.fundo[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(202, 221, 202);\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  font-style: italic;\n}\n\n.buttonDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n\n}\n.buttonDiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  margin: 2%;\n  font-size: 20px;\n  cursor: pointer;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n}\n.buttonDiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUMsMkJBQUE7QUFDTDtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUNJO0VBQ0kseUJBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5mdW5kb3tcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMjEsIDIwMik7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5idXR0b25EaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAvKiBFc3RpbG9zIHBhcmEgb3MgYm90w4PCtWVzICovXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiAgICBcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
// ponto de entrada

 //módulo raiz da sua aplicação, onde você define todos os componentes, serviços, diretivas
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
// (Promise) caso ocorra algum erro durante a inicialização, será capturado pelo método .catch()

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map