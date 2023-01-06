(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-permissions-permissions-module"],{

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

/***/ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/permissions/components/permission-listing/permission-listing.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"dataLoaded\" class=\"card\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Permissions</h3>\n    <div class=\"card-options\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save Changes</button>\n    </div>\n  </div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-hover table-sm mb-0\">\n      <thead>\n        <tr>\n          <th class=\"w-1\" class=\"text-center\">#</th>\n          <th width=\"40%\">Name</th>\n          <th *ngFor=\"let item of currentPermissions\" class=\"text-center\">{{ item.label }}</th>\n        </tr>\n      </thead>\n      <tbody >\n        <tr *ngFor=\"let item of permissionList; let i= index\" >\n          <td class=\"text-center\">{{ i+1 }}.</td>\n          <td>{{ item.label }}</td>\n          <td *ngFor=\"let role of currentPermissions\">\n            <div [formArrayName]=\"convertHyphenUnderscore(role.name)\" class=\"text-center\">\n                <input type=\"checkbox\" [formControlName]=\"i\" >\n            </div>              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/permissions/components/permission-listing/permission-listing.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/permissions/components/permission-listing/permission-listing.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PermissionListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionListingComponent", function() { return PermissionListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _shared_shared_services_and_components_module_pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/pipes/obj-iterator.pipe */ "./src/app/shared/shared-services-and-components-module/pipes/obj-iterator.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PermissionListingComponent = /** @class */ (function () {
    function PermissionListingComponent(formBuilder, http, objectIterator) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.objectIterator = objectIterator;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permissionList = [];
        this.permissionNameList = [];
        this.currentPermissions = [];
        this.dataLoaded = false;
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PERMISSIONS;
    }
    PermissionListingComponent.prototype.ngOnInit = function () {
        this.getAllAssignedPermissions();
    };
    /**
     * Get all resources
     */
    PermissionListingComponent.prototype.getAllAssignedPermissions = function () {
        var _this = this;
        this.http.get(this.endPoint).subscribe(function (res) {
            _this.permissionList = _this.objectIterator.transform(res['master']);
            _this.currentPermissions = _this.objectIterator.transform(res['currentPermissions']);
            _this.permissionNameList = res['masterNames'];
            _this.setFormGroup();
            _this.dataLoaded = true;
        });
    };
    /**
     * Submit data
     * @param dataForm
     */
    PermissionListingComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var object = this;
        var data = {};
        this.currentPermissions.forEach(function (role) {
            var label = object.convertHyphenUnderscore(role.name);
            data[label] = object.convertToValue(label);
        });
        this.http.post(this.endPoint, data).subscribe(function (res) {
            _this.formResult.emit(res);
        });
    };
    /**
     * Convert hypen or white space to underscore
     * @param value
     */
    PermissionListingComponent.prototype.convertHyphenUnderscore = function (value) {
        return value.replace(/-/g, '_');
    };
    /**
     * Convert permission id to permission value
     * @param key
     */
    PermissionListingComponent.prototype.convertToValue = function (key) {
        var _this = this;
        return this.dataForm.value[key].map(function (x, i) { return x && _this.permissionNameList[i]; }).filter(function (x) { return !!x; });
    };
    /**
     * Set form group based on roles
     */
    PermissionListingComponent.prototype.setFormGroup = function () {
        var formGroup = {};
        var object = this;
        this.currentPermissions.forEach(function (role) {
            var label = object.convertHyphenUnderscore(role.name);
            formGroup[label] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](object.permissionNameList.map(function (x) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](role.permissions.indexOf(x) > -1); }));
        });
        this.dataForm = this.formBuilder.group(formGroup);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PermissionListingComponent.prototype, "formResult", void 0);
    PermissionListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permission-listing',
            template: __webpack_require__(/*! ./permission-listing.component.html */ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.html"),
            styles: [__webpack_require__(/*! ./permission-listing.component.scss */ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.scss")],
            providers: [_shared_shared_services_and_components_module_pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjIteratorPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_shared_services_and_components_module_pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjIteratorPipe"]])
    ], PermissionListingComponent);
    return PermissionListingComponent;
}());



/***/ }),

/***/ "./src/app/modules/permissions/permissions.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/permissions/permissions.module.ts ***!
  \***********************************************************/
/*! exports provided: PermissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModule", function() { return PermissionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/http/interceptor/interceptor */ "./src/app/shared/http/interceptor/interceptor.ts");
/* harmony import */ var _permissions_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions.routing */ "./src/app/modules/permissions/permissions.routing.ts");
/* harmony import */ var _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared-services-and-components-module/shared-services-and-components-module */ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts");
/* harmony import */ var _components_permission_listing_permission_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/permission-listing/permission-listing.component */ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PermissionsModule = /** @class */ (function () {
    function PermissionsModule() {
    }
    PermissionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _permissions_routing__WEBPACK_IMPORTED_MODULE_5__["PermissionsRouting"],
                _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedServicesAndComponentsModule"]
            ],
            declarations: [_components_permission_listing_permission_listing_component__WEBPACK_IMPORTED_MODULE_7__["PermissionListingComponent"]],
            entryComponents: [],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_4__["AppInterceptor"], multi: true }
            ]
        })
    ], PermissionsModule);
    return PermissionsModule;
}());



/***/ }),

/***/ "./src/app/modules/permissions/permissions.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/permissions/permissions.routing.ts ***!
  \************************************************************/
/*! exports provided: PermissionsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRouting", function() { return PermissionsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_permission_listing_permission_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/permission-listing/permission-listing.component */ "./src/app/modules/permissions/components/permission-listing/permission-listing.component.ts");


var routes = [
    { path: '', component: _components_permission_listing_permission_listing_component__WEBPACK_IMPORTED_MODULE_1__["PermissionListingComponent"] }
];
var PermissionsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


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
//# sourceMappingURL=modules-permissions-permissions-module.js.map