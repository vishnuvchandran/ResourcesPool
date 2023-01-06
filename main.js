(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../modules/calendar/calendar.module": [
		"./src/app/modules/calendar/calendar.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"modules-calendar-calendar-module"
	],
	"../modules/master-data/master-data.module": [
		"./src/app/modules/master-data/master-data.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"modules-master-data-master-data-module~modules-projects-projects-module~modules-resources-resources-~52262d0f",
		"modules-master-data-master-data-module"
	],
	"../modules/permissions/permissions.module": [
		"./src/app/modules/permissions/permissions.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"modules-permissions-permissions-module"
	],
	"../modules/projects/projects.module": [
		"./src/app/modules/projects/projects.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"modules-master-data-master-data-module~modules-projects-projects-module~modules-resources-resources-~52262d0f",
		"modules-projects-projects-module"
	],
	"../modules/resources/resources.module": [
		"./src/app/modules/resources/resources.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"modules-master-data-master-data-module~modules-projects-projects-module~modules-resources-resources-~52262d0f",
		"modules-resources-resources-module"
	],
	"./private/private.module": [
		"./src/app/private/private.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"private-private-module"
	],
	"./public/public.module": [
		"./src/app/public/public.module.ts",
		"modules-calendar-calendar-module~modules-master-data-master-data-module~modules-permissions-permissi~34c7784b",
		"public-public-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/index.js");
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
    function AppComponent(router) {
        this.router = router;
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["setTheme"])('bs4');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared-services-and-components-module/shared-services-and-components-module */ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedServicesAndComponentsModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ],
            providers: [
                _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _shared_shared_services_and_components_module_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared-services-and-components-module/components/errorpage/errorpage.component */ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.ts");



var routes = [
    { path: 'home', loadChildren: './private/private.module#PrivateModule', canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'user', loadChildren: './public/public.module#PublicModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '404', component: _shared_shared_services_and_components_module_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorpageComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/shared/constants/constant.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/constants/constant.ts ***!
  \**********************************************/
/*! exports provided: BASE_URL, ApplicationConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConstant", function() { return ApplicationConstant; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].path;
var ApplicationConstant = /** @class */ (function () {
    function ApplicationConstant() {
    }
    ApplicationConstant.CLIENT_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].CLIENT_ID;
    ApplicationConstant.CLIENT_SECRET = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].CLIENT_SECRET;
    ApplicationConstant.ROLES_LABLES = {
        super_admin: 'super-admin',
        owners: 'owners',
        project_manager: 'project-manager',
        team_lead: 'team-lead',
        developer: 'developer'
    };
    ApplicationConstant.SUPER_ADMIN_ROLE_ID = 1;
    ApplicationConstant.OAUTH_URL = 'oauth/token';
    ApplicationConstant.COMMON_SERVICE = '/api/common/services';
    ApplicationConstant.ACTIVITIES = '/api/activities';
    ApplicationConstant.TECHNOLOGIES = '/api/technologies';
    ApplicationConstant.TEAMS = '/api/teams';
    ApplicationConstant.RESOURCES = '/api/resources';
    ApplicationConstant.PROJECTS = '/api/projects';
    ApplicationConstant.CALENDAR = '/api/calendar';
    ApplicationConstant.PERMISSIONS = '/api/permissions';
    ApplicationConstant.FORGOT_PASSWORD = '/api/user/forgot-password';
    ApplicationConstant.RESET_PASSWORD = '/api/user/reset';
    return ApplicationConstant;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/user/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/Directives/hasPermission.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/Directives/hasPermission.ts ***!
  \******************************************************************************************/
/*! exports provided: HasPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasPermissionDirective", function() { return HasPermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
/* harmony import */ var _services_ui_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ui.permissions.service */ "./src/app/shared/shared-services-and-components-module/services/ui.permissions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HasPermissionDirective = /** @class */ (function () {
    function HasPermissionDirective(templateRef, viewContainer, sharedDataStore, uiPermissionsService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.sharedDataStore = sharedDataStore;
        this.uiPermissionsService = uiPermissionsService;
    }
    HasPermissionDirective.prototype.ngOnInit = function () {
        this.setView();
    };
    HasPermissionDirective.prototype.setView = function () {
        if (this.uiPermissionsService.permissionCheck(this.hasPermission)) {
            // If condition is true add template to DOM
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            // Else remove template from DOM
            this.viewContainer.clear();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HasPermissionDirective.prototype, "hasPermission", void 0);
    HasPermissionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[hasPermission]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["CommonSharedDataStorageService"],
            _services_ui_permissions_service__WEBPACK_IMPORTED_MODULE_2__["UiPermissionsService"]])
    ], HasPermissionDirective);
    return HasPermissionDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #confirmationWindow=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center mb-3\">\n        <h3 class=\"mt-4\">Are you sure ?</h3>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-default ml-2\" (click)=\"decline()\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ConfirmationdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationdialogComponent", function() { return ConfirmationdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationdialogComponent = /** @class */ (function () {
    function ConfirmationdialogComponent() {
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tempData = null;
    }
    ConfirmationdialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationdialogComponent.prototype.presentConfirmationWindow = function (data) {
        if (data === void 0) { data = {}; }
        this.setTempData(data);
        this.confirmationWindow.show();
    };
    ConfirmationdialogComponent.prototype.hideConfirmationWindow = function () {
        this.setTempData(null);
        this.confirmationWindow.hide();
    };
    ConfirmationdialogComponent.prototype.decline = function () {
        this.setTempData(null);
        this.hideConfirmationWindow();
    };
    ConfirmationdialogComponent.prototype.confirm = function () {
        this.confirmed.emit(this.tempData);
        this.hideConfirmationWindow();
    };
    ConfirmationdialogComponent.prototype.setTempData = function (data) {
        this.tempData = null;
        this.tempData = data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationWindow'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], ConfirmationdialogComponent.prototype, "confirmationWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmationdialogComponent.prototype, "confirmed", void 0);
    ConfirmationdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmationdialog',
            template: __webpack_require__(/*! ./confirmationdialog.component.html */ "./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmationdialog.component.scss */ "./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationdialogComponent);
    return ConfirmationdialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"page-content\">\n    <div class=\"container text-center\">\n      <div class=\"display-1 text-muted mb-5\">\n        <i class=\"si si-exclamation\"></i> 404</div>\n      <h1 class=\"h2 mb-3\">Oops.. You just found an error page..</h1>\n      <p class=\"h4 text-muted font-weight-normal mb-7\">We are sorry but our service is currently not available&hellip;</p>\n      <a class=\"btn btn-primary\" (click)=\"buttonClick()\">\n        <i class=\"fe fe-arrow-left mr-2\"></i>Go {{sharedData.errorPageButtonType}}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent(sharedData, router) {
        this.sharedData = sharedData;
        this.router = router;
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent.prototype.buttonClick = function () {
        if (this.sharedData.errorPageButtonType === 'Back') {
            window.history.back();
        }
        else {
            this.sharedData.errorPageButtonType = 'Back';
            this.router.navigateByUrl('home');
        }
    };
    ErrorpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! ./errorpage.component.html */ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.scss */ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["CommonSharedDataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #informationdialogWindow=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center mb-3\">\n        <h4 class=\"mt-4\">{{information}}</h4>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Ok</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: InformationdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationdialogComponent", function() { return InformationdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationdialogComponent = /** @class */ (function () {
    function InformationdialogComponent() {
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tempData = null;
    }
    InformationdialogComponent.prototype.ngOnInit = function () {
    };
    InformationdialogComponent.prototype.presentInformationWindow = function (information) {
        this.setTempData(information);
        this.informationdialogWindow.show();
    };
    InformationdialogComponent.prototype.hideInformationWindow = function () {
        this.setTempData(null);
        this.informationdialogWindow.hide();
    };
    InformationdialogComponent.prototype.decline = function () {
        this.setTempData(null);
        this.hideInformationWindow();
    };
    InformationdialogComponent.prototype.confirm = function () {
        this.confirmed.emit(this.tempData);
        this.hideInformationWindow();
    };
    InformationdialogComponent.prototype.setTempData = function (data) {
        this.tempData = null;
        this.tempData = data;
        this.information = data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('informationdialogWindow'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], InformationdialogComponent.prototype, "informationdialogWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InformationdialogComponent.prototype, "information", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InformationdialogComponent.prototype, "confirmed", void 0);
    InformationdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informationdialog',
            template: __webpack_require__(/*! ./informationdialog.component.html */ "./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.html"),
            styles: [__webpack_require__(/*! ./informationdialog.component.scss */ "./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationdialogComponent);
    return InformationdialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"alertVisibility === true\" [ngClass]=\"currentAlert.class\" class=\"alert alert-success\">\n  <strong>{{currentAlert.type}}</strong>&nbsp;{{currentAlert.message}}\n</div>\n"

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/shared/shared-services-and-components-module/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notificationService) {
        this.notificationService = notificationService;
        this.alertVisibility = false;
        this.currentAlert = {};
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.gettrigerNotification().subscribe(function (res) {
            _this.buildNotificationObject(res.notification);
            _this.presentAlert();
        });
    };
    NotificationsComponent.prototype.presentAlert = function () {
        this.alertVisibility = true;
        var cur = this;
        setTimeout(function () {
            cur.alertVisibility = false;
        }, 3000);
    };
    NotificationsComponent.prototype.buildNotificationObject = function (data) {
        var switchData = data.type !== undefined ? data.type : 'info';
        switch (switchData) {
            case 'success':
                this.currentAlert['type'] = 'Success !';
                this.currentAlert['class'] = 'alert alert-success';
                break;
            case 'warning':
                this.currentAlert['type'] = 'Warning !';
                this.currentAlert['class'] = 'alert alert-warning';
                break;
            case 'danger':
                this.currentAlert['type'] = 'Error !';
                this.currentAlert['class'] = 'alert alert-danger';
                break;
            default:
                this.currentAlert['type'] = 'Information !';
                this.currentAlert['class'] = 'alert alert-info';
                break;
        }
        this.currentAlert['message'] = data.message;
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"...\">\n  <ul *ngIf=\"lastPage>1\" class=\"pagination\">\n    <li [class.disabled]=\"currentPage==1\" (click)=\"changePages(1)\" class=\"page-item\">\n      <a class=\"page-link\" tabindex=\"-1\">\n        << </a>\n    </li>\n    <li class=\"page-item\" [class.disabled]=\"currentPage==1\" (click)=\"changePages(currentPage-1)\">\n      <a class=\"page-link\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pages\" [class.disabled]=\"page.id==currentPage\" [ngClass]=\"{'disabled':page.id==currentPage,'active':page.id==currentPage}\" (click)=\"changePages(page.id)\" class=\"page-item\">\n      <a class=\"page-link\">{{page.id}}</a>\n    </li>    \n    <li [class.disabled]=\"currentPage==lastPage\" (click)=\"changePages(currentPage+1)\" class=\"page-item\">\n      <a class=\"page-link\">Next</a>\n    </li>\n    <li [class.disabled]=\"currentPage==lastPage\" (click)=\"changePages(lastPage)\" class=\"page-item\">\n      <a class=\"page-link\"> >> </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(route) {
        this.route = route;
        this.lastPage = 1;
        this.isRouter = false;
        this.currentPage = 1;
        this.pageCount = 20;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PAGE_COUNT = 10;
        this.pages = [];
    }
    PaginationComponent.prototype.ngOnInit = function () { };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.generatePages(this.currentPage, this.lastPage);
    };
    PaginationComponent.prototype.generatePages = function (current, lastPage) {
        var start = 0;
        if (current > this.pageCount / 2) {
            start = current - this.pageCount / 2;
        }
        var end = lastPage;
        if (start + this.pageCount < lastPage) {
            end = start + this.pageCount;
        }
        if (end - this.pageCount < start) {
            if (end - this.pageCount < 0) {
                start = 0;
            }
            else {
                start = end - this.pageCount;
            }
        }
        this.pages = [];
        for (var i = start + 1; i <= end; i++) {
            this.pages.push({ id: i });
        }
    };
    PaginationComponent.prototype.changePages = function (changedPage) {
        this.currentPage = changedPage;
        this.generatePages(changedPage, this.lastPage);
        this.changePage.emit(changedPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "lastPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "isRouter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/pipes/obj-iterator.pipe.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/pipes/obj-iterator.pipe.ts ***!
  \*****************************************************************************************/
/*! exports provided: ObjIteratorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjIteratorPipe", function() { return ObjIteratorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sharedfunctions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sharedfunctions.service */ "./src/app/shared/shared-services-and-components-module/services/sharedfunctions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjIteratorPipe = /** @class */ (function () {
    function ObjIteratorPipe(sharedFunctionsService) {
        this.sharedFunctionsService = sharedFunctionsService;
    }
    ObjIteratorPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        var arr = Object.keys(value).map(function (key) {
            return Object.assign({ key: key }, value[key]);
        });
        return this.sharedFunctionsService.customArraySorter(arr, 'name');
    };
    ObjIteratorPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'objIterator'
        }),
        __metadata("design:paramtypes", [_services_sharedfunctions_service__WEBPACK_IMPORTED_MODULE_1__["SharedFunctionsService"]])
    ], ObjIteratorPipe);
    return ObjIteratorPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CommonSharedDataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSharedDataStorageService", function() { return CommonSharedDataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CommonSharedDataStorageService = /** @class */ (function () {
    function CommonSharedDataStorageService() {
        this.dataModify = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataModify$ = this.dataModify.asObservable();
        this.sharedData = null;
        this.errorPageButtonType = 'Back';
    }
    CommonSharedDataStorageService.prototype.getSharedData = function () {
        return this.sharedData;
    };
    CommonSharedDataStorageService.prototype.setSharedData = function (data) {
        if (data === void 0) { data = null; }
        this.sharedData = data;
        this.dataModify.next(this.sharedData);
    };
    CommonSharedDataStorageService.prototype.getSharedDataAsObserveable = function () {
        return this.dataModify$;
    };
    CommonSharedDataStorageService.prototype.loadData = function (http) {
        return __awaiter(this, void 0, void 0, function () {
            var t, dataLoaded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = this;
                        this.http = http;
                        dataLoaded = false;
                        return [4 /*yield*/, this.fetchData(http).then(function (data) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        t.setSharedData(data['data']);
                                        dataLoaded = true;
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, dataLoaded];
                }
            });
        });
    };
    CommonSharedDataStorageService.prototype.reloadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataReloaded, t_1, http;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataReloaded = false;
                        if (!(this.http !== undefined)) return [3 /*break*/, 2];
                        t_1 = this;
                        http = this.http;
                        return [4 /*yield*/, this.fetchData(http).then(function (data) {
                                t_1.setSharedData(data['data']);
                                dataReloaded = true;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, dataReloaded];
                    case 2: return [2 /*return*/, dataReloaded];
                }
            });
        });
    };
    CommonSharedDataStorageService.prototype.fetchData = function (http) {
        var _this = this;
        var endpoint = _constants_constant__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + _constants_constant__WEBPACK_IMPORTED_MODULE_2__["ApplicationConstant"].COMMON_SERVICE;
        var t = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(endpoint).subscribe(function (data) { resolve(data); });
        });
    };
    CommonSharedDataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonSharedDataStorageService);
    return CommonSharedDataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/services/notification.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/services/notification.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notificationTriger = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.notificationTriger$ = this.notificationTriger.asObservable();
    }
    NotificationService.prototype.trigerNotification = function (notification) {
        this.notificationTriger.next({ notification: notification });
    };
    NotificationService.prototype.gettrigerNotification = function () {
        return this.notificationTriger$;
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/services/sharedfunctions.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/services/sharedfunctions.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: SharedFunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedFunctionsService", function() { return SharedFunctionsService; });
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

var SharedFunctionsService = /** @class */ (function () {
    function SharedFunctionsService() {
    }
    SharedFunctionsService.prototype.customArraySorter = function (sortArray, sortKey) {
        return sortArray.sort(function (a, b) {
            var textA = a[sortKey].toUpperCase();
            var textB = b[sortKey].toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
    };
    SharedFunctionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedFunctionsService);
    return SharedFunctionsService;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/services/ui.permissions.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/services/ui.permissions.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: UiPermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiPermissionsService", function() { return UiPermissionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiPermissionsService = /** @class */ (function () {
    function UiPermissionsService(sharedDataStore) {
        this.sharedDataStore = sharedDataStore;
        this.customizedItems = ['master-menu'];
        this.sharedData = this.sharedDataStore.getSharedData();
    }
    UiPermissionsService.prototype.permissionCheck = function (permission) {
        var _this = this;
        var rerurnRes = false;
        if (!!this.sharedData && !!this.sharedData['permissions']) {
            var permissionArr = permission.split('|');
            permissionArr.forEach(function (perm) {
                if (!rerurnRes) {
                    rerurnRes = (_this.customizedItems.indexOf(perm) !== -1) ? _this.checkCustomizedItem(perm) :
                        (_this.sharedData.permissions.indexOf(perm) !== -1);
                }
            });
            return rerurnRes;
        }
        return false;
    };
    UiPermissionsService.prototype.checkCustomizedItem = function (item) {
        var allowed = true;
        switch (item) {
            case 'master-menu':
                allowed = this.checkMasterMenuAllowed();
                break;
            default:
                allowed = false;
                break;
        }
        return allowed;
    };
    UiPermissionsService.prototype.checkMasterMenuAllowed = function () {
        var tempArray = ['list-activity', 'list-technology', 'list-team'];
        var t = this;
        var matchFound = false;
        tempArray.forEach(function (element) {
            if (t.sharedData.permissions.indexOf(element) !== -1) {
                matchFound = true;
            }
        });
        return matchFound;
    };
    UiPermissionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["CommonSharedDataStorageService"]])
    ], UiPermissionsService);
    return UiPermissionsService;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/services/validators.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
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

var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
    }
    /**
     * validateUsername
     * @param control
     * @returns {any}
     */
    ValidatorService.prototype.validateUsername = function (control) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pattern.test(control.value)) {
            return { email: true };
        }
        return null;
    };
    /**
     * validatePassword
     * @param control
     * @returns {any}
     */
    ValidatorService.prototype.validatePassword = function (control) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*\W)(?=.*[A-Z]).{8,19}$/;
        if (!pattern.test(control.value)) {
            return { password: true };
        }
        return null;
    };
    ValidatorService.prototype.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    ValidatorService.prototype.validateEmail = function (control) {
        var EMAIL_REGEXP = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})*$/i;
        if (control.value !== '') {
            return EMAIL_REGEXP.test(control.value) ? null : {
                validateEmail: {
                    valid: false
                }
            };
        }
        else {
            return true;
        }
    };
    ValidatorService.prototype.validatePercentage = function (item) {
        if (item.value) {
            return item.value >= 0 && item.value <= 100 ? null : { notValid: true };
        }
        else {
            return true;
        }
    };
    /**
     * validateNotEmptyString
     * @param control
     * @returns {any}
     */
    ValidatorService.prototype.validateNotEmptyString = function (control) {
        if (control.value.trim() !== '') {
            return null;
        }
        else {
            return {
                validateNotEmptyString: {
                    valid: false
                }
            };
        }
    };
    ValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidatorService);
    return ValidatorService;
}());



/***/ }),

/***/ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SharedServicesAndComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServicesAndComponentsModule", function() { return SharedServicesAndComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/shared/shared-services-and-components-module/services/notification.service.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/shared/shared-services-and-components-module/components/notifications/notifications.component.ts");
/* harmony import */ var _components_confirmationdialog_confirmationdialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/confirmationdialog/confirmationdialog.component */ "./src/app/shared/shared-services-and-components-module/components/confirmationdialog/confirmationdialog.component.ts");
/* harmony import */ var _components_informationdialog_informationdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/informationdialog/informationdialog.component */ "./src/app/shared/shared-services-and-components-module/components/informationdialog/informationdialog.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/shared/shared-services-and-components-module/components/pagination/pagination.component.ts");
/* harmony import */ var _components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/errorpage/errorpage.component */ "./src/app/shared/shared-services-and-components-module/components/errorpage/errorpage.component.ts");
/* harmony import */ var _pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/obj-iterator.pipe */ "./src/app/shared/shared-services-and-components-module/pipes/obj-iterator.pipe.ts");
/* harmony import */ var _services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
/* harmony import */ var _Directives_hasPermission__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Directives/hasPermission */ "./src/app/shared/shared-services-and-components-module/Directives/hasPermission.ts");
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validators.service */ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts");
/* harmony import */ var _services_sharedfunctions_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/sharedfunctions.service */ "./src/app/shared/shared-services-and-components-module/services/sharedfunctions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SharedServicesAndComponentsModule = /** @class */ (function () {
    function SharedServicesAndComponentsModule() {
    }
    SharedServicesAndComponentsModule_1 = SharedServicesAndComponentsModule;
    SharedServicesAndComponentsModule.forRoot = function () {
        return {
            ngModule: SharedServicesAndComponentsModule_1,
            providers: [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_10__["CommonSharedDataStorageService"], _services_validators_service__WEBPACK_IMPORTED_MODULE_12__["ValidatorService"], _pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_9__["ObjIteratorPipe"], _services_sharedfunctions_service__WEBPACK_IMPORTED_MODULE_13__["SharedFunctionsService"]],
        };
    };
    SharedServicesAndComponentsModule = SharedServicesAndComponentsModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
            ],
            declarations: [
                _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                _components_confirmationdialog_confirmationdialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationdialogComponent"],
                _components_informationdialog_informationdialog_component__WEBPACK_IMPORTED_MODULE_6__["InformationdialogComponent"],
                _components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_8__["ErrorpageComponent"],
                _pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_9__["ObjIteratorPipe"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
                _Directives_hasPermission__WEBPACK_IMPORTED_MODULE_11__["HasPermissionDirective"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                _components_confirmationdialog_confirmationdialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationdialogComponent"],
                _components_informationdialog_informationdialog_component__WEBPACK_IMPORTED_MODULE_6__["InformationdialogComponent"],
                _components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_8__["ErrorpageComponent"],
                _pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_9__["ObjIteratorPipe"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"],
                _Directives_hasPermission__WEBPACK_IMPORTED_MODULE_11__["HasPermissionDirective"]
            ],
        })
    ], SharedServicesAndComponentsModule);
    return SharedServicesAndComponentsModule;
    var SharedServicesAndComponentsModule_1;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    path: 'https://rp-api.pitsolutions.ch',
    CLIENT_ID: 2,
    CLIENT_SECRET: 'VlNH5HPsg3hf5DxGYWHEh5RFyepZATDpkOjkqXc5'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oem/Documents/projects/rp/PSRS_RA_FE/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map