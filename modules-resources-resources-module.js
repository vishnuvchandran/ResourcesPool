(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-resources-resources-module"],{

/***/ "./src/app/modules/resources/components/resource-forms/resource-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/resources/components/resource-forms/resource-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">{{ title }}</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"formCanceled()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Name\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror }\"\n            formControlName=\"name\" />\n          <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Name Required !</div>\n          <ng-template #nameError>\n            <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Pit id\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.pitId.errors && (dataForm.controls.pitId.dirty || dataForm.controls.pitId.touched) || apiValidatedErrors.pit_id?.haserror }\"\n            formControlName=\"pitId\" />\n          <div *ngIf=\"!apiValidatedErrors.pitId?.haserror else pitIdError\" class=\"invalid-feedback\">Pit id Required !</div>\n          <ng-template #pitIdError>\n            <div *ngFor=\"let err of apiValidatedErrors.pitId.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-label\">Email\n        <span class=\"form-required\">*</span>\n      </label>\n      <input type=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.email.errors && (dataForm.controls.email.dirty || dataForm.controls.email.touched) || apiValidatedErrors.email?.haserror }\"\n        formControlName=\"email\" />\n\n      <div *ngIf=\"!apiValidatedErrors.email?.haserror else emailError\" class=\"invalid-feedback\">Invalid Email !</div>\n      <ng-template #emailError>\n        <div *ngFor=\"let err of apiValidatedErrors.email.errors\" class=\"invalid-feedback\"> {{err}}</div>\n      </ng-template>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Role\n            <span class=\"form-required\">*</span>\n          </div>\n          <select name=\"role\" class=\"form-control\" formControlName=\"role\" [ngClass]=\"{'is-invalid': dataForm.controls.role.errors && (dataForm.controls.role.dirty || dataForm.controls.role.touched) || apiValidatedErrors.role?.haserror}\">\n            <option value=''>Select Role</option>\n            <option *ngFor=\"let role of masterRoles | objIterator\" value=\"{{role.id}}\">{{role.label}}</option>\n          </select>\n          <div *ngIf=\"!apiValidatedErrors.role?.haserror else roleError\" class=\"invalid-feedback\">UserRole Required !</div>\n          <ng-template #roleError>\n            <div *ngFor=\"let err of apiValidatedErrors.role.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Master Team\n            <span class=\"form-required\">*</span>\n          </div>\n          <select name=\"team\" class=\"form-control\" formControlName=\"team\" [ngClass]=\"{'is-invalid': dataForm.controls.team.errors && (dataForm.controls.team.dirty || dataForm.controls.team.touched) || apiValidatedErrors.team?.haserror }\">\n            <option value=''>Select Team</option>\n            <option *ngFor=\"let team of masterTeams | objIterator\" value=\"{{team.id}}\">{{team.name}}</option>\n          </select>\n          <div *ngIf=\"!apiValidatedErrors.team?.haserror else teamError\" class=\"invalid-feedback\">User team Required !</div>\n          <ng-template #teamError>\n            <div *ngFor=\"let err of apiValidatedErrors.team.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Activities</div>\n          <ng-select [items]=\"masterActivities | objIterator\" formControlName=\"activities\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\"\n            placeholder=\"Select Activities\"></ng-select>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Technologies</div>\n          <div class=\"custom-controls-stacked\">\n            <ng-select [items]=\"masterTechnologies | objIterator\" formControlName=\"technolgies\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\"\n              placeholder=\"Select Technologies\">\n            </ng-select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Status</div>\n          <select name=\"status\" class=\"form-control\" formControlName=\"status\" [ngClass]=\"{'is-invalid': dataForm.controls.status.errors && (dataForm.controls.status.dirty || dataForm.controls.status.touched) || apiValidatedErrors.status?.haserror }\">\n            <option value=\"true\">Active</option>\n            <option value=\"false\">Inactive</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"card-footer text-right\">\n    <span class=\"btn btn-danger\" (click)=\"formCanceled()\">Cancel</span>\n    <button type=\"submit\" [disabled]=\"!dataForm.valid\" class=\"btn btn-primary ml-2\">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/resources/components/resource-forms/resource-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/resources/components/resource-forms/resource-form.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/resources/components/resource-forms/resource-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/resources/components/resource-forms/resource-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceFormComponent", function() { return ResourceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/validators.service */ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources.service */ "./src/app/modules/resources/resources.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResourceFormComponent = /** @class */ (function () {
    function ResourceFormComponent(formBuilder, http, validatorService, dataStorageService, resourceService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.validatorService = validatorService;
        this.dataStorageService = dataStorageService;
        this.resourceService = resourceService;
        this.resourceDataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validationMessages = {};
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].RESOURCES;
    }
    ResourceFormComponent.prototype.ngOnInit = function () {
        this.masterRoles = this.dataStorageService.getSharedData().roles;
        delete this.masterRoles[_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].SUPER_ADMIN_ROLE_ID];
        this.masterActivities = this.dataStorageService.getSharedData().activities;
        this.masterTeams = this.dataStorageService.getSharedData().teams;
        this.masterTechnologies = this.dataStorageService.getSharedData().technologies;
        this.initForm();
    };
    ResourceFormComponent.prototype.initForm = function () {
        this.dataForm = this.formBuilder.group({
            name: ['', [this.validatorService.validateNotEmptyString]],
            pitId: ['', [this.validatorService.validateNotEmptyString]],
            email: ['', [this.validatorService.validateEmail]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            team: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            activities: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]),
            technolgies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]),
            status: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        if (Object.keys(this.resource).length > 0) {
            this.dataForm.patchValue({
                name: this.resource.name,
                pitId: this.resource.pitId,
                email: this.resource.email,
                role: this.resource.role[0].toString(),
                team: this.resource.team,
                activities: this.resource.activities,
                technolgies: this.resource.technologies,
                status: this.resource.status
            });
        }
    };
    ResourceFormComponent.prototype.addNewControl = function (data, type) {
        var _this = this;
        if (type === void 0) { type = 'activities'; }
        var dataArray = Object.entries(data);
        var formGroup = this.formBuilder.group({});
        dataArray.forEach(function (item, index) {
            var localContext = _this;
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](localContext.checkInResource(item[1]['id'], type));
            formGroup.addControl(item[1]['name'], control);
        });
        return formGroup;
    };
    ResourceFormComponent.prototype.checkInResource = function (id, type) {
        if (Object.keys(this.resource).length > 0) {
            var checkArray = (type === 'activities') ? this.resource.activities : this.resource.technologies;
            return checkArray.indexOf(id) !== -1;
        }
        else {
            return false;
        }
    };
    ResourceFormComponent.prototype.submit = function (form) {
        var _this = this;
        if (form.valid) {
            var resourceStatus = form.value.status == 'true' ? 1 : 0;
            var postObj = {
                name: form.value.name,
                pit_id: form.value.pitId,
                email: form.value.email,
                role: form.value.role,
                team: form.value.team,
                activities: form.value.activities,
                technologies: form.value.technolgies,
                status: resourceStatus
            };
            var endpoint = Object.keys(this.resource).length > 0 ? this.endPoint + '/' + this.resource.id : this.endPoint;
            this.apiValidatedErrors = {};
            this.http.post(endpoint, postObj).subscribe(function (res) {
                _this.resourceDataChanged.emit(res);
            }, function (err) {
                var apiErrors = err['error']['errors'];
                for (var errs in apiErrors) {
                    if (errs !== undefined) {
                        _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                    }
                }
            });
        }
    };
    ResourceFormComponent.prototype.getCheckBoxValue = function (formValues, data) {
        var filterData = Object.entries(data);
        var selected = filterData.filter(function (item, index) {
            if (formValues[item[1]['name']]) {
                return item;
            }
        });
        return this.getIdFromArray(selected);
    };
    ResourceFormComponent.prototype.getIdFromArray = function (data) {
        var idArray = data.map(function (item, index) {
            return item[0];
        });
        return idArray;
    };
    ResourceFormComponent.prototype.formCanceled = function () {
        this.resourceService.cancelForm();
    };
    ResourceFormComponent.prototype.addOrEditedData = function (data, type) {
        var tempbj = { data: data, type: type };
        this.resourceService.addOrEdited(tempbj);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResourceFormComponent.prototype, "resource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResourceFormComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ResourceFormComponent.prototype, "resourceDataChanged", void 0);
    ResourceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources-form',
            template: __webpack_require__(/*! ./resource-form.component.html */ "./src/app/modules/resources/components/resource-forms/resource-form.component.html"),
            styles: [__webpack_require__(/*! ./resource-form.component.scss */ "./src/app/modules/resources/components/resource-forms/resource-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_5__["ValidatorService"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["CommonSharedDataStorageService"],
            _resources_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]])
    ], ResourceFormComponent);
    return ResourceFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/resources/components/resource-view/resources-view.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/resources/components/resource-view/resources-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-sm\">\n    <tbody>\n      <tr>\n        <th colspan=\"4\">\n          <h3 class=\"mb-0\">\n            {{ resource.name }}\n            <ng-container *ngIf=\"!!resource.pitId\">\n              ({{ resource.pitId }})\n            </ng-container>\n            <button class=\"btn btn-sm float-right\" type=\"button\" (click)=\"formCanceled()\">\n              <i class=\"fe fe-x\"></i>\n            </button>\n          </h3>\n        </th>\n      </tr>\n      <tr>\n        <th width=\"20%\">Role</th>\n        <td width=\"30%\">\n          <span *ngFor=\"let item of resource.role;\" class=\"badge badge-info ml-1\">\n            <ng-container *ngIf=\"!!masterData.roles[item]\">\n              {{ masterData.roles[item].label }}\n            </ng-container>\n          </span>\n        </td>\n        <th width=\"20%\">Master Team</th>\n        <td width=\"30%\">\n          <ng-container *ngIf=\"!!masterData.teams[resource.team]\">\n            <span class=\"badge badge-success ml-1\">{{ masterData.teams[resource.team].name }}</span>\n          </ng-container>\n        </td>\n      </tr>\n      <tr>\n        <th>Email</th>\n        <td colspan=\"3\">{{resource.email}}</td>\n      </tr>\n      <tr>\n        <th>Activities</th>\n        <td colspan=\"3\">\n          <span *ngFor=\"let item of resource.activities;\" class=\"badge badge-warning ml-1\">\n            <ng-container *ngIf=\"!!masterData.activities[item]\">\n              {{ masterData.activities[item].name }}\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <th>Technologies</th>\n        <td colspan=\"3\">\n          <span *ngFor=\"let item of resource.technologies;\" class=\"badge badge-warning ml-1\">\n            <ng-container *ngIf=\"!!masterData.technologies[item]\">\n              {{ masterData.technologies[item].name }}\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<table class=\"table table-bordered table-sm\">\n  <thead>\n    <tr>\n      <th colspan=\"4\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <h3>Resource Leaves</h3>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <form [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"addLeave(dataForm)\" *hasPermission=\"'create-resource-leaves'\">\n              <div formArrayName=\"date\" class=\"form-group mb-0\">\n                <div class=\"input-group\">\n                  <input type=\"text\" placeholder=\"Pick a date\" class=\"form-control\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n                    formControlName=\"0\" readonly>\n                  <span class=\"input-group-append\">\n                    <button type=\"submit\" [disabled]=\"!dataForm.valid\" class=\"btn btn-primary\">Add Leave</button>\n                  </span>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </th>\n    </tr>\n    <tr>\n      <th class=\"w-1\">No.</th>\n      <th>Date</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of dataList | objIterator;let i= index\">\n      <td>\n        <span class=\"text-muted\">{{i+1}}</span>\n      </td>\n      <td>{{item.date | date : 'fullDate'}}</td>\n      <td>\n        <a class=\"icon\" href=\"javascript:void(0)\" (click)=\"deleteDialog(item)\" *hasPermission=\"'delete-resource-leaves'\">\n          <i class=\"fe fe-trash-2\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-pagination *ngIf=\"pagination\" [lastPage]=\"calculateLastPage(pagination.total,pagination.perPage)\" [currentPage]=\"pagination.currentPage\"\n  [pageCount]=\"pagination.perPage\" (changePage)=\"pageChanged($event)\" class=\"mt-2\"></app-pagination>\n<app-confirmationdialog #confirmationdialog (confirmed)=\"deleteConfirmed($event)\"></app-confirmationdialog>"

/***/ }),

/***/ "./src/app/modules/resources/components/resource-view/resources-view.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/resources/components/resource-view/resources-view.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/resources/components/resource-view/resources-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/resources/components/resource-view/resources-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResourcesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesViewComponent", function() { return ResourcesViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources.service */ "./src/app/modules/resources/resources.service.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/validators.service */ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResourcesViewComponent = /** @class */ (function () {
    function ResourcesViewComponent(http, formBuilder, resourceService, commonSharedDataStorageService, validatorService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.resourceService = resourceService;
        this.commonSharedDataStorageService = commonSharedDataStorageService;
        this.validatorService = validatorService;
        this.dataList = [];
        this.pagination = false;
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstant"].RESOURCES;
    }
    ResourcesViewComponent.prototype.ngOnInit = function () {
        this.masterData = this.commonSharedDataStorageService.getSharedData();
        this.getListingData();
        this.dataForm = this.formBuilder.group({
            date: this.formBuilder.array([
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            ])
        });
    };
    ResourcesViewComponent.prototype.getListingData = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var endpoint = this.endPoint + '/' + this.resource.id + '/' + 'leaves' + '?' + 'page=' + page;
        this.http.get(endpoint).subscribe(function (res) {
            _this.dataList = res['data'];
            _this.pagination = res['paginate'];
        });
    };
    ResourcesViewComponent.prototype.openCUModalWindow = function (data) {
        if (data === void 0) { data = {}; }
        this.taskViewModal.show();
    };
    ResourcesViewComponent.prototype.closeCUModalWindow = function () {
        this.taskViewModal.hide();
    };
    ResourcesViewComponent.prototype.deleteDialog = function (item) {
        this.confirmationdialog.presentConfirmationWindow(item);
    };
    ResourcesViewComponent.prototype.deleteConfirmed = function (event) {
        var _this = this;
        var endpoint = this.endPoint + '/' + event.userId + '/' + 'leaves/delete';
        var data = { date: [event.date] };
        this.http.post(endpoint, data).subscribe(function (res) {
            _this.getListingData();
        }, function (err) {
            console.log(err);
        });
    };
    ResourcesViewComponent.prototype.calculateLastPage = function (total, perPage) {
        return Math.ceil(total / perPage);
    };
    ResourcesViewComponent.prototype.pageChanged = function ($event) {
        this.getListingData($event);
    };
    ResourcesViewComponent.prototype.addLeave = function (dataForm) {
        var _this = this;
        if (dataForm.valid) {
            var endpoint = this.endPoint + '/' + this.resource.id + '/' + 'leaves';
            this.http.post(endpoint, dataForm.value).subscribe(function (res) {
                _this.getListingData(1);
                _this.dataForm.reset();
            }, function (err) {
                console.log(err);
                _this.dataForm.reset();
            });
        }
    };
    ResourcesViewComponent.prototype.formCanceled = function () {
        this.resourceService.cancelForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResourcesViewComponent.prototype, "resource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalwindow'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ResourcesViewComponent.prototype, "taskViewModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationdialog'),
        __metadata("design:type", Object)
    ], ResourcesViewComponent.prototype, "confirmationdialog", void 0);
    ResourcesViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources-view',
            template: __webpack_require__(/*! ./resources-view.component.html */ "./src/app/modules/resources/components/resource-view/resources-view.component.html"),
            styles: [__webpack_require__(/*! ./resources-view.component.scss */ "./src/app/modules/resources/components/resource-view/resources-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _resources_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_6__["CommonSharedDataStorageService"],
            _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"]])
    ], ResourcesViewComponent);
    return ResourcesViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/resources/components/resources.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/resources/components/resources.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <h3 class=\"card-title align-middle\">Resources</h3>\n          </div>\n          <div class=\"col-md-10\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <select\n                  name=\"activity\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"filterControles.activity\"\n                  (change)=\"onFilterValueChanges()\"\n                >\n                  <option value=\"\">Select activity</option>\n                  <option\n                    *ngFor=\"let activity of masterData.activities | objIterator\"\n                    value=\"{{ activity.id }}\"\n                  >\n                    {{ activity.name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col\">\n                <select\n                  name=\"team\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"filterControles.team\"\n                  (change)=\"onFilterValueChanges()\"\n                >\n                  <option value=\"\">Select Team</option>\n                  <option\n                    *ngFor=\"let team of masterData.teams | objIterator\"\n                    value=\"{{ team.id }}\"\n                  >\n                    {{ team.name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col\">\n                <select\n                  name=\"role\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"filterControles.role\"\n                  (change)=\"onFilterValueChanges()\"\n                >\n                  <option value=\"\">Select Role</option>\n                  <option\n                    *ngFor=\"let role of masterData.roles | objIterator\"\n                    value=\"{{ role.id }}\"\n                  >\n                    {{ role.label }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col\">\n                <select\n                  name=\"technology\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"filterControles.technology\"\n                  (change)=\"onFilterValueChanges()\"\n                >\n                  <option value=\"\">Select Technology</option>\n                  <option\n                    *ngFor=\"\n                      let technology of masterData.technologies | objIterator\n                    \"\n                    value=\"{{ technology.id }}\"\n                  >\n                    {{ technology.name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"col\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"keyword\"\n                  placeholder=\"keyword..\"\n                  [(ngModel)]=\"filterControles.keyword\"\n                  (input)=\"onFilterValueChanges()\"\n                />\n              </div>\n              <div class=\"col-md-1\">\n                <button\n                  class=\"btn btn-outline-secondary\"\n                  (click)=\"openCUModalWindow()\"\n                  *hasPermission=\"'create-resource'\"\n                >\n                  <i class=\"fe fe-plus-circle\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table card-table table-vcenter text-nowrap\">\n          <thead>\n            <tr>\n              <th width=\"5%\">No.</th>\n              <th width=\"5%\">PIT ID</th>\n              <th width=\"30%\">Name</th>\n              <th width=\"30%\">Email</th>\n              <th width=\"30%\">Status</th>\n              <th width=\"10%\">Team</th>\n              <th width=\"10%\">Role</th>\n              <th width=\"5%\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of dataList | objIterator; let i = index\">\n              <td>\n                <span class=\"text-muted\">{{\n                  calculateLineNumber(\n                    pagination.currentPage,\n                    pagination.perPage,\n                    i\n                  )\n                }}</span>\n              </td>\n              <td>{{ item.pitId }}</td>\n              <td>{{ item.name }}</td>\n              <td>{{ item.email }}</td>\n              <td>\n                <div *ngIf=\"!!item.status; else userInactive\">\n                  <span class=\"badge badge-success ml-1\">Active</span>\n                </div>\n                <ng-template #userInactive>\n                  <span class=\"badge badge-danger ml-1\">Inactive</span>\n                </ng-template>\n              </td>\n              <td>\n                <ng-container *ngIf=\"!!masterData.teams[item.team]\">\n                  <span class=\"badge badge-success ml-1\">{{\n                    masterData.teams[item.team].name\n                  }}</span>\n                </ng-container>\n              </td>\n              <td>\n                <span\n                  *ngFor=\"let roleID of item.role\"\n                  class=\"badge badge-info ml-1\"\n                >\n                  <ng-container *ngIf=\"!!masterData.roles[roleID]\">\n                    {{ masterData.roles[roleID].label }}\n                  </ng-container>\n                </span>\n              </td>\n              <td>\n                <a\n                  class=\"icon\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openResourceView(item)\"\n                  *hasPermission=\"'list-resource-leaves'\"\n                >\n                  <i class=\"fe fe-user\"></i>\n                </a>\n                <a\n                  class=\"icon ml-1\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openCUModalWindow(item)\"\n                  *hasPermission=\"'edit-resource'\"\n                >\n                  <i class=\"fe fe-edit\"></i>\n                </a>\n                <a\n                  class=\"icon ml-1\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"deleteDialog(item)\"\n                  *hasPermission=\"'delete-resource'\"\n                >\n                  <i class=\"fe fe-trash-2\"></i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <app-pagination\n      *ngIf=\"pagination\"\n      [lastPage]=\"calculateLastPage(pagination.total, pagination.perPage)\"\n      [currentPage]=\"pagination.currentPage\"\n      [pageCount]=\"pagination.perPage\"\n      (changePage)=\"pageChanged($event)\"\n    ></app-pagination>\n\n    <!-- <select [(ngModel)]=\"itemsPerPage\" (change)=\"changeItemPerPage($event.target.value)\">\n      <option [value]=\"10\" [selected]=\"itemsPerPage ==10\">10 item per page</option>\n      <option [value]=\"20\" [selected]=\"itemsPerPage ==20\">20 item per page</option>\n      <option [value]=\"25\" [selected]=\"itemsPerPage ==25\">25 item per page</option>\n      <option [value]=\"50\" [selected]=\"itemsPerPage ==50\">50 item per page</option>\n      <option [value]=\"100\" [selected]=\"itemsPerPage ==100\">100 item per page</option>\n    </select> -->\n  </div>\n</div>\n\n<div\n  class=\"modal fade\"\n  bsModal\n  #modalwindow=\"bs-modal\"\n  [config]=\"{ backdrop: 'static' }\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-static-name\"\n>\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div #dynamicResourceContent></div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-confirmationdialog\n  #confirmationdialog\n  (confirmed)=\"deleteConfirmed($event)\"\n></app-confirmationdialog>\n"

/***/ }),

/***/ "./src/app/modules/resources/components/resources.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/resources/components/resources.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/resources/components/resources.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/resources/components/resources.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _resource_forms_resource_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-forms/resource-form.component */ "./src/app/modules/resources/components/resource-forms/resource-form.component.ts");
/* harmony import */ var _resource_view_resources_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-view/resources-view.component */ "./src/app/modules/resources/components/resource-view/resources-view.component.ts");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources.service */ "./src/app/modules/resources/resources.service.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared-services-and-components-module/services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent(componentFactoryResolver, http, resourceService, commonSharedDataStorageService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.http = http;
        this.resourceService = resourceService;
        this.commonSharedDataStorageService = commonSharedDataStorageService;
        this.dataList = [];
        this.pagination = false;
        this.itemsPerPage = 20;
        this.filterControles = { keyword: '', activity: '', team: '', role: '', technology: '' };
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].RESOURCES;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterData = this.commonSharedDataStorageService.getSharedData();
        this.getListingData();
        this.resourceService.getCancelFormEvent().subscribe(function (res) {
            _this.closeModalWindow();
        });
        this.itemsPerPage = !!this.getCookie('recrperpage') ? this.getCookie('recrperpage') : this.itemsPerPage;
    };
    ResourcesComponent.prototype.getListingData = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var endpoint = this.buildUrlWithFilterParams(this.endPoint + '?' + 'page=' + page);
        this.http.get(endpoint).subscribe(function (res) {
            _this.dataList = res['data'];
            _this.pagination = res['paginate'];
        });
    };
    ResourcesComponent.prototype.openCUModalWindow = function (data) {
        if (data === void 0) { data = {}; }
        this.createFormComp(data);
        this.taskViewModal.show();
    };
    ResourcesComponent.prototype.openResourceView = function (data) {
        if (data === void 0) { data = {}; }
        this.createResourceViewComponent(data);
        this.taskViewModal.show();
    };
    ResourcesComponent.prototype.closeModalWindow = function () {
        this.dynamicResourceContent.detach();
        this.dynamicResourceContent.clear();
        this.taskViewModal.hide();
    };
    ResourcesComponent.prototype.createFormComp = function (modelInput) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_resource_forms_resource_form_component__WEBPACK_IMPORTED_MODULE_4__["ResourceFormComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.resource = modelInput;
        comp.instance.title = !!modelInput.name ? ('Edit resource - ' + modelInput.name) : 'Add resource';
        comp.instance.resourceDataChanged.subscribe(function (res) {
            _this.getListingData(_this.pagination.currentPage);
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    ResourcesComponent.prototype.createResourceViewComponent = function (modelInput) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(_resource_view_resources_view_component__WEBPACK_IMPORTED_MODULE_5__["ResourcesViewComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.resource = modelInput;
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    ResourcesComponent.prototype.deleteDialog = function (item) {
        this.confirmationdialog.presentConfirmationWindow(item);
    };
    ResourcesComponent.prototype.deleteConfirmed = function (event) {
        var _this = this;
        var endpoint = this.endPoint + '/' + event.id;
        this.http.delete(endpoint).subscribe(function (res) {
            _this.getListingData();
        }, function (err) {
            console.log(err);
        });
    };
    ResourcesComponent.prototype.calculateLastPage = function (total, perPage) {
        return Math.ceil(total / perPage);
    };
    /**
     * Calculate line number based on pagination
     *
     * @param currentPage
     * @param perPage
     */
    ResourcesComponent.prototype.calculateLineNumber = function (currentPage, perPage, index) {
        return ((currentPage - 1) * perPage) + index + 1;
    };
    ResourcesComponent.prototype.pageChanged = function ($event) {
        this.getListingData($event);
    };
    ResourcesComponent.prototype.onFilterValueChanges = function () {
        this.getListingData(1);
    };
    ResourcesComponent.prototype.buildUrlWithFilterParams = function (endpointUrl) {
        for (var key in this.filterControles) {
            // console.log(key, yourobject[key]);
            if (this.filterControles[key] !== '') {
                endpointUrl += '&' + key + '=' + this.filterControles[key];
            }
        }
        return endpointUrl;
    };
    ResourcesComponent.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    };
    ResourcesComponent.prototype.deleteCookie = function (name) {
        this.setCookie(name, "", -1);
    };
    ResourcesComponent.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ""; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    };
    ResourcesComponent.prototype.changeItemPerPage = function (val) {
        this.itemsPerPage = val;
        this.setCookie('recrperpage', val, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalwindow'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ResourcesComponent.prototype, "taskViewModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationdialog'),
        __metadata("design:type", Object)
    ], ResourcesComponent.prototype, "confirmationdialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicResourceContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ResourcesComponent.prototype, "dynamicResourceContent", void 0);
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/modules/resources/components/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.scss */ "./src/app/modules/resources/components/resources.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _resources_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["CommonSharedDataStorageService"]])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/modules/resources/resources.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/resources/resources.module.ts ***!
  \*******************************************************/
/*! exports provided: ResourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return ResourcesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http/interceptor/interceptor */ "./src/app/shared/http/interceptor/interceptor.ts");
/* harmony import */ var _resources_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources.routing */ "./src/app/modules/resources/resources.routing.ts");
/* harmony import */ var _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared-services-and-components-module/shared-services-and-components-module */ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts");
/* harmony import */ var _components_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/resources.component */ "./src/app/modules/resources/components/resources.component.ts");
/* harmony import */ var _components_resource_forms_resource_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/resource-forms/resource-form.component */ "./src/app/modules/resources/components/resource-forms/resource-form.component.ts");
/* harmony import */ var _components_resource_view_resources_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resource-view/resources-view.component */ "./src/app/modules/resources/components/resource-view/resources-view.component.ts");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources.service */ "./src/app/modules/resources/resources.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ResourcesModule = /** @class */ (function () {
    function ResourcesModule() {
    }
    ResourcesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                _resources_routing__WEBPACK_IMPORTED_MODULE_6__["ResourcesRouting"],
                _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedServicesAndComponentsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"]
            ],
            declarations: [
                _components_resources_component__WEBPACK_IMPORTED_MODULE_8__["ResourcesComponent"],
                _components_resource_forms_resource_form_component__WEBPACK_IMPORTED_MODULE_9__["ResourceFormComponent"],
                _components_resource_view_resources_view_component__WEBPACK_IMPORTED_MODULE_10__["ResourcesViewComponent"]
            ],
            entryComponents: [_components_resource_forms_resource_form_component__WEBPACK_IMPORTED_MODULE_9__["ResourceFormComponent"], _components_resource_view_resources_view_component__WEBPACK_IMPORTED_MODULE_10__["ResourcesViewComponent"]],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_5__["AppInterceptor"], multi: true },
                _resources_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"]
            ]
        })
    ], ResourcesModule);
    return ResourcesModule;
}());



/***/ }),

/***/ "./src/app/modules/resources/resources.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/resources/resources.routing.ts ***!
  \********************************************************/
/*! exports provided: ResourcesRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesRouting", function() { return ResourcesRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_resources_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resources.component */ "./src/app/modules/resources/components/resources.component.ts");


var routes = [
    {
        path: '', component: _components_resources_component__WEBPACK_IMPORTED_MODULE_1__["ResourcesComponent"]
    }
];
var ResourcesRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/resources/resources.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/resources/resources.service.ts ***!
  \********************************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
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




var ResourceService = /** @class */ (function () {
    function ResourceService() {
        this.cancel = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cancel$ = this.cancel.asObservable();
        this.addOrEdit = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.addOrEdit$ = this.addOrEdit.asObservable();
    }
    ResourceService.prototype.cancelForm = function () {
        this.cancel.next('canceled');
    };
    ResourceService.prototype.getCancelFormEvent = function () {
        return this.cancel$;
    };
    ResourceService.prototype.addOrEdited = function (data) {
        this.addOrEdit.next({ data: data });
    };
    ResourceService.prototype.getAdded = function () {
        return this.addOrEdit$;
    };
    ResourceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResourceService);
    return ResourceService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-resources-resources-module.js.map