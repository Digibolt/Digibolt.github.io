webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<h2>Boerenbridge</h2>\r\n\r\n<hr>\r\n\r\n<app-boerenbridge></app-boerenbridge>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Scores bij kaartspellen';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_speler_speler_component__ = __webpack_require__("../../../../../src/app/components/speler/speler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_boerenbridge_boerenbridge_component__ = __webpack_require__("../../../../../src/app/components/boerenbridge/boerenbridge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nieuwe_speler_nieuwe_speler_component__ = __webpack_require__("../../../../../src/app/components/nieuwe-speler/nieuwe-speler.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_speler_speler_component__["a" /* SpelerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_boerenbridge_boerenbridge_component__["a" /* BoerenbridgeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_nieuwe_speler_nieuwe_speler_component__["a" /* NieuweSpelerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/boerenbridge/boerenbridge.component.html":
/***/ (function(module, exports) {

module.exports = "<nieuwe-speler *ngIf=\"spelers.length < 5 &&  ronde == 0\" (nieuw)=\"nieuweSpeler($event)\"></nieuwe-speler>\r\n<h1 *ngIf=\"ronde == 22\">Het spel is voorbij! De winnaar is {{ scoreVolgorde[0].naam }} met een score van {{scoreVolgorde[0].score}}</h1>\r\n<div *ngIf=\"ronde != 0\" class=\"gameinfo card\">\r\n    <div class=\"card-header\">\r\n        <h4 *ngIf=\"ronde != 22\">Anantal kaarten deze ronde: {{rondeWeergave}}</h4><button *ngIf=\"ronde != 22\" class=\"btn btn-danger\" type=\"button\" (click) = \"rondeOpnieuw()\">Ronde opnieuw</button>\r\n        \r\n    </div>\r\n    <div class=\"card-block\">\r\n    <h5>Deler deze ronde: {{deler}}</h5><br>\r\n\r\n    <form *ngIf=\"spelFase == 'zeggen'\" onSubmit=\"return false;\" >\r\n            <div class= \"form-group\" [class.has-warning]=\"waarschuwing\">\r\n             <div class=\"input-group\">\r\n                <label for=\"slagenZeggen\"> Hoeveel slagen wil {{ spelers[aanDeBeurt].naam }}:</label>\r\n                <input\r\n                 id = \"slagenZeggen\"\r\n                 name = \"slagenZeggen\"\r\n                 type=\"number\"\r\n                 class=\"form-control slagenZeggen\"\r\n                 [class.form-control-warning]=\"waarschuwing\"\r\n                 [(ngModel)] = \"slagenGezegd\"\r\n                 (keyup.enter)=\"slagenZeggen()\"\r\n                 min = \"0\"\r\n                 max = \"rondeWeergave\"\r\n              />\r\n              <div  *ngIf=\"waarschuwing\" class=\"form-control-feedback\">{{ waarschuwing }}</div>\r\n              <button class=\"btn btn-primary space\" type=\"button\"  (click) =\"slagenZeggen()\">Enter</button>\r\n              <button class=\"btn btn-danger space\" type=\"button\" (click) = \"slagenOpnieuw()\">Opnieuw invullen</button>\r\n            </div>\r\n           </div>\r\n          </form>\r\n\r\n              <form *ngIf=\"spelFase == 'halen'\" onSubmit=\"return false;\" >\r\n            <div class= \"form-group\" [class.has-warning]=\"waarschuwing\">\r\n             <div class=\"input-group\">\r\n                <label for=\"slagenHalen\"> Hoeveel slagen heeft {{ spelers[aanDeBeurt].naam }} gehaald?</label>\r\n                <input\r\n                 id = \"slagenHalen\"\r\n                 name = \"slagenHalen\"\r\n                 type=\"number\"\r\n                 class=\"form-control slagenZeggen\"\r\n                 [class.form-control-warning]=\"waarschuwing\"\r\n                 [(ngModel)] = \"slagenGehaald\"\r\n                 (keyup.enter)=\"slagenHalen()\"\r\n                 min = \"0\"\r\n                 max = \"rondeWeergave\"\r\n              />\r\n              <div  *ngIf=\"waarschuwing\" class=\"form-control-feedback\">{{ waarschuwing }}</div>\r\n              <button class=\"btn btn-primary space\" type=\"button\"  (click) =\"slagenHalen()\">Enter</button>\r\n              <button class=\"btn btn-danger space\" type=\"button\" (click) = \"gehaaldOpnieuw()\">Opnieuw invullen</button>\r\n              \r\n            </div>\r\n           </div>\r\n          </form>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"speelveld\">\r\n    <speler \r\n       class=\"speler\"\r\n      *ngFor=\"let speler of spelers; let i = index\"\r\n      [naam]=\"speler.naam\"\r\n      [rondeScores]=\"speler.rondeScores\"\r\n      (verwijderd)=\"spelerVerwijderd($event)\"\r\n      [ngStyle]=\"findColor(speler.naam)\"\r\n      >\r\n    </speler>\r\n    \r\n</div>\r\n\r\n<button *ngIf=\"ronde == 0 && spelers.length > 1\" class=\"startspel btn btn-primary\" (click)=\"starten()\">Start spel</button>\r\n<br><br>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/boerenbridge/boerenbridge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".speelveld {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px; }\n\n.speler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.startspel {\n  margin-left: 10px; }\n\n.gameinfo {\n  margin: 10px; }\n\n.slagenZeggen {\n  max-width: 100px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.space {\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/boerenbridge/boerenbridge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoerenbridgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speler_speler_component__ = __webpack_require__("../../../../../src/app/components/speler/speler.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoerenbridgeComponent = (function () {
    function BoerenbridgeComponent() {
        this.ronde = 0;
        this.rondeWeergave = 0;
        this.vorigeRonde = 0;
        this.totaalAantalGehaald = 0;
        this.deler = '';
        this.spelFase = '';
        this.aanDeBeurt = 0;
        this.aantalGeweest = 0;
        this.scoreVolgorde = [];
        this.spelers = [];
    }
    BoerenbridgeComponent.prototype.nieuweSpeler = function (spelerNaam) {
        if (this.spelers.length < 5) {
            this.scoreVolgorde.push({ naam: spelerNaam, score: 0, kleur: 'black' });
            this.spelers.push(new __WEBPACK_IMPORTED_MODULE_1__speler_speler_component__["a" /* SpelerComponent */]());
            this.spelers[this.spelers.length - 1].naam = spelerNaam;
        }
        else {
            window.alert('Te weinig kaarten voor meer dan 5 spelers!');
        }
    };
    BoerenbridgeComponent.prototype.spelerVerwijderd = function (spelerNaam) {
        var teVerwijderen = this.spelers.find(function (item) { return item.naam == spelerNaam; });
        var i = this.spelers.indexOf(teVerwijderen);
        this.spelers.splice(i, 1);
    };
    BoerenbridgeComponent.prototype.starten = function () {
        this.ronde = 1;
        this.rondeWeergave = 1;
        this.spelers.forEach(function (element) {
            element.rondeScores.push({ ronde: 0, score: 0, gehaald: 0, gezegd: 0 });
        });
        var rand = this.spelers[Math.floor(Math.random() * this.spelers.length)];
        this.deler = rand.naam;
        this.volgendeSpeler(rand);
        this.spelFase = 'zeggen';
    };
    BoerenbridgeComponent.prototype.kiesKleuren = function () {
        if (this.spelers.length == 2) {
            this.scoreVolgorde[0].kleur = 'limegreen';
            this.scoreVolgorde[1].kleur = 'red';
        }
        else if (this.spelers.length == 3) {
            this.scoreVolgorde[0].kleur = 'limegreen';
            this.scoreVolgorde[1].kleur = 'gold';
            this.scoreVolgorde[2].kleur = 'red';
        }
        else if (this.spelers.length == 4) {
            this.scoreVolgorde[0].kleur = 'limegreen';
            this.scoreVolgorde[1].kleur = 'gold';
            this.scoreVolgorde[2].kleur = 'orange';
            this.scoreVolgorde[3].kleur = 'red';
        }
        else if (this.spelers.length == 5) {
            this.scoreVolgorde[0].kleur = 'limegreen';
            this.scoreVolgorde[1].kleur = 'greenyellow';
            this.scoreVolgorde[2].kleur = 'gold';
            this.scoreVolgorde[3].kleur = 'orange';
            this.scoreVolgorde[4].kleur = 'red';
        }
    };
    BoerenbridgeComponent.prototype.volgendeSpeler = function (huidigeSpeler) {
        if (this.spelers.indexOf(huidigeSpeler) + 1 == this.spelers.length) {
            this.aanDeBeurt = 0;
        }
        else {
            this.aanDeBeurt = this.spelers.indexOf(huidigeSpeler) + 1;
        }
    };
    BoerenbridgeComponent.prototype.slagenZeggen = function () {
        if (this.slagenGezegd > this.rondeWeergave || this.slagenGezegd < 0) {
            this.waarschuwing = 'Dat ga je echt niet halen!';
        }
        else if (this.aantalGeweest < this.spelers.length - 1) {
            this.slagenInvullen();
            this.aantalGeweest++;
            this.waarschuwen();
        }
        else {
            if (this.nietZeggen == this.slagenGezegd) {
            }
            else {
                this.slagenInvullen();
                this.aantalGeweest = 0;
                this.waarschuwing = null;
                this.spelFase = 'halen';
                setTimeout(function () {
                    window.alert('Speel de ronde en kom terug als je klaar bent!');
                }, 100);
            }
        }
    };
    BoerenbridgeComponent.prototype.slagenInvullen = function () {
        this.spelers[this.aanDeBeurt].rondeScores.push({ ronde: this.rondeWeergave, score: null, gezegd: this.slagenGezegd, gehaald: null });
        this.slagenGezegd = null;
        this.volgendeSpeler(this.spelers[this.aanDeBeurt]);
    };
    BoerenbridgeComponent.prototype.waarschuwen = function () {
        var _this = this;
        if (this.aantalGeweest == this.spelers.length - 1) {
            var totaal_1 = 0;
            this.spelers.forEach(function (element) {
                if (element.rondeScores[_this.ronde]) {
                    totaal_1 += +element.rondeScores[_this.ronde].gezegd;
                }
            });
            this.nietZeggen = this.rondeWeergave - totaal_1;
            if (this.nietZeggen >= 0) {
                this.waarschuwing = 'Je mag geen ' + this.nietZeggen + ' zeggen!';
            }
        }
        else {
            this.waarschuwing = null;
        }
    };
    BoerenbridgeComponent.prototype.slagenHalen = function () {
        if (this.slagenGehaald > this.rondeWeergave || this.slagenGezegd < 0) {
            this.waarschuwing = 'Weet je dat heel zeker?';
        }
        if (this.totaalAantalGehaald + +this.slagenGehaald > this.rondeWeergave) {
            this.waarschuwing = 'Zoveel kaarten zijn er niet uitgedeeld...';
        }
        else if (this.aantalGeweest < this.spelers.length - 1) {
            this.scoreBerekenen();
            this.aantalGeweest++;
            this.voorInvullen();
        }
        else {
            if ((this.totaalAantalGehaald + +this.slagenGehaald) < this.rondeWeergave) {
                this.waarschuwing = 'Zo kom je wat slagen te kort..';
            }
            else {
                this.scoreBerekenen();
                this.aantalGeweest = 0;
                this.totaalAantalGehaald = 0;
                this.waarschuwing = null;
                this.volgendeRonde();
                this.volgendeDeler();
                this.volgendeSpeler(this.spelers[this.aanDeBeurt]);
                this.maakVolgorde();
                this.spelFase = 'zeggen';
            }
        }
    };
    BoerenbridgeComponent.prototype.voorInvullen = function () {
        var _this = this;
        if (this.aantalGeweest == this.spelers.length - 1) {
            var totaal_2 = 0;
            this.spelers.forEach(function (element) {
                if (element.rondeScores[_this.ronde]) {
                    totaal_2 += +element.rondeScores[_this.ronde].gehaald;
                }
            });
            this.slagenGehaald = this.rondeWeergave - totaal_2;
        }
    };
    BoerenbridgeComponent.prototype.scoreBerekenen = function () {
        var _this = this;
        this.totaalAantalGehaald = +this.totaalAantalGehaald + +this.slagenGehaald;
        this.waarschuwing = null;
        var gehaaldeScore;
        var gezegd = +this.spelers[this.aanDeBeurt].rondeScores[this.ronde].gezegd;
        if ((this.ronde == 10 || this.ronde == 11 || this.ronde == 12)
            && (gezegd == this.slagenGehaald && gezegd == 0)) {
            gehaaldeScore = +20;
        }
        else {
            if (gezegd == this.slagenGehaald) {
                gehaaldeScore = (10 + +this.slagenGehaald);
            }
            else {
                gehaaldeScore = 0 - Math.abs(gezegd - +this.slagenGehaald);
            }
        }
        this.spelers[this.aanDeBeurt].rondeScores[this.ronde].score = this.spelers[this.aanDeBeurt].rondeScores[this.ronde - 1].score + gehaaldeScore;
        this.spelers[this.aanDeBeurt].rondeScores[this.ronde].gehaald = this.slagenGehaald;
        this.scoreVolgorde.forEach(function (element) {
            if (element.naam == _this.spelers[_this.aanDeBeurt].naam) {
                element.score = _this.spelers[_this.aanDeBeurt].rondeScores[_this.ronde].score;
            }
        });
        this.slagenGehaald = null;
        this.volgendeSpeler(this.spelers[this.aanDeBeurt]);
    };
    BoerenbridgeComponent.prototype.volgendeDeler = function () {
        var _this = this;
        var huidigeDelerI = this.spelers.indexOf(this.spelers.find(function (item) { return item.naam == _this.deler; }));
        if (huidigeDelerI + 1 == this.spelers.length) {
            this.deler = this.spelers[0].naam;
        }
        else {
            this.deler = this.spelers[+huidigeDelerI + 1].naam;
        }
    };
    BoerenbridgeComponent.prototype.volgendeRonde = function () {
        if (this.ronde < 10) {
            this.rondeWeergave++;
            this.ronde++;
        }
        else if (this.ronde == 10 || this.ronde == 11) {
            this.ronde++;
        }
        else if (this.ronde > 11 && this.ronde < 22) {
            this.rondeWeergave--;
            this.ronde++;
        }
        else {
            this.spelFase = 'klaar';
        }
    };
    BoerenbridgeComponent.prototype.maakVolgorde = function () {
        this.scoreVolgorde.sort(function (a, b) { return (b.score - a.score); });
        this.kiesKleuren();
        console.log(this.scoreVolgorde);
    };
    BoerenbridgeComponent.prototype.findColor = function (naam) {
        var styles = { 'color': 'pink' };
        this.scoreVolgorde.forEach(function (element) {
            if (naam == element.naam) {
                styles = { 'color': element.kleur };
            }
        });
        return styles;
    };
    BoerenbridgeComponent.prototype.slagenOpnieuw = function () {
        var _this = this;
        this.aantalGeweest = 0;
        this.spelers.forEach(function (element) {
            if (element.rondeScores[_this.ronde]) {
                element.rondeScores.splice(_this.ronde, 1);
            }
        });
        var huidigeDelerI = this.spelers.indexOf(this.spelers.find(function (item) { return item.naam == _this.deler; }));
        if (huidigeDelerI + 1 == this.spelers.length) {
            this.aanDeBeurt = 0;
        }
        else {
            this.aanDeBeurt = huidigeDelerI + 1;
        }
        this.waarschuwing = null;
        this.slagenGezegd = null;
    };
    BoerenbridgeComponent.prototype.gehaaldOpnieuw = function () {
        var _this = this;
        this.aantalGeweest = 0;
        this.spelers.forEach(function (element) {
            if (element.rondeScores[_this.ronde]) {
                element.rondeScores[_this.ronde].gehaald = null;
            }
        });
        var huidigeDelerI = this.spelers.indexOf(this.spelers.find(function (item) { return item.naam == _this.deler; }));
        if (huidigeDelerI + 1 == this.spelers.length) {
            this.aanDeBeurt = 0;
        }
        else {
            this.aanDeBeurt = huidigeDelerI + 1;
        }
        this.waarschuwing = null;
        this.slagenGehaald = null;
    };
    BoerenbridgeComponent.prototype.rondeOpnieuw = function () {
        var _this = this;
        this.aantalGeweest = 0;
        this.spelers.forEach(function (element) {
            if (element.rondeScores[_this.ronde]) {
                element.rondeScores.splice(_this.ronde, 1);
            }
        });
        var huidigeDelerI = this.spelers.indexOf(this.spelers.find(function (item) { return item.naam == _this.deler; }));
        if (huidigeDelerI + 1 == this.spelers.length) {
            this.aanDeBeurt = 0;
        }
        else {
            this.aanDeBeurt = huidigeDelerI + 1;
        }
        this.waarschuwing = null;
        this.slagenGezegd = null;
        this.spelFase = 'zeggen';
    };
    return BoerenbridgeComponent;
}());
BoerenbridgeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-boerenbridge',
        template: __webpack_require__("../../../../../src/app/components/boerenbridge/boerenbridge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/boerenbridge/boerenbridge.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BoerenbridgeComponent);

//# sourceMappingURL=boerenbridge.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nieuwe-speler/nieuwe-speler.component.html":
/***/ (function(module, exports) {

module.exports = "<form onSubmit=\"return false;\" class=\"nieuweSpelerForm\">\r\n  <div class= \"form-group\">\r\n   <div class=\"input-group\">\r\n      <label for=\"spelerNaam\"> Naam speler:</label>\r\n      <input\r\n       id = \"spelerNaam\"\r\n       name = \"spelerNaam\"\r\n       type=\"text\"\r\n       class=\"form-control space\"\r\n       [(ngModel)] = \"gegevenNaam\"\r\n       (keyup.enter)=\"emit()\"\r\n    />\r\n    <button class=\"btn btn-primary space\" type=\"button\"  (click) =\"emit()\">Toevoegen</button>\r\n  </div>\r\n </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/nieuwe-speler/nieuwe-speler.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 320px) {\n  .nieuweSpelerForm {\n    width: 100%; } }\n\n@media screen and (min-width: 320px) {\n  .nieuweSpelerForm {\n    width: 50%;\n    padding: 20px; } }\n\n.space {\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nieuwe-speler/nieuwe-speler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuweSpelerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NieuweSpelerComponent = (function () {
    function NieuweSpelerComponent() {
        this.nieuw = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.gegevenNaam = "";
    }
    NieuweSpelerComponent.prototype.emit = function () {
        this.nieuw.emit(this.gegevenNaam);
        this.gegevenNaam = "";
    };
    return NieuweSpelerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('nieuw'),
    __metadata("design:type", Object)
], NieuweSpelerComponent.prototype, "nieuw", void 0);
NieuweSpelerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nieuwe-speler',
        template: __webpack_require__("../../../../../src/app/components/nieuwe-speler/nieuwe-speler.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nieuwe-speler/nieuwe-speler.component.scss")]
    })
], NieuweSpelerComponent);

//# sourceMappingURL=nieuwe-speler.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/speler/speler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card spelerKaart\">\r\n  <div *ngIf=\"rondeScores.length == 0\" class=\"card-header\">\r\n      <div class=\"text-center\"><button  (click)=\"verwijderen()\" class=\"btn btn-danger\">X</button></div>\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title text-center\">{{naam}}</h4>\r\n    <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Score</th>\r\n            <th>Gezegd</th>\r\n            <th>Gehaald</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let score of rondeScores | slice:1\">\r\n            <td>{{ score.ronde }}\r\n            <td>{{ score.score }}</td>\r\n            <td>{{ score.gezegd }}</td>\r\n            <td>{{ score.gehaald }}</td>\r\n          </tr>\r\n         \r\n        </tbody>\r\n      </table>\r\n      \r\n  </div>  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/speler/speler.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spelerKaart {\n  margin: 5px;\n  font-size: 0.8em; }\n  .spelerKaart h4 {\n    font-size: 1.5em; }\n\n.card-block {\n  padding: 0.5em; }\n\nth, td {\n  padding: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/speler/speler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpelerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpelerComponent = (function () {
    function SpelerComponent() {
        this.verwijderd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.rondeScores = [];
    }
    SpelerComponent.prototype.verwijderen = function () {
        this.verwijderd.emit(this.naam);
    };
    return SpelerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('naam'),
    __metadata("design:type", String)
], SpelerComponent.prototype, "naam", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('verwijderd'),
    __metadata("design:type", Object)
], SpelerComponent.prototype, "verwijderd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('rondeScores'),
    __metadata("design:type", Array)
], SpelerComponent.prototype, "rondeScores", void 0);
SpelerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'speler',
        template: __webpack_require__("../../../../../src/app/components/speler/speler.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/speler/speler.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpelerComponent);

//# sourceMappingURL=speler.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map