(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<nav>\r\n    <a (click)=\"page=1\">\r\n        <span>Part 1</span><br>\r\n        <span>Find <code>QueryList</code></span><br>\r\n    </a>\r\n    <a (click)=\"page=2\">\r\n        <span>Part 2</span><br>\r\n        <span>Add Components</span><br>\r\n        <span>No <code>*ngFor</code></span><br>\r\n    </a>\r\n    <a (click)=\"page=3\">\r\n        <span>Part 3</span><br>\r\n        <span>Add Components</span><br>\r\n        <span>With <code>*ngFor</code></span><br>\r\n    </a>\r\n</nav>\r\n\r\n<big-log *ngIf=\"page==1\"></big-log>\r\n<big-edit *ngIf=\"page==2\"></big-edit>\r\n<big-edit-ngfor *ngIf=\"page==3\"></big-edit-ngfor>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"ready\">\n    <h2>I am big-edit adding components in *ngFor</h2>\n    <div>\n        <div *ngFor=\"let r of rows\" style=\"border:1px solid green\">\n            <h3>{{r.title}}</h3>\n            <div class=\"flex\">\n                <div *ngFor=\"let f of r.fields\" class=\"flex-col\">\n                    <span style=\"font-weight:bold\">{{f.displayName}}</span>\n                    <br>\n                    <span>{{item[f.propertyName]}}</span>\n                    <div #container></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/big-edit/big-edit.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/big-edit/big-edit.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"ready\">\n    <h2>I am big-edit</h2>\n    <div>\n        <div *ngFor=\"let r of rows\" style=\"border:1px solid green\">\n            <h3>{{r.title}}</h3>\n            <div class=\"flex\">\n                <div *ngFor=\"let f of r.fields\" class=\"flex-col\">\n                    <span style=\"font-weight:bold\">{{f.displayName}}</span>\n                    <br>\n                    <span>{{item[f.propertyName]}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div #bigContainer></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/big-log/big-log.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/big-log/big-log.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"ready\">\n    <h2>I am big-log - Please open the console</h2>\n    <div>\n        <div *ngFor=\"let r of rows\" style=\"border:1px solid green\">\n            <h3>{{r.title}}</h3>\n            <div class=\"flex\">\n                <div *ngFor=\"let f of r.fields\" class=\"flex-col\">\n                    <span style=\"font-weight:bold\">{{f.displayName}}</span>\n                    <br>\n                    <span>{{item[f.propertyName]}}</span>\n                    <div #container></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/ui-comp/ui-comp.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/ui-comp/ui-comp.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"border-me\" [style.background]=\"pinkMe ? 'pink' : 'blueviolet'\">\n    <select>\n        <option *ngFor=\"let x of mylist\">{{x}}</option>\n    </select>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'super-dynamics-components';
        this.page = 1;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/ui-comp/ui-comp.component */ "./src/app/comps/ui-comp/ui-comp.component.ts");
/* harmony import */ var _comps_ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/ui-comp-inherited/ui-comp-inherited.component */ "./src/app/comps/ui-comp-inherited/ui-comp-inherited.component.ts");
/* harmony import */ var _comps_big_edit_big_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/big-edit/big-edit.component */ "./src/app/comps/big-edit/big-edit.component.ts");
/* harmony import */ var _comps_big_log_big_log_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/big-log/big-log.component */ "./src/app/comps/big-log/big-log.component.ts");
/* harmony import */ var _comps_big_edit_ngfor_big_edit_ngfor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/big-edit-ngfor/big-edit-ngfor.component */ "./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _comps_ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_4__["UiCompComponent"],
                _comps_ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_5__["UiCompInheritedComponent"],
                _comps_big_edit_big_edit_component__WEBPACK_IMPORTED_MODULE_6__["BigEditComponent"],
                _comps_big_log_big_log_component__WEBPACK_IMPORTED_MODULE_7__["BigLogComponent"],
                _comps_big_edit_ngfor_big_edit_ngfor_component__WEBPACK_IMPORTED_MODULE_8__["BigEditNgforComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            entryComponents: [_comps_ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_4__["UiCompComponent"], _comps_ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_5__["UiCompInheritedComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2JpZy1lZGl0LW5nZm9yL2JpZy1lZGl0LW5nZm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.ts ***!
  \******************************************************************/
/*! exports provided: BigEditNgforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigEditNgforComponent", function() { return BigEditNgforComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-comp/ui-comp.component */ "./src/app/comps/ui-comp/ui-comp.component.ts");
/* harmony import */ var _ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui-comp-inherited/ui-comp-inherited.component */ "./src/app/comps/ui-comp-inherited/ui-comp-inherited.component.ts");





var BigEditNgforComponent = /** @class */ (function () {
    function BigEditNgforComponent(data, resolver, cdr) {
        this.data = data;
        this.resolver = resolver;
        this.cdr = cdr;
        this.ready = false;
    }
    BigEditNgforComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.data.subscribe(function (items) {
            _this.item = items[1];
            _this.amIReady();
        });
        this.data.rows.subscribe(function (rows) {
            _this.rows = rows;
            _this.amIReady();
        });
    };
    BigEditNgforComponent.prototype.amIReady = function () {
        if (this.item && this.rows) {
            this.ready = true;
            this.cdr.detectChanges();
        }
    };
    BigEditNgforComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        console.log('ngAfterViewChecked - containers', this.containers);
        if (this.ready && this.containers) {
            console.log('ngAfterViewChecked ready and container', this.containers);
            this.containers.forEach(function (c, i) {
                var f = c['_view'].context.$implicit;
                var type = i > 0 ? _ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_3__["UiCompComponent"] : _ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_4__["UiCompInheritedComponent"];
                var componentFactory = _this.resolver.resolveComponentFactory(type);
                //here 'createComponent' will launch ctor
                var componentRef = c.createComponent(componentFactory);
                var baseRef = componentRef.instance;
                console.log('UiCompComponent with ', f);
                baseRef.field = f;
            });
            this.cdr.detectChanges();
        }
    };
    BigEditNgforComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] })
    ], BigEditNgforComponent.prototype, "containers", void 0);
    BigEditNgforComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'big-edit-ngfor',
            template: __webpack_require__(/*! raw-loader!./big-edit-ngfor.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./big-edit-ngfor.component.css */ "./src/app/comps/big-edit-ngfor/big-edit-ngfor.component.css")]
        })
    ], BigEditNgforComponent);
    return BigEditNgforComponent;
}());



/***/ }),

/***/ "./src/app/comps/big-edit/big-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/comps/big-edit/big-edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2JpZy1lZGl0L2JpZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comps/big-edit/big-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/big-edit/big-edit.component.ts ***!
  \******************************************************/
/*! exports provided: BigEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigEditComponent", function() { return BigEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-comp/ui-comp.component */ "./src/app/comps/ui-comp/ui-comp.component.ts");
/* harmony import */ var _ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui-comp-inherited/ui-comp-inherited.component */ "./src/app/comps/ui-comp-inherited/ui-comp-inherited.component.ts");





var BigEditComponent = /** @class */ (function () {
    function BigEditComponent(data, resolver, cdr) {
        this.data = data;
        this.resolver = resolver;
        this.cdr = cdr;
        this.ready = false;
    }
    BigEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.data.subscribe(function (items) {
            _this.item = items[1];
            _this.amIReady();
        });
        this.data.rows.subscribe(function (rows) {
            _this.rows = rows;
            _this.amIReady();
        });
    };
    BigEditComponent.prototype.amIReady = function () {
        if (this.item && this.rows) {
            this.ready = true;
            this.cdr.detectChanges();
        }
    };
    BigEditComponent.prototype.ngAfterViewChecked = function () {
        console.log('ngAfterViewChecked - container', this.container);
        console.log('ngAfterViewChecked - _Scontainer', this._Scontainer);
        if (this.ready && this.container) {
            console.log('ngAfterViewChecked ready and container', this.container);
            this.container.clear();
            for (var i = 0; i < this.rows.length; i++) {
                var r = this.rows[i];
                for (var j = 0; j < r.fields.length; j++) {
                    var f = r.fields[j];
                    var type = i == 0 ? _ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_3__["UiCompComponent"] : _ui_comp_inherited_ui_comp_inherited_component__WEBPACK_IMPORTED_MODULE_4__["UiCompInheritedComponent"];
                    var componentFactory = this.resolver.resolveComponentFactory(type);
                    //here 'createComponent' will launch ctor
                    var componentRef = this.container.createComponent(componentFactory);
                    var baseRef = componentRef.instance;
                    console.log('UiCompComponent with ', f);
                    baseRef.field = f;
                }
            }
            this.cdr.detectChanges();
        }
    };
    BigEditComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trueStaticContainer', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] })
    ], BigEditComponent.prototype, "_Scontainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bigContainer', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] })
    ], BigEditComponent.prototype, "container", void 0);
    BigEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'big-edit',
            template: __webpack_require__(/*! raw-loader!./big-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/big-edit/big-edit.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./big-edit.component.css */ "./src/app/comps/big-edit/big-edit.component.css")]
        })
    ], BigEditComponent);
    return BigEditComponent;
}());



/***/ }),

/***/ "./src/app/comps/big-log/big-log.component.css":
/*!*****************************************************!*\
  !*** ./src/app/comps/big-log/big-log.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2JpZy1sb2cvYmlnLWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comps/big-log/big-log.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/big-log/big-log.component.ts ***!
  \****************************************************/
/*! exports provided: BigLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigLogComponent", function() { return BigLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var BigLogComponent = /** @class */ (function () {
    function BigLogComponent(data, resolver) {
        this.data = data;
        this.resolver = resolver;
        this.ready = false;
    }
    BigLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.data.subscribe(function (items) {
            _this.item = items[0];
            _this.amIReady();
        });
        this.data.rows.subscribe(function (rows) {
            _this.rows = rows;
            _this.amIReady();
        });
        this.logi('ngOnInit');
    };
    BigLogComponent.prototype.amIReady = function () {
        if (this.item && this.rows) {
            this.ready = true;
        }
    };
    BigLogComponent.prototype.logi = function (name) {
        var a = this.containers ? this.containers.toArray() : undefined;
        console.log(name, this.ready, a, this.containers);
    };
    BigLogComponent.prototype.ngAfterContentChecked = function () {
        this.logi('ngAfterContentChecked');
    };
    BigLogComponent.prototype.ngAfterContentInit = function () {
        this.logi('ngAfterContentInit');
    };
    BigLogComponent.prototype.ngAfterViewChecked = function () {
        this.logi('ngAfterViewChecked');
    };
    BigLogComponent.prototype.ngAfterViewInit = function () {
        this.logi('ngAfterViewInit');
    };
    BigLogComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] })
    ], BigLogComponent.prototype, "containers", void 0);
    BigLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'big-log',
            template: __webpack_require__(/*! raw-loader!./big-log.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/big-log/big-log.component.html"),
            styles: [__webpack_require__(/*! ./big-log.component.css */ "./src/app/comps/big-log/big-log.component.css")]
        })
    ], BigLogComponent);
    return BigLogComponent;
}());



/***/ }),

/***/ "./src/app/comps/ui-comp-inherited/ui-comp-inherited.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/comps/ui-comp-inherited/ui-comp-inherited.component.ts ***!
  \************************************************************************/
/*! exports provided: UiCompInheritedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCompInheritedComponent", function() { return UiCompInheritedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-comp/ui-comp.component */ "./src/app/comps/ui-comp/ui-comp.component.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var UiCompInheritedComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UiCompInheritedComponent, _super);
    function UiCompInheritedComponent(_data) {
        var _this = _super.call(this, _data) || this;
        _this._data = _data;
        return _this;
    }
    UiCompInheritedComponent.prototype.ngOnInit = function () {
    };
    UiCompInheritedComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    UiCompInheritedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-comp-inherited',
            template: __webpack_require__(/*! raw-loader!../ui-comp/ui-comp.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/ui-comp/ui-comp.component.html"),
            styles: [__webpack_require__(/*! ../ui-comp/ui-comp.component.css */ "./src/app/comps/ui-comp/ui-comp.component.css")]
        })
    ], UiCompInheritedComponent);
    return UiCompInheritedComponent;
}(_ui_comp_ui_comp_component__WEBPACK_IMPORTED_MODULE_2__["UiCompComponent"]));



/***/ }),

/***/ "./src/app/comps/ui-comp/ui-comp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/comps/ui-comp/ui-comp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3VpLWNvbXAvdWktY29tcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comps/ui-comp/ui-comp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/ui-comp/ui-comp.component.ts ***!
  \****************************************************/
/*! exports provided: UiCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCompComponent", function() { return UiCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var UiCompComponent = /** @class */ (function () {
    function UiCompComponent(data) {
        this.data = data;
        this.pinkMe = false;
        this.mylist = [];
    }
    UiCompComponent.prototype.ngOnInit = function () {
        console.log('UiCompComponent ngOnInit');
        this.mylist = this.data.propsValues[this.field.propertyName];
    };
    UiCompComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    UiCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-comp',
            template: __webpack_require__(/*! raw-loader!./ui-comp.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/ui-comp/ui-comp.component.html"),
            styles: [__webpack_require__(/*! ./ui-comp.component.css */ "./src/app/comps/ui-comp/ui-comp.component.css")]
        })
    ], UiCompComponent);
    return UiCompComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService() {
        this.items = [
            { name: 'jhon', age: 30, hobby: 'doe' },
            { name: 'jim', age: 35, hobby: 'does' },
            { name: 'jack', age: 31, hobby: 'do' },
            { name: 'jonny', age: 50, hobby: 'depth' },
            { name: 'joshua', age: 60, hobby: 'dip' },
            { name: 'jeremy', age: 75, hobby: 'dare' },
            { name: 'jimmy', age: 300, hobby: 'doing' },
        ];
        this.configs = [
            { title: '1st row', fields: [
                    { displayName: 'my name is', propertyName: 'airplanes' },
                    { displayName: 'my age is', propertyName: 'colors' }
                ] },
            { title: '2nd row', fields: [
                    { displayName: 'my hobby is', propertyName: 'hobbies' },
                ] }
        ];
        this.propsValues = {
            hobbies: ['eat', 'drink', 'be Happy'],
            airplanes: ['jet', 'army', 'piper'],
            colors: ['white', 'violet', 'pink'],
        };
        this.rows = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.configs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(325));
        this.data = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(585));
        this.propsValuesLists = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.propsValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(720));
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Documents\Angular\Angular 8\super-dynamics-components\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map