(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout\r\n{\r\n   background: linear-gradient(white, #D3D8E8);\r\n    padding: 20px;\r\n}\r\n\r\n.container\r\n{\r\n    display:flex;\r\n    width: 90%;\r\n    height: auto;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!doctype html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>facebook</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <app-blue-navbar></app-blue-navbar>\n    <div class=\"layout\">\n      <div class=\"container\">\n        <app-left-content></app-left-content>\n        <app-right-content></app-right-content>\n      </div>\n    </div>\n  \n        <!-- <app-todos [tasks]=todos></app-todos> -->\n\n\n    \n\n\n\n  <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\" integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n  <app-footer></app-footer>\n</body>\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Nagarro";
        this.count = 0;
        this.todos = ['portfolio', 'Homework', 'Classwork', 'Mywork'];
    }
    AppComponent.prototype.Counter = function () {
        this.count++;
    };
    AppComponent.prototype.DCounter = function () {
        this.count--;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blue_navbar_blue_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blue-navbar/blue-navbar.component */ "./src/app/blue-navbar/blue-navbar.component.ts");
/* harmony import */ var _left_content_left_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left-content/left-content.component */ "./src/app/left-content/left-content.component.ts");
/* harmony import */ var _right_content_right_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-content/right-content.component */ "./src/app/right-content/right-content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _blue_navbar_blue_navbar_component__WEBPACK_IMPORTED_MODULE_4__["BlueNavbarComponent"],
                _left_content_left_content_component__WEBPACK_IMPORTED_MODULE_5__["LeftContentComponent"],
                _right_content_right_content_component__WEBPACK_IMPORTED_MODULE_6__["RightContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"] // view classes that are available to the module
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] // component that you want to bootstrap
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blue-navbar/blue-navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blue-navbar/blue-navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-navbar\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n    display: flex;\r\n    background-color: #3F5C9A;\r\n}\r\n\r\n.padding-0{\r\n    padding-right:0;\r\n    padding-left:3px;\r\n}\r\n\r\n.fblogo\r\n{\r\n    width:60%;\r\n    margin-left: 100px;\r\n    padding:10px;\r\n}\r\n\r\n.logo\r\n{\r\n    width:168px;\r\n    height:34px;\r\n    margin-top:9px;\r\n    background-position: 0 0;\r\n}\r\n\r\n.logo1\r\n{\r\n    background :url(\"https://www.facebook.com/rsrc.php/v3/yb/r/KFxJso1gpuk.png\");\r\n    background-size: 170px 80px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.top-navbar .login\r\n{\r\n    display:inline;\r\n    align-content: center;\r\n    color:white;\r\n    padding:10px;\r\n    font-size: 12px;\r\n}\r\n\r\n.forgetbtn \r\n{\r\n    color:rgb(159, 173, 238);\r\n}\r\n\r\n.login .form-row input[type=\"text\"],.login .form-row input[type=\"password\"]\r\n{\r\n    margin-top: 0%;\r\n    color:black\r\n}\r\n\r\n#loginbtn\r\n{\r\n    background-color: #4267b2;\r\n    border:0.5px solid black;\r\n    margin-top: 18px;\r\n}\r\n\r\n.logintxt\r\n{\r\n    height:20px;\r\n    width:100%;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/blue-navbar/blue-navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/blue-navbar/blue-navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-navbar\">\n  <div class=\"fblogo\">\n  <div class=\"logo logo1\">\n\n    \n  </div></div>\n  <div class=\"login\">\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col-md-4 padding-0\">\n          <span>Email or phone</span>\n          <input type=\"text\" class=\"logintxt\">\n        </div>\n        <div class=\"col-md-4 padding-0\">\n            <span>Password</span>\n            <input type=\"password\" class=\"logintxt\">\n            <a href=\"#\" class=\"forgetbtn\">Forgotten Account?</a>\n      </div>\n      <div class=\"col-md-3 padding-0\" >\n          <input type=\"button\" value=\"Log In\" id=\"loginbtn\">\n    </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blue-navbar/blue-navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blue-navbar/blue-navbar.component.ts ***!
  \******************************************************/
/*! exports provided: BlueNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueNavbarComponent", function() { return BlueNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlueNavbarComponent = /** @class */ (function () {
    function BlueNavbarComponent() {
    }
    BlueNavbarComponent.prototype.ngOnInit = function () {
    };
    BlueNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blue-navbar',
            template: __webpack_require__(/*! ./blue-navbar.component.html */ "./src/app/blue-navbar/blue-navbar.component.html"),
            styles: [__webpack_require__(/*! ./blue-navbar.component.css */ "./src/app/blue-navbar/blue-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlueNavbarComponent);
    return BlueNavbarComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uiList1\r\n{\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size:13px;\r\n    margin:0\r\n}\r\n.uiList1 li{\r\n    margin: 5px;\r\n    float:left;\r\n}\r\n.uiList2 \r\n{\r\n    list-style-type: none;\r\n    font-size:13px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin:0;\r\n}\r\n.uiList2 li{\r\n    margin: 5px;\r\n    float: left;\r\n}\r\n#contentCurve\r\n{\r\n    width:90%;\r\n    height:0.5px;\r\n    margin:10px;\r\n    background-color: grey;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageFooter\" data-referrer=\"page_footer\">\n  <ul class=\"uiList1\">\n    <li>English (UK)</li>\n    <li><a href=\"https://hi-in.facebook.com/\" title=\"Hindi\">हिन्दी</a></li>\n    <li><a href=\"https://pa-in.facebook.com/\" title=\"Punjabi\">ਪੰਜਾਬੀ</a></li>\n    <li><a href=\"https://ur-pk.facebook.com/\" title=\"Urdu\">اردو</a></li>\n    <li><a href=\"https://ta-in.facebook.com/\" title=\"Tamil\">தமிழ்</a></li>\n    <li><a href=\"https://bn-in.facebook.com/\" title=\"Bengali\">বাংলা</a></li>\n    <li><a href=\"https://mr-in.facebook.com/\" title=\"Marathi\">मराठी</a></li><li><a href=\"https://te-in.facebook.com/\"  title=\"Telugu\">తెలుగు</a></li>\n    <li><a href=\"https://gu-in.facebook.com/\" title=\"Gujarati\">ગુજરાતી</a></li>\n    <li><a href=\"https://kn-in.facebook.com/\" title=\"Kannada\">ಕನ್ನಡ</a></li>\n    <li><a  href=\"https://ml-in.facebook.com/\"  title=\"Malayalam\">മലയാളം</a></li>\n    <li><a role=\"button\" rel=\"dialog\" ajaxify=\"/settings/language/language/?uri=https%3A%2F%2Fml-in.facebook.com%2F&amp;source=www_list_selector_more\" href=\"#\" title=\"Show more languages\">\n      </a></li></ul><br>\n    <div id=\"contentCurve\"></div>\n      <ul class=\"uiList2\">\n      <li><a href=\"#\" title=\"Sign up for Facebook\">Sign Up</a></li>\n      <li><a href=\"/login/\" title=\"Log in to Facebook\">Log In</a></li>\n      <li><a href=\"https://messenger.com/\" title=\"Check out Messenger.\">Messenger</a></li>\n      <li><a href=\"/lite/\" title=\"Facebook Lite for Android.\">Facebook Lite</a></li>\n      <li><a href=\"/mobile/?ref=pf\" title=\"Check out Facebook Mobile.\">Mobile</a></li>\n      <li><a href=\"/find-friends?ref=pf\" title=\"Find anyone on the web.\">Find Friends</a></li>\n      <li><a href=\"/directory/people/\" title=\"Browse our people directory.\">People</a></li><li><a href=\"/directory/pages/\" title=\"Browse our Pages directory.\">Pages</a></li>\n      <li><a href=\"/directory/videos/interests/\" title=\"Browse our video interests directory.\">Video interests</a></li>\n      <li><a href=\"/places/\" title=\"Check out popular places on Facebook.\">Places</a></li>\n      <li><a href=\"/games/\" title=\"Check out Facebook games.\">Games</a></li>\n      <li><a href=\"/directory/places/\" title=\"Browse our places directory.\">Locations</a></li>\n      <li><a href=\"/directory/marketplace/\" title=\"Browse our Marketplace product directory.\">Marketplace</a></li>\n      <li><a href=\"/directory/groups/\" title=\"Browse our Groups directory.\">Groups</a></li>\n      <li><a href=\"#\" title=\"Take a look at Instagram\" target=\"_blank\" rel=\"noopener nofollow\" data-lynx-mode=\"asynclazy\">Instagram</a></li><li><a href=\"/local/lists/245019872666104/\" title=\"Browse our Local Lists directory.\">Local</a></li><li><a href=\"/facebook\" accesskey=\"8\" title=\"Read our blog, discover the resource centre and find job opportunities.\">About</a></li><li><a href=\"/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;extra_1=auto\" title=\"Advertise on Facebook\">Create ad</a></li><li><a href=\"/pages/create/?ref_type=sitefooter\" title=\"Create a Page\">Create Page</a></li><li><a href=\"https://developers.facebook.com/?ref=pf\" title=\"Develop on our platform.\">Developers</a></li><li><a href=\"/careers/?ref=pf\" title=\"Make your next career move to our brilliant company.\">Careers</a></li><li><a data-nocookies=\"1\" href=\"/privacy/explanation\" title=\"Learn about your privacy and Facebook.\">Privacy</a></li><li><a href=\"/policies/cookies/\" title=\"Learn about cookies and Facebook.\" data-nocookies=\"1\">Cookies</a></li><li><a class=\"_41ug\" data-nocookies=\"1\" href=\"https://www.facebook.com/help/568137493302217\" title=\"Learn about AdChoices.\">AdChoices<i class=\"img sp_YJ9JsmA-CQQ_1_5x sx_6e4d3d\"></i></a></li><li><a data-nocookies=\"1\" href=\"/policies?ref=pf\" accesskey=\"9\" title=\"Review our terms and policies.\">Terms</a></li><li><a href=\"https://www.facebook.com/help/2687943754764396\">Account security</a></li><li><a href=\"https://www.facebook.com/help/www/1573156092981768/\">Login help</a></li><li><a href=\"/help/?ref=pf\" accesskey=\"0\" title=\"Visit our Help Centre.\">Help</a></li><li><a accesskey=\"6\" class=\"accessible_elem\" href=\"/settings\" title=\"View and edit your Facebook settings.\">Settings</a></li><li><a accesskey=\"7\" class=\"accessible_elem\" href=\"/allactivity?privacy_source=activity_log_top_menu\" title=\"View your activity log\">Activity log</a></li>\n  </ul>\n    <div class=\"copyright\"><div><span> Facebook © 2018</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/left-content/left-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/left-content/left-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .left_content\r\n{\r\n   width: 40%; \r\n}\r\nh4\r\n{\r\n    font-weight: bolder;\r\n}"

/***/ }),

/***/ "./src/app/left-content/left-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/left-content/left-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left_content\">\n    <h4>Facebook helps you connect and share with the people in your life.</h4>\n    <img class=\"img\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png\" alt=\"\">\n  </div>"

/***/ }),

/***/ "./src/app/left-content/left-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/left-content/left-content.component.ts ***!
  \********************************************************/
/*! exports provided: LeftContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftContentComponent", function() { return LeftContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftContentComponent = /** @class */ (function () {
    function LeftContentComponent() {
    }
    LeftContentComponent.prototype.ngOnInit = function () {
    };
    LeftContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-content',
            template: __webpack_require__(/*! ./left-content.component.html */ "./src/app/left-content/left-content.component.html"),
            styles: [__webpack_require__(/*! ./left-content.component.css */ "./src/app/left-content/left-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftContentComponent);
    return LeftContentComponent;
}());



/***/ }),

/***/ "./src/app/right-content/right-content.component.css":
/*!***********************************************************!*\
  !*** ./src/app/right-content/right-content.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .right_content\r\n{\r\n    float:right;\r\n    width: 60%;\r\n\r\n}\r\n.right_content\r\n{\r\n    margin-left:50px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n\r\n}\r\n.right_content h1\r\n{\r\n    margin:0;\r\n    font-weight: bold;\r\n\r\n}\r\n.right_content h3\r\n{\r\n    font-weight: normal;\r\n\r\n}\r\n.form-row input[type=\"text\"]\r\n{\r\n    font-size:15px;\r\n    margin:5px;\r\n    font-weight: normal;\r\n    height:40px;\r\n}\r\n.padding-0{\r\n    padding-right:0;\r\n    padding-left:0;\r\n}\r\n.form-row input::-webkit-input-placeholder\r\n{\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n}\r\n.form-row input::-ms-input-placeholder\r\n{\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n}\r\n.form-row input::placeholder\r\n{\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n}\r\n.form-row input[type=\"radio\"]\r\n{\r\n    margin-top:20px;\r\n    margin-bottom: 10px;\r\n    padding:0px;\r\n    font-size: 20px;\r\n\r\n}\r\n.form-check-label\r\n{\r\n    font-weight:normal;\r\n    font-size:15px;\r\n\r\n}\r\n#birthday-help\r\n{\r\n    font-size:10px;\r\n    display:inline;\r\n}\r\n#descr\r\n{\r\n    margin:10px; \r\n    font-size: 10px;\r\n}\r\n.form-row button\r\n{\r\n    font-weight: bolder;\r\n    font-size:18px;\r\n    margin: 15px;\r\n    width: 70%;\r\n    height: 40px;\r\n    background: linear-gradient(#67ae55, #578843);\r\n    background-color: #69a74e;\r\n    box-shadow: inset 0 1px 1px #a4e388;\r\n    border-color: #3b6e22 #3b6e22 #2c5115;\r\n\r\n}\r\n#day,#year,#month\r\n{\r\n    height: 30px;\r\n}\r\n#radiobtn\r\n{\r\n    margin:0;\r\n}"

/***/ }),

/***/ "./src/app/right-content/right-content.component.html":
/*!************************************************************!*\
  !*** ./src/app/right-content/right-content.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right_content\">\n    <h1>Create an Account</h1>\n    <h4>It's free and always will be.</h4>\n    <form>\n        <div class=\"form-row\">\n          <div class=\"col-md-4 padding-0\">\n            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"First name\">\n          </div>\n          <div class=\"col-md-4 padding-0\">\n            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Last Name\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"col-md-8 padding-0\">\n                <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Mobile number or email address\">\n              </div>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"col-md-8 padding-0\">\n                <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"New password\">\n              </div>\n        </div>\n      <div class=\"form-row\">\n      <div class=\"col-md-12\">\n      <h4>Birthday</h4>\n      </div>\n      <div class=\"form-row\">\n          <div class=\"col-md-5\">\n        <span data-type=\"selectors\" data-name=\"birthday_wrapper\"><span>\n        <select aria-label=\"Day\" name=\"birthday_day\" id=\"day\" title=\"Day\">\n          <option value=\"0\">Day</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\" selected=\"1\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option></select><select aria-label=\"Month\" name=\"birthday_month\" id=\"month\" title=\"Month\" class=\"_5dba\"><option value=\"0\">Month</option><option value=\"1\">Jan</option><option value=\"2\">Feb</option><option value=\"3\">Mar</option><option value=\"4\">Apr</option><option value=\"5\">May</option><option value=\"6\">Jun</option><option value=\"7\">Jul</option><option value=\"8\">Aug</option><option value=\"9\">Sept</option><option value=\"10\" selected=\"1\">Oct</option><option value=\"11\">Nov</option><option value=\"12\">Dec</option></select>\n          <select aria-label=\"Year\" name=\"birthday_year\" id=\"year\" title=\"Year\" class=\"_5dba\"><option value=\"0\">Year</option><option value=\"2018\">2018</option><option value=\"2017\">2017</option><option value=\"2016\">2016</option><option value=\"2015\">2015</option><option value=\"2014\">2014</option><option value=\"2013\">2013</option><option value=\"2012\">2012</option><option value=\"2011\">2011</option><option value=\"2010\">2010</option><option value=\"2009\">2009</option><option value=\"2008\">2008</option><option value=\"2007\">2007</option><option value=\"2006\">2006</option><option value=\"2005\">2005</option><option value=\"2004\">2004</option><option value=\"2003\">2003</option><option value=\"2002\">2002</option><option value=\"2001\">2001</option><option value=\"2000\">2000</option><option value=\"1999\">1999</option><option value=\"1998\">1998</option><option value=\"1997\">1997</option><option value=\"1996\">1996</option><option value=\"1995\">1995</option><option value=\"1994\">1994</option><option value=\"1993\" selected=\"1\">1993</option><option value=\"1992\">1992</option><option value=\"1991\">1991</option><option value=\"1990\">1990</option><option value=\"1989\">1989</option><option value=\"1988\">1988</option><option value=\"1987\">1987</option><option value=\"1986\">1986</option><option value=\"1985\">1985</option><option value=\"1984\">1984</option><option value=\"1983\">1983</option><option value=\"1982\">1982</option><option value=\"1981\">1981</option><option value=\"1980\">1980</option><option value=\"1979\">1979</option><option value=\"1978\">1978</option><option value=\"1977\">1977</option><option value=\"1976\">1976</option><option value=\"1975\">1975</option><option value=\"1974\">1974</option><option value=\"1973\">1973</option><option value=\"1972\">1972</option><option value=\"1971\">1971</option><option value=\"1970\">1970</option><option value=\"1969\">1969</option><option value=\"1968\">1968</option><option value=\"1967\">1967</option><option value=\"1966\">1966</option><option value=\"1965\">1965</option><option value=\"1964\">1964</option><option value=\"1963\">1963</option><option value=\"1962\">1962</option><option value=\"1961\">1961</option><option value=\"1960\">1960</option><option value=\"1959\">1959</option><option value=\"1958\">1958</option><option value=\"1957\">1957</option><option value=\"1956\">1956</option><option value=\"1955\">1955</option><option value=\"1954\">1954</option><option value=\"1953\">1953</option><option value=\"1952\">1952</option><option value=\"1951\">1951</option><option value=\"1950\">1950</option><option value=\"1949\">1949</option><option value=\"1948\">1948</option><option value=\"1947\">1947</option><option value=\"1946\">1946</option><option value=\"1945\">1945</option><option value=\"1944\">1944</option><option value=\"1943\">1943</option><option value=\"1942\">1942</option><option value=\"1941\">1941</option><option value=\"1940\">1940</option><option value=\"1939\">1939</option><option value=\"1938\">1938</option><option value=\"1937\">1937</option><option value=\"1936\">1936</option><option value=\"1935\">1935</option><option value=\"1934\">1934</option><option value=\"1933\">1933</option><option value=\"1932\">1932</option><option value=\"1931\">1931</option><option value=\"1930\">1930</option><option value=\"1929\">1929</option><option value=\"1928\">1928</option><option value=\"1927\">1927</option><option value=\"1926\">1926</option><option value=\"1925\">1925</option><option value=\"1924\">1924</option><option value=\"1923\">1923</option><option value=\"1922\">1922</option><option value=\"1921\">1921</option><option value=\"1920\">1920</option><option value=\"1919\">1919</option><option value=\"1918\">1918</option><option value=\"1917\">1917</option><option value=\"1916\">1916</option><option value=\"1915\">1915</option><option value=\"1914\">1914</option><option value=\"1913\">1913</option><option value=\"1912\">1912</option><option value=\"1911\">1911</option><option value=\"1910\">1910</option><option value=\"1909\">1909</option><option value=\"1908\">1908</option><option value=\"1907\">1907</option><option value=\"1906\">1906</option><option value=\"1905\">1905</option></select></span></span>\n         </div>\n         <div class=\"col-md-4\">\n         <a id=\"birthday-help\" href=\"#\" title=\"Click for more information\" role=\"button\">Why do I need to provide my date of birth?</a><i class=\"_5dbc _5k_6 img sp_n5C5Uq05yB8 sx_842229\"></i><i class=\"_5dbd _5k_7 img sp_n5C5Uq05yB8 sx_a65f7e\"></i>\n        </div></div></div>\n\n        <div class=\"form-row\" id=\"radiobtn\">\n            <div class=\"col-md-4\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                <label class=\"form-check-label\" for=\"inlineRadio1\">Female</label>\n            </div>\n            <div class=\"col-md-4\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Male</label>\n            </div>\n          </div>\n\n\n        <div class=\"form-row\" id=\"descr\">\n          <div class=\"col-md-8\">\n            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.\n        </div></div>\n\n        <div class=\"form-row\" >\n          <div class=\"col-md-7 padding-0\">\n        <button type=\"submit\" name=\"websubmit\" class=\"btn btn-success\" id=\"success\">Sign Up</button>\n            </div>\n            </div>\n\n        <div class=\"form-row\">\n          <div class=\"col-md-10\">\n              <div id=\"reg_pages_msg\" class=\"_58mk\"><a href=\"/pages/create/?ref_type=registration_form\">Create a Page</a> for a celebrity, band or business.</div>\n          </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/right-content/right-content.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/right-content/right-content.component.ts ***!
  \**********************************************************/
/*! exports provided: RightContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightContentComponent", function() { return RightContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightContentComponent = /** @class */ (function () {
    function RightContentComponent() {
    }
    RightContentComponent.prototype.ngOnInit = function () {
    };
    RightContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-content',
            template: __webpack_require__(/*! ./right-content.component.html */ "./src/app/right-content/right-content.component.html"),
            styles: [__webpack_require__(/*! ./right-content.component.css */ "./src/app/right-content/right-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RightContentComponent);
    return RightContentComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{tasks}}\n</p>\n"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
    }
    TodosComponent.prototype.ngOnInit = function () {
        console.log(this.tasks);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TodosComponent.prototype, "tasks", void 0);
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
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

 // for call browser
 // Our App
 // Production
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

module.exports = __webpack_require__(/*! C:\Users\ashishaggarwal\Desktop\Angular_Session\day7\my-dream-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map