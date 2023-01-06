(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["private-private-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/do.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/do.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/do */ "./node_modules/rxjs-compat/_esm5/operator/do.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/do.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/do.js ***!
  \*******************************************************/
/*! exports provided: _do */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_do", function() { return _do; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _do(nextOrObserver, error, complete) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./src/app/private/private.component.html":
/*!************************************************!*\
  !*** ./src/app/private/private.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" *ngIf=\"isMasterDataLoaded\">\n  <div class=\"page-main\">\n    <div class=\"header py-4\">\n      <div class=\"container\">\n        <div class=\"d-flex\">\n          <a class=\"header-brand\" href=\"./index.html\">\n            <img src=\"https://www.pitsolutions.ch/fileadmin/themes/templates/images/PITS-Logo.svg\" class=\"header-brand-img\" alt=\"tabler logo\">\n          </a>\n\n          <div class=\"d-flex ml-auto\">\n            <ul class=\"nav nav-tabs border-0\">\n              <li class=\"nav-item\">\n                <a [routerLink]=\"['/home']\" class=\"nav-link pt-1 pb-1\">\n                  <i class=\"fe fe-home\"></i> Home</a>\n              </li>\n              <li class=\"nav-item\" *hasPermission=\"'master-menu'\">\n                <a [routerLink]=\"['/home/master-data']\" class=\"nav-link pt-1 pb-1\">\n                  <i class=\"fe fe-box\"></i> Master Data</a>\n              </li>\n              <li class=\"nav-item\" *hasPermission=\"'list-resource'\">\n                <a [routerLink]=\"['/home/resources']\" class=\"nav-link pt-1 pb-1\">\n                  <i class=\"fe fe-users\"></i> Resources</a>\n              </li>\n              <li class=\"nav-item\" *hasPermission=\"'list-all-projects|list-user-projects'\">\n                <a [routerLink]=\"['/home/projects']\" class=\"nav-link pt-1 pb-1\">\n                  <i class=\"fe fe-folder\"></i> Projects</a>\n              </li>\n              <li class=\"nav-item\" *hasPermission=\"'list-all-role-permissions'\">\n                <a [routerLink]=\"['/home/permissions']\" class=\"nav-link pt-1 pb-1\">\n                  <i class=\"fe fe-settings\"></i> Permissions</a>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"d-flex order-lg-2 ml-auto\">\n            <div class=\"dropdown\" dropdown>\n              <a dropdownToggle href=\"javascript:void(0)\" class=\"nav-link pr-0 leading-none\">\n                <span class=\"avatar\" style=\"background-image: url(./demo/faces/female/25.jpg)\"></span>\n                <span class=\"ml-2 d-none d-lg-block\">\n                  <span class=\"text-default\">{{userObject.username}}</span>\n                  <small class=\"text-muted d-block mt-1\">Admin{{userObject.role}}</small>\n                </span>\n              </a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\" role=\"menu\">\n                <a role=\"menuitem\" class=\"dropdown-item\" href=\"#\">\n                  <i class=\"dropdown-icon fe fe-user\"></i> Profile\n                </a>\n                <a role=\"menuitem\" class=\"dropdown-item\" href=\"#\">\n                  <i class=\"dropdown-icon fe fe-settings\"></i> Settings\n                </a>\n                <a role=\"menuitem\" class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logOut()\">\n                  <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\n                </a>\n              </div>\n            </div>\n          </div>\n          <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\n            <span class=\"header-toggler-icon\"></span>\n          </a>\n        </div>\n      </div>\n    </div>   \n    <div class=\"my-3 my-md-5\">\n      <div class=\"container\">\n        <app-notifications></app-notifications>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row align-items-center flex-row-reverse\">\n        <div class=\"col-auto ml-lg-auto\"></div>\n        <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\n          Copyright © 2018\n          <a href=\"http://www.pitsolutions.ch/\">Pit Solutions</a>\n          All rights reserved.\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/private/private.component.scss":
/*!************************************************!*\
  !*** ./src/app/private/private.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private/private.component.ts":
/*!**********************************************!*\
  !*** ./src/app/private/private.component.ts ***!
  \**********************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth/auth */ "./src/app/shared/auth/auth.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-services-and-components-module/services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivateComponent = /** @class */ (function () {
    function PrivateComponent(http, auth, sharedDataStorage) {
        this.http = http;
        this.auth = auth;
        this.sharedDataStorage = sharedDataStorage;
        this.userObject = null;
        this.isMasterDataLoaded = false;
    }
    PrivateComponent.prototype.ngOnInit = function () {
        this.userObject = this.auth.getUserLoginData();
        this.loadMasterData();
    };
    PrivateComponent.prototype.logOut = function () {
        this.auth.logout();
    };
    PrivateComponent.prototype.loadMasterData = function () {
        var curContext = this;
        this.sharedDataStorage.loadData(this.http).then(function (data) {
            curContext.isMasterDataLoaded = data;
        });
    };
    PrivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private',
            template: __webpack_require__(/*! ./private.component.html */ "./src/app/private/private.component.html"),
            styles: [__webpack_require__(/*! ./private.component.scss */ "./src/app/private/private.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_auth_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["CommonSharedDataStorageService"]])
    ], PrivateComponent);
    return PrivateComponent;
}());



/***/ }),

/***/ "./src/app/private/private.module.ts":
/*!*******************************************!*\
  !*** ./src/app/private/private.module.ts ***!
  \*******************************************/
/*! exports provided: PrivateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateModule", function() { return PrivateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _private_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private.routing */ "./src/app/private/private.routing.ts");
/* harmony import */ var _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/http/interceptor/interceptor */ "./src/app/shared/http/interceptor/interceptor.ts");
/* harmony import */ var _private_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared-services-and-components-module/shared-services-and-components-module */ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts");
/* harmony import */ var _shared_auth_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/auth/auth */ "./src/app/shared/auth/auth.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PrivateModule = /** @class */ (function () {
    function PrivateModule() {
    }
    PrivateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedServicesAndComponentsModule"],
                _private_routing__WEBPACK_IMPORTED_MODULE_4__["PrivateRouting"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot()
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_5__["AppInterceptor"], multi: true },
                _shared_auth_auth__WEBPACK_IMPORTED_MODULE_8__["Auth"]
            ],
            declarations: [
                _private_component__WEBPACK_IMPORTED_MODULE_6__["PrivateComponent"],
            ],
        })
    ], PrivateModule);
    return PrivateModule;
}());



/***/ }),

/***/ "./src/app/private/private.routing.ts":
/*!********************************************!*\
  !*** ./src/app/private/private.routing.ts ***!
  \********************************************/
/*! exports provided: PrivateRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRouting", function() { return PrivateRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _private_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private.component */ "./src/app/private/private.component.ts");


var routes = [
    {
        path: '', component: _private_component__WEBPACK_IMPORTED_MODULE_1__["PrivateComponent"],
        children: [
            { path: '', loadChildren: '../modules/calendar/calendar.module#CalendarModule' },
            { path: 'resources', loadChildren: '../modules/resources/resources.module#ResourcesModule' },
            { path: 'master-data', loadChildren: '../modules/master-data/master-data.module#MasterDataModule' },
            { path: 'projects', loadChildren: '../modules/projects/projects.module#ProjectsModule' },
            { path: 'permissions', loadChildren: '../modules/permissions/permissions.module#PermissionsModule' }
        ]
    },
];
var PrivateRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/shared/http/interceptor/interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/http/interceptor/interceptor.ts ***!
  \********************************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth */ "./src/app/shared/auth/auth.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppInterceptor = /** @class */ (function () {
    function AppInterceptor(auth, toastr) {
        this.auth = auth;
        this.toastr = toastr;
    }
    AppInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var httpHeaders = this.getHeaders(this.auth.getUserLoginData());
        request = request.clone({
            setHeaders: httpHeaders
        });
        return next.handle(request).do(function (succ) {
            if (succ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                _this.handleSuccess(succ);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                _this.handleError(request, next, err);
            }
        });
    };
    AppInterceptor.prototype.handleError = function (request, next, err) {
        if (err.status === 401) {
            this.handle401Error(request, next);
        }
        else {
            this.handleRequestError(err);
        }
    };
    AppInterceptor.prototype.handleSuccess = function (succ) {
        if (succ['body']['message'] !== undefined) {
            this.toastr.success(succ['body']['message']);
        }
    };
    AppInterceptor.prototype.handle401Error = function (request, next) {
        var parentContext = this;
        this.auth.refreshToken().then(function (data) {
            if (data) {
                var httpHeaders = parentContext.getHeaders(parentContext.auth.getUserLoginData());
                window.location.reload();
            }
        });
    };
    AppInterceptor.prototype.handleRequestError = function (err) {
        if (err['error']['message'] !== undefined) {
            var errors = [];
            var errorObject = err['error']['errors'];
            for (var error in errorObject) {
                if (errorObject.hasOwnProperty(error)) {
                    errors.push(errorObject[error]);
                }
            }
            this.toastr.error(errors.join('<br>'), err['error']['message'], { enableHtml: true });
        }
    };
    AppInterceptor.prototype.getHeaders = function (userDetails) {
        var headers = {};
        var currentUser = this.auth.getUserLoginData();
        if (currentUser) {
            headers['Authorization'] = currentUser.token_type + ' ' + currentUser.access_token;
        }
        headers['domain'] = window.location.origin;
        return headers;
    };
    AppInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AppInterceptor);
    return AppInterceptor;
}());



/***/ })

}]);
//# sourceMappingURL=private-private-module.js.map