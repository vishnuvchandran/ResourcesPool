(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-projects-projects-module"],{

/***/ "./src/app/modules/projects/components/iteration-add/iteration-add.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-add/iteration-add.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Create Iteration</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    \n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Name\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Iteration Name\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror}\">\n          <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Iteration name required !</div>\n          <ng-template #nameError>\n            <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Type\n            <span class=\"form-required\">*</span>\n          </label>\n          <select formControlName=\"type\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.type.errors && (dataForm.controls.type.dirty || dataForm.controls.type.touched) || apiValidatedErrors.name?.haserror}\">\n            <option value=''>Select</option>\n            <option value='1'>Regular</option>\n            <option value='2'>Support/Maintenance</option>\n          </select>\n          <div *ngIf=\"!apiValidatedErrors.type?.haserror else typeError\" class=\"invalid-feedback\">Iteration type required !</div>\n          <ng-template #typeError>\n            <div *ngFor=\"let err of apiValidatedErrors.type.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Start Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"start_date\" [ngClass]=\"{'is-invalid': dataForm.controls.start_date.errors && (dataForm.controls.start_date.dirty || dataForm.controls.start_date.touched)  || apiValidatedErrors.start_date?.haserror}\"\n            placeholder=\"Iteration start date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.start_date?.haserror else startDateError\" class=\"invalid-feedback\">Iteration start date required !</div>\n          <ng-template #startDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.start_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">End Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"end_date\" [ngClass]=\"{'is-invalid': dataForm.controls.end_date.errors && (dataForm.controls.end_date.dirty || dataForm.controls.end_date.touched) || apiValidatedErrors.end_date?.haserror}\"\n            placeholder=\"Iteration end date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.end_date?.haserror else endDateError\" class=\"invalid-feedback\">Iteration end date required !</div>\n          <ng-template #endDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.end_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Team(s)\n            <span class=\"form-required\">*</span>\n          </div>\n          <ng-select [items]=\"teamList | objIterator\" formControlName=\"team\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\" [ngClass]=\"{'is-invalid': dataForm.controls.team.errors && (dataForm.controls.team.dirty || dataForm.controls.team.touched)\n          || apiValidatedErrors.team?.haserror}\" placeholder=\"Select team(s)\"\n            (change)=\"filterUserList()\"></ng-select>\n          <div *ngIf=\"!apiValidatedErrors.team?.haserror else teamError\" class=\"invalid-feedback\">Team is required !</div>\n          <ng-template #teamError>\n            <div *ngFor=\"let err of apiValidatedErrors.team.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Assign following resources for this iteration</div>\n          <ng-select [items]=\"teamBasedUserList | objIterator\" formControlName=\"users\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\"\n            placeholder=\"Select users\"></ng-select>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-label\">Description</label>\n      <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n    </div>\n\n\n  </div>\n  <div class=\"card-footer text-right\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"!dataForm.valid\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/projects/components/iteration-add/iteration-add.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-add/iteration-add.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/iteration-add/iteration-add.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-add/iteration-add.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IterationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationAddComponent", function() { return IterationAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/validators.service */ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IterationAddComponent = /** @class */ (function () {
    function IterationAddComponent(formBuilder, http, validatorService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.validatorService = validatorService;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usersList = [];
        this.teamList = [];
        this.teamBasedUserList = [];
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    IterationAddComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        this.getAllTeams();
        this.initForm();
    };
    /**
     * Get all resources
     */
    IterationAddComponent.prototype.getAllUsers = function () {
        var _this = this;
        var resourcesListEndPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].RESOURCES + '?filter=all';
        this.http.get(resourcesListEndPoint).subscribe(function (res) {
            _this.usersList = res['data'];
        });
    };
    /**
    * Get all project
    */
    IterationAddComponent.prototype.getAllTeams = function () {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/teams' + '?filter=user-specific';
        this.http.get(endpoint).subscribe(function (res) {
            _this.teamList = res['data'];
        });
    };
    /**
     * Init projet team form
     *
     * @param data
     */
    IterationAddComponent.prototype.initForm = function (data) {
        if (data === void 0) { data = {}; }
        this.dataForm = this.formBuilder.group({
            name: ['', [this.validatorService.validateNotEmptyString]],
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: ['', [this.validatorService.validateNotEmptyString]],
            description: [''],
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            users: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    /**
     * Submit data
     *
     * @param dataForm
     */
    IterationAddComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/iterations';
        this.http.post(endpoint, dataForm.value).subscribe(function (res) {
            _this.formResult.emit(res);
        }, function (err) {
            console.log(err);
            var apiErrors = err['error']['errors'];
            for (var errs in apiErrors) {
                if (errs !== undefined) {
                    _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                }
            }
        });
    };
    /**
     * For cancel event
     */
    IterationAddComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    /**
     * Filter users based on team
     */
    IterationAddComponent.prototype.filterUserList = function () {
        this.teamBasedUserList = [];
        var selectedTeam = this.dataForm.value.team;
        var object = this;
        selectedTeam.forEach(function (teamId) {
            if (object.teamList.hasOwnProperty(teamId)) {
                var team = object.teamList[teamId];
                team.users.forEach(function (userID) {
                    if (object.usersList.hasOwnProperty(userID)) {
                        object.teamBasedUserList[userID] = object.usersList[userID];
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IterationAddComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IterationAddComponent.prototype, "formResult", void 0);
    IterationAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iteration-add',
            template: __webpack_require__(/*! ./iteration-add.component.html */ "./src/app/modules/projects/components/iteration-add/iteration-add.component.html"),
            styles: [__webpack_require__(/*! ./iteration-add.component.scss */ "./src/app/modules/projects/components/iteration-add/iteration-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]])
    ], IterationAddComponent);
    return IterationAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-edit/iteration-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Edit Iteration</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Name\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Iteration Name\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror}\">\n          <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Iteration name required !</div>\n          <ng-template #nameError>\n            <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Type\n            <span class=\"form-required\">*</span>\n          </label>\n          <select formControlName=\"type\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.type.errors && (dataForm.controls.type.dirty || dataForm.controls.type.touched) || apiValidatedErrors.name?.haserror}\">\n            <option value=''>Select</option>\n            <option value='1'>Regular</option>\n            <option value='2'>Support/Maintenance</option>\n          </select>\n          <div *ngIf=\"!apiValidatedErrors.type?.haserror else typeError\" class=\"invalid-feedback\">Iteration type required !</div>\n          <ng-template #typeError>\n            <div *ngFor=\"let err of apiValidatedErrors.type.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Start Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"start_date\" [ngClass]=\"{'is-invalid': dataForm.controls.start_date.errors && (dataForm.controls.start_date.dirty || dataForm.controls.start_date.touched)  || apiValidatedErrors.start_date?.haserror}\"\n            placeholder=\"Iteration start date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.start_date?.haserror else startDateError\" class=\"invalid-feedback\">Iteration start date required !</div>\n          <ng-template #startDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.start_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">End Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"end_date\" [ngClass]=\"{'is-invalid': dataForm.controls.end_date.errors && (dataForm.controls.end_date.dirty || dataForm.controls.end_date.touched) || apiValidatedErrors.end_date?.haserror}\"\n            placeholder=\"Iteration end date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.end_date?.haserror else endDateError\" class=\"invalid-feedback\">Iteration end date required !</div>\n          <ng-template #endDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.end_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"form-label\">Team(s)\n        <span class=\"form-required\">*</span>\n      </div>\n      <ng-select [items]=\"teamList | objIterator\" formControlName=\"team\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\" [ngClass]=\"{'is-invalid': dataForm.controls.team.errors && (dataForm.controls.team.dirty || dataForm.controls.team.touched)\n              || apiValidatedErrors.team?.haserror}\" placeholder=\"Select team(s)\"></ng-select>\n      <div *ngIf=\"!apiValidatedErrors.team?.haserror else teamError\" class=\"invalid-feedback\">Team is required !</div>\n      <ng-template #teamError>\n        <div *ngFor=\"let err of apiValidatedErrors.team.errors\" class=\"invalid-feedback\"> {{err}}</div>\n      </ng-template>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-label\">Description</label>\n      <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n    </div>\n  </div>\n  <div class=\"card-footer text-right\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"!dataForm.valid\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-edit/iteration-edit.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-edit/iteration-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: IterationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationEditComponent", function() { return IterationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/validators.service */ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IterationEditComponent = /** @class */ (function () {
    function IterationEditComponent(formBuilder, http, validatorService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.validatorService = validatorService;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.teamList = [];
        this.dataLoaded = false;
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    IterationEditComponent.prototype.ngOnInit = function () {
        this.getIterationDetails();
        this.getAllTeams();
        this.initForm();
    };
    /**
     * Get iteration details
     */
    IterationEditComponent.prototype.getIterationDetails = function () {
        var _this = this;
        var iterationDetailsEndpoint = this.endPoint + '/' + this.project.id + '/iterations/' + this.iteration.id;
        this.http.get(iterationDetailsEndpoint).subscribe(function (res) {
            _this.iteration = res['data'];
            _this.dataForm.patchValue({
                name: _this.iteration.name,
                type: _this.iteration.type,
                start_date: new Date(_this.iteration.startDate),
                end_date: new Date(_this.iteration.endDate),
                description: _this.iteration.description,
                team: _this.iteration.team,
            });
            _this.dataLoaded = true;
        });
    };
    /**
    * Get teams under this project
    */
    IterationEditComponent.prototype.getAllTeams = function () {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/teams' + '?filter=user-specific';
        this.http.get(endpoint).subscribe(function (res) {
            _this.teamList = res['data'];
        });
    };
    /**
    * Init iteration team form
    *
    * @param data
    */
    IterationEditComponent.prototype.initForm = function (data) {
        if (data === void 0) { data = {}; }
        this.dataForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [''],
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    /**
     * Submit data
     *
     * @param dataForm
     */
    IterationEditComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/iterations/' + this.iteration.id;
        this.http.post(endpoint, dataForm.value).subscribe(function (res) {
            _this.formResult.emit(res);
        }, function (err) {
            var apiErrors = err['error']['errors'];
            for (var errs in apiErrors) {
                if (errs !== undefined) {
                    _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                }
            }
        });
    };
    /**
     * For cancel event
     */
    IterationEditComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IterationEditComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IterationEditComponent.prototype, "iteration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IterationEditComponent.prototype, "formResult", void 0);
    IterationEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iteration-edit',
            template: __webpack_require__(/*! ./iteration-edit.component.html */ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.html"),
            styles: [__webpack_require__(/*! ./iteration-edit.component.scss */ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]])
    ], IterationEditComponent);
    return IterationEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/iteration-view/iteration-view.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-view/iteration-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-sm mb-0\">\n    <tbody>\n      <tr>\n        <th colspan=\"4\">\n          <h3 class=\"mb-0\">\n            {{ iteration.name }}\n            <button class=\"btn btn-sm float-right\" type=\"button\" (click)=\"cancelForm()\">\n              <i class=\"fe fe-x\"></i>\n            </button>\n          </h3>\n        </th>\n      </tr>\n      <tr>\n        <th>Start Date</th>\n        <td>{{ iteration.startDate | date }}</td>\n        <th>End Date</th>\n        <td>{{ iteration.endDate | date }}</td>\n      </tr>\n      <tr>\n        <th>Type</th>\n        <td>{{ iteration.typeLabel }}</td>\n        <th>Teams</th>\n        <td>\n          <span *ngFor=\"let item of iteration.team;\" class=\"badge badge-info ml-1\">\n            <ng-container *ngIf=\"teamList[item]\">\n              {{ teamList[item].name }}\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <th>Description</th>\n        <td colspan=\"3\">{{ iteration.description }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/modules/projects/components/iteration-view/iteration-view.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-view/iteration-view.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/iteration-view/iteration-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/projects/components/iteration-view/iteration-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: IterationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationViewComponent", function() { return IterationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IterationViewComponent = /** @class */ (function () {
    function IterationViewComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataLoaded = false;
        this.teamList = [];
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    IterationViewComponent.prototype.ngOnInit = function () {
        this.getIterationDetails();
        this.getAllTeams();
    };
    /**
    * Get iteration details
    */
    IterationViewComponent.prototype.getIterationDetails = function () {
        var _this = this;
        var iterationDetailsEndpoint = this.endPoint + '/' + this.project.id + '/iterations/' + this.iteration.id;
        this.http.get(iterationDetailsEndpoint).subscribe(function (res) {
            _this.iteration = res['data'];
            _this.dataLoaded = true;
        });
    };
    /**
    * Get teams under this project
    */
    IterationViewComponent.prototype.getAllTeams = function () {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/teams';
        this.http.get(endpoint).subscribe(function (res) {
            _this.teamList = res['data'];
        });
    };
    /**
     * For cancel event
     */
    IterationViewComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IterationViewComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IterationViewComponent.prototype, "iteration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IterationViewComponent.prototype, "formResult", void 0);
    IterationViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iteration-view',
            template: __webpack_require__(/*! ./iteration-view.component.html */ "./src/app/modules/projects/components/iteration-view/iteration-view.component.html"),
            styles: [__webpack_require__(/*! ./iteration-view.component.scss */ "./src/app/modules/projects/components/iteration-view/iteration-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IterationViewComponent);
    return IterationViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/project-add/project.add.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-add/project.add.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\" card-header\">\n    <h3 class=\"card-title\">Create Project</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Name\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Project Name\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror}\">\n          <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Project name required !</div>\n          <ng-template #nameError>\n            <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Code\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"code\" placeholder=\"Project Code\" [ngClass]=\"{'is-invalid': dataForm.controls.code.errors && (dataForm.controls.code.dirty || dataForm.controls.code.touched) || apiValidatedErrors.code?.haserror}\">\n          <div *ngIf=\"!apiValidatedErrors.code?.haserror else codeError\" class=\"invalid-feedback\">Project code required !</div>\n          <ng-template #codeError>\n            <div *ngFor=\"let err of apiValidatedErrors.code.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Start Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"start_date\" [ngClass]=\"{'is-invalid': dataForm.controls.start_date.errors && (dataForm.controls.start_date.dirty || dataForm.controls.start_date.touched) || apiValidatedErrors.start_date?.haserror}\"\n            placeholder=\"Project start date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.start_date?.haserror else startDateError\" class=\"invalid-feedback\">Project start date required !</div>\n          <ng-template #startDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.start_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">End Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"end_date\" [ngClass]=\"{'is-invalid': dataForm.controls.end_date.errors && (dataForm.controls.end_date.dirty || dataForm.controls.end_date.touched) || apiValidatedErrors.end_date?.haserror}\"\n            placeholder=\"Project end date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.end_date?.haserror else endDateError\" class=\"invalid-feedback\">Project end date required !</div>\n          <ng-template #endDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.end_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Type\n            <span class=\"form-required\">*</span>\n          </label>\n          <select formControlName=\"type\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.type.errors && (dataForm.controls.type.dirty || dataForm.controls.type.touched) || apiValidatedErrors.end_date?.haserror}\">\n            <option value=''>Select</option>\n            <option value='1'>Fixed project</option>\n            <option value='2'>Time & material</option>\n          </select>\n          <div *ngIf=\"!apiValidatedErrors.type?.haserror else typeError\" class=\"invalid-feedback\">Project type required !</div>\n          <ng-template #typeError>\n            <div *ngFor=\"let err of apiValidatedErrors.type.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Status</div>\n          <div class=\"custom-controls-stacked\">\n            <label class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" class=\"custom-control-input\" formControlName=\"status\" value='1'>\n              <span class=\"custom-control-label\">Active</span>\n            </label>\n            <label class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" class=\"custom-control-input\" formControlName=\"status\" value='2'>\n              <span class=\"custom-control-label\">Inactive</span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group mb-0\">\n      <label class=\"form-label\">Description</label>\n      <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n    </div>\n  </div>\n  <div class=\"card-footer text-right\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"!dataForm.valid\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/projects/components/project-add/project.add.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-add/project.add.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/project-add/project.add.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-add/project.add.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProjectAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAddComponent", function() { return ProjectAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/validators.service */ "./src/app/shared/shared-services-and-components-module/services/validators.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectAddComponent = /** @class */ (function () {
    function ProjectAddComponent(formBuilder, http, validatorService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.validatorService = validatorService;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    ProjectAddComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ProjectAddComponent.prototype.initForm = function (data) {
        if (data === void 0) { data = {}; }
        this.dataForm = this.formBuilder.group({
            code: ['', [this.validatorService.validateNotEmptyString]],
            name: ['', [this.validatorService.validateNotEmptyString]],
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: ['', [this.validatorService.validateNotEmptyString]],
            status: ['1', [this.validatorService.validateNotEmptyString]],
            description: ['']
        });
    };
    ProjectAddComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var endpoint = this.endPoint;
        this.http.post(endpoint, dataForm.value).subscribe(function (res) {
            _this.formResult.emit(res);
        }, function (err) {
            var apiErrors = err['error']['errors'];
            for (var errs in apiErrors) {
                if (errs !== undefined) {
                    _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                }
            }
            console.log(_this.apiValidatedErrors);
        });
    };
    ProjectAddComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProjectAddComponent.prototype, "formResult", void 0);
    ProjectAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-add',
            template: __webpack_require__(/*! ./project.add.component.html */ "./src/app/modules/projects/components/project-add/project.add.component.html"),
            styles: [__webpack_require__(/*! ./project.add.component.scss */ "./src/app/modules/projects/components/project-add/project.add.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_shared_services_and_components_module_services_validators_service__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]])
    ], ProjectAddComponent);
    return ProjectAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/project-detail/project-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-detail/project-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title pull-xs-left\">{{ project.name }}</h3>\n        <div class=\"card-options\">\n          <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"openProjectEditForm(project)\" *hasPermission=\"'create-projects'\">\n            <i class=\"fe fe-edit\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-reponsive\">\n          <table class=\"table table-bordered table-sm\">\n            <tbody>\n              <tr>\n                <th width=\"15%\">Name</th>\n                <td width=\"30%\">{{ project.name }}</td>\n                <th width=\"15%\">Code</th>\n                <td width=\"30%\">{{ project.code }}</td>\n              </tr>\n              <tr>\n                <th>Start Date</th>\n                <td>{{ project.startDate | date }}</td>\n                <th>End Date</th>\n                <td>{{ project.endDate | date }}</td>\n              </tr>\n              <tr>\n                <th>Type</th>\n                <td>{{ project.typeLabel }}</td>\n                <th>Status</th>\n                <td>{{ project.statusLabel }}</td>\n              </tr>\n              <tr>\n                <th>Description</th>\n                <td colspan=\"3\">{{ project.description }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"table-reponsive mt-6\">\n          <table class=\"table table-bordered table-sm\">\n            <thead>\n              <tr>\n                <th colspan=\"5\">\n                  <h4 class=\"mb-0\">\n                    <span class=\"align-middle\">Project teams</span>\n                    <button class=\"btn btn-sm btn-outline-secondary float-right\" (click)=\"openTeamAddForm(project)\" *ngIf=\"!!project.permissions &&  project.permissions.indexOf('can-add-project-teams') !== -1\">\n                      <i class=\"fe fe-plus-circle\"></i>\n                    </button>\n                  </h4>\n                </th>\n              </tr>\n              <tr>\n                <th width=\"5%\">#</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th width=\"15%\">No. of members</th>\n                <th width=\"10%\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of teams | objIterator;let i= index\">\n                <td>\n                  <span class=\"text-muted\">{{ i+1 }}.</span>\n                </td>\n                <td>{{ item.name }}</td>\n                <td>{{ item.description }}</td>\n                <td>{{ item.users.length }}</td>\n                <td>\n                  <a class=\"icon\" (click)=\"openTeamViewPage(project, item)\">\n                    <i class=\"fe fe-eye\"></i>\n                  </a>\n                  <a class=\"icon ml-2\" (click)=\"openTeamEditForm(project, item)\" *ngIf=\"!!item.permissions && item.permissions.indexOf('can-edit-team') !== -1\">\n                    <i class=\"fe fe-edit\"></i>\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf='teams.length === 0'>\n                <td colspan=\"5\">No results found.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"table-reponsive mt-6\">\n          <table class=\"table table-bordered table-sm\">\n            <thead>\n              <tr>\n                <th colspan=\"6\">\n                  <h4 class=\"mb-0\">\n                    <span class=\"align-middle\">Project Iterations</span>\n                    <button class=\"btn btn-sm btn-outline-secondary float-right\" (click)=\"openIterationAddForm(project)\" *ngIf=\"!!project.permissions && project.permissions.indexOf('can-add-project-iterations') !== -1\">\n                      <i class=\"fe fe-plus-circle\"></i>\n                    </button>\n                  </h4>\n                </th>\n              </tr>\n              <tr>\n                <th width=\"5%\">#</th>\n                <th>Name</th>\n                <th width=\"15%\">Start date</th>\n                <th width=\"15%\">End date</th>\n                <th width=\"10%\">Type</th>\n                <th width=\"10%\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of iterations | objIterator;let i= index\">\n                <td>\n                  <span class=\"text-muted\">{{ i+1 }}.</span>\n                </td>\n                <td>{{ item.name }}</td>\n                <td>{{ item.startDate | date }}</td>\n                <td>{{ item.endDate | date }}</td>\n                <td>{{ item.typeLabel }}</td>\n                <td>\n                  <a class=\"icon\" (click)=\"openIterationViewPopUP(project, item)\">\n                    <i class=\"fe fe-eye\"></i>\n                  </a>\n                  <a class=\"icon ml-2\" (click)=\"openIterationEditForm(project, item)\" *ngIf=\"!!item.permissions &&  item.permissions.indexOf('can-edit-iteration') !== -1\">\n                    <i class=\"fe fe-edit\"></i>\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf='iterations.length === 0'>\n                <td colspan=\"6\">No results found.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" bsModal #modalwindow=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div #dynamicResourceContent></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/projects/components/project-detail/project-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-detail/project-detail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/project-detail/project-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-detail/project-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-edit/project.edit.component */ "./src/app/modules/projects/components/project-edit/project.edit.component.ts");
/* harmony import */ var _team_add_team_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../team-add/team-add.component */ "./src/app/modules/projects/components/team-add/team-add.component.ts");
/* harmony import */ var _team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../team-edit/team-edit.component */ "./src/app/modules/projects/components/team-edit/team-edit.component.ts");
/* harmony import */ var _team_view_team_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../team-view/team-view.component */ "./src/app/modules/projects/components/team-view/team-view.component.ts");
/* harmony import */ var _iteration_add_iteration_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../iteration-add/iteration-add.component */ "./src/app/modules/projects/components/iteration-add/iteration-add.component.ts");
/* harmony import */ var _iteration_edit_iteration_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../iteration-edit/iteration-edit.component */ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.ts");
/* harmony import */ var _iteration_view_iteration_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../iteration-view/iteration-view.component */ "./src/app/modules/projects/components/iteration-view/iteration-view.component.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/shared-services-and-components-module/services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(componentFactoryResolver, http, commonSharedDataStorageService, route, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.http = http;
        this.commonSharedDataStorageService = commonSharedDataStorageService;
        this.route = route;
        this.router = router;
        this.project = [];
        this.iterations = [];
        this.teams = [];
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS + '/' + this.route.snapshot.params['id'];
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.getProjectDetails();
        this.getAllIterations();
        this.getAllTeams();
    };
    /**
     * Get single project details
     */
    ProjectDetailComponent.prototype.getProjectDetails = function () {
        var _this = this;
        var endpoint = this.endPoint;
        this.http.get(endpoint).subscribe(function (res) {
            _this.project = res['data'];
        }, function (err) {
            _this.router.navigateByUrl('404');
            _this.commonSharedDataStorageService.errorPageButtonType = 'Home';
        });
    };
    /**
     * Open project edit form
     *
     * @param project
     */
    ProjectDetailComponent.prototype.openProjectEditForm = function (project) {
        this.projectEditFormComp(project);
        this.taskViewModal.show();
    };
    /**
     * Close modal window
     */
    ProjectDetailComponent.prototype.closeModalWindow = function () {
        this.dynamicResourceContent.detach();
        this.dynamicResourceContent.clear();
        this.taskViewModal.hide();
        this.getAllTeams();
    };
    /**
     * Save changes
     *
     * @param project
     */
    ProjectDetailComponent.prototype.projectEditFormComp = function (project) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEditComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.formResult.subscribe(function (res) {
            _this.getProjectDetails();
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
     * Team add form
     *
     * @param project
     */
    ProjectDetailComponent.prototype.openTeamAddForm = function (project) {
        this.teamAddFormComp(project);
        this.taskViewModal.show();
    };
    /**
     * Inject team component to this view
     *
     * @param project
     */
    ProjectDetailComponent.prototype.teamAddFormComp = function (project) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_team_add_team_add_component__WEBPACK_IMPORTED_MODULE_6__["TeamAddComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.formResult.subscribe(function (res) {
            _this.getAllTeams();
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
    * Team edit form
    *
    * @param project
    * @param team
    */
    ProjectDetailComponent.prototype.openTeamEditForm = function (project, team) {
        this.teamEditFormComp(project, team);
        this.taskViewModal.show();
    };
    /**
     * Inject team edit component to this view
     *
     * @param project
     * @param team
     */
    ProjectDetailComponent.prototype.teamEditFormComp = function (project, team) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_7__["TeamEditComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.team = team;
        comp.instance.formResult.subscribe(function (res) {
            _this.getAllTeams();
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
    * Team view page
    *
    * @param project
    * @param team
    */
    ProjectDetailComponent.prototype.openTeamViewPage = function (project, team) {
        this.teamViewFormComp(project, team);
        this.taskViewModal.show();
    };
    /**
     * Inject team view component to this view
     *
     * @param project
     * @param team
     */
    ProjectDetailComponent.prototype.teamViewFormComp = function (project, team) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_8__["TeamViewComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.team = team;
        comp.instance.formResult.subscribe(function (res) {
            _this.getAllTeams();
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
    * Iteration add form
    *
    * @param project
    */
    ProjectDetailComponent.prototype.openIterationAddForm = function (project) {
        this.iterationAddFormComp(project);
        this.taskViewModal.show();
    };
    /**
     * Inject Iteration add component to this view
     *
     * @param project
     */
    ProjectDetailComponent.prototype.iterationAddFormComp = function (project) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_iteration_add_iteration_add_component__WEBPACK_IMPORTED_MODULE_9__["IterationAddComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.formResult.subscribe(function (res) {
            _this.getAllIterations();
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
     * Iteration edit form
     *
     * @param project
     * @param iteration
     */
    ProjectDetailComponent.prototype.openIterationEditForm = function (project, iteration) {
        this.iterationEditFormComp(project, iteration);
        this.taskViewModal.show();
    };
    /**
     * Inject Iteration edit component to this view
     *
     * @param project
     * @param iteration
     */
    ProjectDetailComponent.prototype.iterationEditFormComp = function (project, iteration) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_iteration_edit_iteration_edit_component__WEBPACK_IMPORTED_MODULE_10__["IterationEditComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.iteration = iteration;
        comp.instance.formResult.subscribe(function (res) {
            _this.getAllIterations();
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
     * Iteration view pop-up
     *
     * @param project
     * @param iteration
     */
    ProjectDetailComponent.prototype.openIterationViewPopUP = function (project, iteration) {
        this.iterationViewPageComp(project, iteration);
        this.taskViewModal.show();
    };
    /**
     * Inject Iteration view component to this view
     *
     * @param project
     * @param iteration
     */
    ProjectDetailComponent.prototype.iterationViewPageComp = function (project, iteration) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_iteration_view_iteration_view_component__WEBPACK_IMPORTED_MODULE_11__["IterationViewComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.iteration = iteration;
        comp.instance.formResult.subscribe(function (res) {
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    /**
     * Get all iterations under this project
     */
    ProjectDetailComponent.prototype.getAllIterations = function () {
        var _this = this;
        var endpoint = this.endPoint + '/iterations';
        this.http.get(endpoint).subscribe(function (res) {
            _this.iterations = res['data'];
        });
    };
    /**
     * Get all teams under this project
     */
    ProjectDetailComponent.prototype.getAllTeams = function () {
        var _this = this;
        var endpoint = this.endPoint + '/teams';
        this.http.get(endpoint).subscribe(function (res) {
            _this.teams = res['data'];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalwindow'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ProjectDetailComponent.prototype, "taskViewModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationdialog'),
        __metadata("design:type", Object)
    ], ProjectDetailComponent.prototype, "confirmationdialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicResourceContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ProjectDetailComponent.prototype, "dynamicResourceContent", void 0);
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/modules/projects/components/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/modules/projects/components/project-detail/project-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_12__["CommonSharedDataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/project-edit/project.edit.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-edit/project.edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"dataLoaded\" class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\" card-header\">\n    <h3 class=\"card-title\">Edit Project - {{ project.code }}</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Name\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Project Name\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror}\">\n          <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Project name required !</div>\n          <ng-template #nameError>\n            <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Code\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"code\" placeholder=\"Project Code\" [ngClass]=\"{'is-invalid': dataForm.controls.code.errors && (dataForm.controls.code.dirty || dataForm.controls.code.touched) || apiValidatedErrors.code?.haserror}\">\n          <div *ngIf=\"!apiValidatedErrors.code?.haserror else codeError\" class=\"invalid-feedback\">Project code required !</div>\n          <ng-template #codeError>\n            <div *ngFor=\"let err of apiValidatedErrors.code.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Start Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"start_date\" [ngClass]=\"{'is-invalid': dataForm.controls.start_date.errors && (dataForm.controls.start_date.dirty || dataForm.controls.start_date.touched) || apiValidatedErrors.start_date?.haserror}\"\n            placeholder=\"Project start date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.start_date?.haserror else startDateError\" class=\"invalid-feedback\">Project start date required !</div>\n          <ng-template #startDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.start_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">End Date\n            <span class=\"form-required\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"end_date\" [ngClass]=\"{'is-invalid': dataForm.controls.end_date.errors && (dataForm.controls.end_date.dirty || dataForm.controls.end_date.touched) || apiValidatedErrors.end_date?.haserror}\"\n            placeholder=\"Project end date\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" readonly>\n          <div *ngIf=\"!apiValidatedErrors.end_date?.haserror else endDateError\" class=\"invalid-feedback\">Project end date required !</div>\n          <ng-template #endDateError>\n            <div *ngFor=\"let err of apiValidatedErrors.end_date.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"form-label\">Type\n            <span class=\"form-required\">*</span>\n          </label>\n          <select formControlName=\"type\" class=\"form-control\" [ngClass]=\"{'is-invalid': dataForm.controls.type.errors && (dataForm.controls.type.dirty || dataForm.controls.type.touched) || apiValidatedErrors.end_date?.haserror}\">\n            <option value=''>Select</option>\n            <option value='1'>Fixed project</option>\n            <option value='2'>Time & material</option>\n          </select>\n          <div *ngIf=\"!apiValidatedErrors.type?.haserror else typeError\" class=\"invalid-feedback\">Project type required !</div>\n          <ng-template #typeError>\n            <div *ngFor=\"let err of apiValidatedErrors.type.errors\" class=\"invalid-feedback\"> {{err}}</div>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"form-label\">Status</div>\n          <div class=\"custom-controls-stacked\">\n            <label class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" class=\"custom-control-input\" formControlName=\"status\" value='1'>\n              <span class=\"custom-control-label\">Active</span>\n            </label>\n            <label class=\"custom-control custom-radio custom-control-inline\">\n              <input type=\"radio\" class=\"custom-control-input\" formControlName=\"status\" value='2'>\n              <span class=\"custom-control-label\">Inactive</span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group mb-0\">\n      <label class=\"form-label\">Description</label>\n      <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n    </div>\n  </div>\n  <div class=\"card-footer text-right\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"!dataForm.valid\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/projects/components/project-edit/project.edit.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-edit/project.edit.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/project-edit/project.edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/projects/components/project-edit/project.edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataLoaded = false;
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        var projectDetailsEndpoint = this.endPoint + '/' + this.project.id;
        this.http.get(projectDetailsEndpoint).subscribe(function (res) {
            var projectdata = res['data'];
            _this.dataForm.patchValue({
                code: projectdata.code,
                name: projectdata.name,
                start_date: new Date(projectdata.startDate),
                end_date: new Date(projectdata.endDate),
                type: projectdata.type.toString(),
                status: projectdata.status.toString(),
                description: projectdata.description
            });
            _this.dataLoaded = true;
        }, function (err) {
            console.log(err);
            _this.cancelForm();
        });
    };
    ProjectEditComponent.prototype.initForm = function (data) {
        if (data === void 0) { data = {}; }
        this.dataForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['']
        });
    };
    ProjectEditComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id;
        this.http.post(endpoint, dataForm.value).subscribe(function (res) {
            _this.formResult.emit(res);
        }, function (err) {
            var apiErrors = err['error']['errors'];
            for (var errs in apiErrors) {
                if (errs !== undefined) {
                    _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                }
            }
        });
    };
    ProjectEditComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectEditComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProjectEditComponent.prototype, "formResult", void 0);
    ProjectEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-edit',
            template: __webpack_require__(/*! ./project.edit.component.html */ "./src/app/modules/projects/components/project-edit/project.edit.component.html"),
            styles: [__webpack_require__(/*! ./project.edit.component.scss */ "./src/app/modules/projects/components/project-edit/project.edit.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/projects.list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/projects/components/projects.list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title pull-xs-left\">Projects</h3>\n    <div class=\"card-options\">\n      <input type=\"text\" class=\"form-control mr-2\" name=\"keyword\" placeholder=\"Search...\" [(ngModel)]=\"filterControles.keyword\" (input)=\"onFilterValueChanges()\">\n      <button class=\"btn btn-sm btn-outline-secondary\" (click)=\"openCreateProjectWindow()\" *hasPermission=\"'create-projects'\"><i class=\"fe fe-plus-circle\"></i>&nbsp;</button>\n    </div>\n  </div>\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover mb-0\">\n      <thead>\n        <tr>\n          <th width=\"5%\">No.</th>\n          <th>Name</th>\n          <th width=\"10%\">Code</th>\n          <th width=\"10%\">Type</th>\n          <th width=\"10%\">Status</th>\n          <th width=\"5%\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of dataList | objIterator;let i= index\">\n          <td>\n            <span class=\"text-muted\">{{calculateLineNumber(pagination.currentPage, pagination.perPage, i)}}.</span>\n          </td>\n          <td>{{item.name}}</td>\n          <td>{{item.code}}</td>\n          <td>{{item.typeLabel}}</td>\n          <td>{{item.statusLabel}}</td>\n          <td>\n            <a class=\"icon\" [routerLink]=\"[item.id]\" *hasPermission=\"'list-all-projects|list-user-projects'\">\n              <i class=\"fe fe-eye\"></i>\n            </a>\n            <a class=\"icon ml-2\" href=\"javascript:void(0)\" (click)=\"openProjectEditForm(item)\" *ngIf=\"item.permissions.indexOf('can-edit-project') !== -1\">\n              <i class=\"fe fe-edit\"></i>\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<app-pagination *ngIf=\"pagination\" [lastPage]=\"calculateLastPage(pagination.total,pagination.perPage)\" [currentPage]=\"pagination.currentPage\"\n  [pageCount]=\"pagination.perPage\" (changePage)=\"pageChanged($event)\"></app-pagination>\n\n<div class=\"modal fade\" bsModal #modalwindow=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div #dynamicResourceContent></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/projects/components/projects.list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/projects/components/projects.list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/projects.list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/projects/components/projects.list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _project_add_project_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-add/project.add.component */ "./src/app/modules/projects/components/project-add/project.add.component.ts");
/* harmony import */ var _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-edit/project.edit.component */ "./src/app/modules/projects/components/project-edit/project.edit.component.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects.service */ "./src/app/modules/projects/projects.service.ts");
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






// import { ResourcesViewComponent } from './resource-view/resources-view.component';


var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent(componentFactoryResolver, http, projectsService, commonSharedDataStorageService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.http = http;
        this.projectsService = projectsService;
        this.commonSharedDataStorageService = commonSharedDataStorageService;
        this.dataList = [];
        this.pagination = false;
        this.filterControles = { keyword: '' };
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.masterData = this.commonSharedDataStorageService.getSharedData();
        this.getListingData();
    };
    ProjectsListComponent.prototype.getListingData = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var endpoint = this.buildUrlWithFilterParams(this.endPoint + '?' + 'page=' + page);
        this.http.get(endpoint).subscribe(function (res) {
            _this.dataList = res['data'];
            _this.pagination = res['paginate'];
        });
    };
    ProjectsListComponent.prototype.openCreateProjectWindow = function () {
        this.projectCreateFormComp();
        this.taskViewModal.show();
    };
    ProjectsListComponent.prototype.closeModalWindow = function () {
        this.dynamicResourceContent.detach();
        this.dynamicResourceContent.clear();
        this.taskViewModal.hide();
    };
    ProjectsListComponent.prototype.projectCreateFormComp = function () {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_4__["ProjectAddComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.formResult.subscribe(function (res) {
            if (!res['canceled']) {
                _this.getListingData(1);
            }
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    ProjectsListComponent.prototype.openProjectEditForm = function (project) {
        this.projectEditFormComp(project);
        this.taskViewModal.show();
    };
    ProjectsListComponent.prototype.projectEditFormComp = function (project) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEditComponent"]);
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], this.dynamicResourceContent.parentInjector);
        var comp = factory.create(injector);
        comp.instance.project = project;
        comp.instance.formResult.subscribe(function (res) {
            if (!res['canceled']) {
                _this.getListingData(_this.pagination.currentPage);
            }
            _this.closeModalWindow();
        });
        this.dynamicResourceContent.insert(comp.hostView);
        return comp;
    };
    ProjectsListComponent.prototype.calculateLastPage = function (total, perPage) {
        return Math.ceil(total / perPage);
    };
    ProjectsListComponent.prototype.pageChanged = function ($event) {
        this.getListingData($event);
    };
    /**
     * On change call listing page
     */
    ProjectsListComponent.prototype.onFilterValueChanges = function () {
        this.getListingData(1);
    };
    /**
     * Attach query parameters with endURL
     *
     * @param endpointUrl
     */
    ProjectsListComponent.prototype.buildUrlWithFilterParams = function (endpointUrl) {
        for (var key in this.filterControles) {
            // console.log(key, yourobject[key]);
            if (this.filterControles[key] !== '') {
                endpointUrl += '&' + key + '=' + this.filterControles[key];
            }
        }
        return endpointUrl;
    };
    /**
     * Calculate line number based on pagination
     *
     * @param currentPage
     * @param perPage
     */
    ProjectsListComponent.prototype.calculateLineNumber = function (currentPage, perPage, index) {
        return ((currentPage - 1) * perPage) + index + 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalwindow'),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ProjectsListComponent.prototype, "taskViewModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('confirmationdialog'),
        __metadata("design:type", Object)
    ], ProjectsListComponent.prototype, "confirmationdialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicResourceContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ProjectsListComponent.prototype, "dynamicResourceContent", void 0);
    ProjectsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-list',
            template: __webpack_require__(/*! ./projects.list.component.html */ "./src/app/modules/projects/components/projects.list.component.html"),
            styles: [__webpack_require__(/*! ./projects.list.component.scss */ "./src/app/modules/projects/components/projects.list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["CommonSharedDataStorageService"]])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/team-add/team-add.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-add/team-add.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Create Project Team</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"form-group\">\n      <label class=\"form-label\">Name\n        <span class=\"form-required\">*</span>\n      </label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Project Team\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror}\">\n      <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Team name required !</div>\n      <ng-template #nameError>\n        <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n      </ng-template>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"form-label\">Users</div>\n      <ng-select [items]=\"usersList | objIterator\" formControlName=\"users\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\" placeholder=\"Select users\"></ng-select>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-label\">Description</label>\n      <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n    </div>\n  </div>\n  <div class=\"card-footer text-right\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"!dataForm.valid\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/projects/components/team-add/team-add.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-add/team-add.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/team-add/team-add.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-add/team-add.component.ts ***!
  \****************************************************************************/
/*! exports provided: TeamAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamAddComponent", function() { return TeamAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamAddComponent = /** @class */ (function () {
    function TeamAddComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usersList = [];
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    TeamAddComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getAllUsers();
    };
    /**
     * Get all resources
     */
    TeamAddComponent.prototype.getAllUsers = function () {
        var _this = this;
        var resourcesListEndPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].RESOURCES + '?filter=all';
        this.http.get(resourcesListEndPoint).subscribe(function (res) {
            _this.usersList = res['data'];
        });
    };
    /**
     * Init projet team form
     *
     * @param data
     */
    TeamAddComponent.prototype.initForm = function (data) {
        if (data === void 0) { data = {}; }
        this.dataForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [''],
            users: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    /**
     * Submit data
     *
     * @param dataForm
     */
    TeamAddComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/teams';
        this.http.post(endpoint, dataForm.value).subscribe(function (res) {
            _this.formResult.emit(res);
        }, function (err) {
            var apiErrors = err['error']['errors'];
            for (var errs in apiErrors) {
                if (errs !== undefined) {
                    _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                }
            }
        });
    };
    /**
     * For cancel event
     */
    TeamAddComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamAddComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TeamAddComponent.prototype, "formResult", void 0);
    TeamAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-add',
            template: __webpack_require__(/*! ./team-add.component.html */ "./src/app/modules/projects/components/team-add/team-add.component.html"),
            styles: [__webpack_require__(/*! ./team-add.component.scss */ "./src/app/modules/projects/components/team-add/team-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamAddComponent);
    return TeamAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/team-edit/team-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-edit/team-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"card mb-0\" [formGroup]=\"dataForm\" novalidate (ngSubmit)=\"submit(dataForm)\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">Edit Project Team - {{ team.name }}</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"form-group\">\n      <label class=\"form-label\">Name\n        <span class=\"form-required\">*</span>\n      </label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Project Team Name\" [ngClass]=\"{'is-invalid': dataForm.controls.name.errors && (dataForm.controls.name.dirty || dataForm.controls.name.touched) || apiValidatedErrors.name?.haserror}\">\n      <div *ngIf=\"!apiValidatedErrors.name?.haserror else nameError\" class=\"invalid-feedback\">Team name required !</div>\n      <ng-template #nameError>\n        <div *ngFor=\"let err of apiValidatedErrors.name.errors\" class=\"invalid-feedback\"> {{err}}</div>\n      </ng-template>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"form-label\">Users</div>\n      <ng-select [items]=\"usersList | objIterator\" formControlName=\"users\" bindLabel=\"name\" bindValue=\"id\" [multiple]=\"true\" placeholder=\"Select users\"></ng-select>\n    </div>\n    <div class=\"form-group mb-0\">\n      <label class=\"form-label\">Description</label>\n      <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n    </div>\n  </div>\n  <div class=\"card-footer text-right\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"!dataForm.valid\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/projects/components/team-edit/team-edit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-edit/team-edit.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/team-edit/team-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-edit/team-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: TeamEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamEditComponent", function() { return TeamEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamEditComponent = /** @class */ (function () {
    function TeamEditComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usersList = [];
        this.dataLoaded = false;
        this.apiValidatedErrors = {};
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.getAllUsers();
        var teamDetailsEndpoint = this.endPoint + '/' + this.project.id + '/teams/' + this.team.id;
        this.http.get(teamDetailsEndpoint).subscribe(function (res) {
            var teamData = res['data'];
            _this.dataForm.patchValue(teamData);
            _this.dataLoaded = true;
        }, function (err) {
            console.log(err);
            _this.cancelForm();
        });
    };
    /**
     * Init projet team form
     *
     * @param data
     */
    TeamEditComponent.prototype.initForm = function (data) {
        if (data === void 0) { data = {}; }
        this.dataForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [''],
            users: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    /**
     * Get all resources
     */
    TeamEditComponent.prototype.getAllUsers = function () {
        var _this = this;
        var resourcesListEndPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].RESOURCES + '?filter=all';
        this.http.get(resourcesListEndPoint).subscribe(function (res) {
            _this.usersList = res['data'];
        });
    };
    /**
     * Submit data
     *
     * @param dataForm
     */
    TeamEditComponent.prototype.submit = function (dataForm) {
        var _this = this;
        var endpoint = this.endPoint + '/' + this.project.id + '/teams/' + this.team.id;
        this.http.post(endpoint, dataForm.value).subscribe(function (res) {
            _this.formResult.emit(res);
        }, function (err) {
            var apiErrors = err['error']['errors'];
            for (var errs in apiErrors) {
                if (errs !== undefined) {
                    _this.apiValidatedErrors[errs] = { haserror: true, errors: apiErrors[errs] };
                }
            }
        });
    };
    /**
     * Close modal
     */
    TeamEditComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamEditComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamEditComponent.prototype, "team", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TeamEditComponent.prototype, "formResult", void 0);
    TeamEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-edit',
            template: __webpack_require__(/*! ./team-edit.component.html */ "./src/app/modules/projects/components/team-edit/team-edit.component.html"),
            styles: [__webpack_require__(/*! ./team-edit.component.scss */ "./src/app/modules/projects/components/team-edit/team-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamEditComponent);
    return TeamEditComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/components/team-view/team-view.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-view/team-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-0\" *ngIf=\"dataLoaded\">\n  <div class=\"card-header\">\n    <h3 class=\"card-title\">{{ team.name }}</h3>\n    <div class=\"card-options\">\n      <button class=\"btn btn-secondary btn-sm\" type=\"button\" (click)=\"cancelForm()\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"alert alert-secondary\" *ngIf=\"team.description\">{{ team.description }}</div>\n    <div class=\"table-responsive\">\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th colspan=\"3\">\n              <h4 class=\"mb-0\">Team Members</h4>\n            </th>\n          </tr>\n          <tr>\n            <th width=\"5%\">#</th>\n            <th>Name</th>\n            <th width=\"10%\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of team.users ;let i= index\">\n            <td>{{ i + 1 }}</td>\n            <td>{{ usersList[item].name }}</td>\n            <td>\n              <a class=\"icon ml-2\" href=\"javascript:void(0)\" (click)=\"deleteTeamMember(item)\">\n                <i class=\"fe fe-trash\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/projects/components/team-view/team-view.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-view/team-view.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/projects/components/team-view/team-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/projects/components/team-view/team-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: TeamViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamViewComponent", function() { return TeamViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamViewComponent = /** @class */ (function () {
    function TeamViewComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.formResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usersList = [];
        this.dataLoaded = false;
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].PROJECTS;
    }
    TeamViewComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        this.getTeamDetails();
    };
    /**
     * Get current team details
     */
    TeamViewComponent.prototype.getTeamDetails = function () {
        var _this = this;
        var teamDetailsEndpoint = this.endPoint + '/' + this.project.id + '/teams/' + this.team.id;
        this.http.get(teamDetailsEndpoint).subscribe(function (res) {
            _this.team = res['data'];
            _this.dataLoaded = true;
        }, function (err) {
            _this.cancelForm();
        });
    };
    /**
     * Get all resources
     */
    TeamViewComponent.prototype.getAllUsers = function () {
        var _this = this;
        var resourcesListEndPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["ApplicationConstant"].RESOURCES + '?filter=all';
        this.http.get(resourcesListEndPoint).subscribe(function (res) {
            _this.usersList = res['data'];
        });
    };
    /**
     * Close modal
     */
    TeamViewComponent.prototype.cancelForm = function () {
        var emitData = { canceled: true };
        this.formResult.emit(emitData);
    };
    /**
     * Delete team member
     *
     * @param user - ID of the user to be removed.
     */
    TeamViewComponent.prototype.deleteTeamMember = function (user) {
        var _this = this;
        var deleteTeamMemberEndPoint = this.endPoint + '/' + this.project.id + '/teams/' + this.team.id + '/members';
        var postObject = {
            params: { users: [user] }
        };
        this.http.delete(deleteTeamMemberEndPoint, postObject).subscribe(function (res) {
            _this.getTeamDetails();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamViewComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamViewComponent.prototype, "team", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TeamViewComponent.prototype, "formResult", void 0);
    TeamViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-view',
            template: __webpack_require__(/*! ./team-view.component.html */ "./src/app/modules/projects/components/team-view/team-view.component.html"),
            styles: [__webpack_require__(/*! ./team-view.component.scss */ "./src/app/modules/projects/components/team-view/team-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamViewComponent);
    return TeamViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/projects/projects.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http/interceptor/interceptor */ "./src/app/shared/http/interceptor/interceptor.ts");
/* harmony import */ var _projects_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.routing */ "./src/app/modules/projects/projects.routing.ts");
/* harmony import */ var _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared-services-and-components-module/shared-services-and-components-module */ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts");
/* harmony import */ var _components_projects_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects.list.component */ "./src/app/modules/projects/components/projects.list.component.ts");
/* harmony import */ var _components_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-add/project.add.component */ "./src/app/modules/projects/components/project-add/project.add.component.ts");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-edit/project.edit.component */ "./src/app/modules/projects/components/project-edit/project.edit.component.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects.service */ "./src/app/modules/projects/projects.service.ts");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/project-detail/project-detail.component */ "./src/app/modules/projects/components/project-detail/project-detail.component.ts");
/* harmony import */ var _components_team_add_team_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/team-add/team-add.component */ "./src/app/modules/projects/components/team-add/team-add.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _components_team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/team-edit/team-edit.component */ "./src/app/modules/projects/components/team-edit/team-edit.component.ts");
/* harmony import */ var _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/team-view/team-view.component */ "./src/app/modules/projects/components/team-view/team-view.component.ts");
/* harmony import */ var _components_iteration_add_iteration_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/iteration-add/iteration-add.component */ "./src/app/modules/projects/components/iteration-add/iteration-add.component.ts");
/* harmony import */ var _components_iteration_edit_iteration_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/iteration-edit/iteration-edit.component */ "./src/app/modules/projects/components/iteration-edit/iteration-edit.component.ts");
/* harmony import */ var _components_iteration_view_iteration_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/iteration-view/iteration-view.component */ "./src/app/modules/projects/components/iteration-view/iteration-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                _projects_routing__WEBPACK_IMPORTED_MODULE_6__["ProjectsRouting"],
                _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedServicesAndComponentsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]
            ],
            declarations: [
                _components_projects_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsListComponent"],
                _components_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_9__["ProjectAddComponent"],
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProjectEditComponent"],
                _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProjectDetailComponent"],
                _components_team_add_team_add_component__WEBPACK_IMPORTED_MODULE_13__["TeamAddComponent"],
                _components_team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_15__["TeamEditComponent"],
                _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_16__["TeamViewComponent"],
                _components_iteration_add_iteration_add_component__WEBPACK_IMPORTED_MODULE_17__["IterationAddComponent"],
                _components_iteration_edit_iteration_edit_component__WEBPACK_IMPORTED_MODULE_18__["IterationEditComponent"],
                _components_iteration_view_iteration_view_component__WEBPACK_IMPORTED_MODULE_19__["IterationViewComponent"]
            ],
            entryComponents: [
                _components_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_9__["ProjectAddComponent"],
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProjectEditComponent"],
                _components_team_add_team_add_component__WEBPACK_IMPORTED_MODULE_13__["TeamAddComponent"],
                _components_team_edit_team_edit_component__WEBPACK_IMPORTED_MODULE_15__["TeamEditComponent"],
                _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_16__["TeamViewComponent"],
                _components_iteration_add_iteration_add_component__WEBPACK_IMPORTED_MODULE_17__["IterationAddComponent"],
                _components_iteration_edit_iteration_edit_component__WEBPACK_IMPORTED_MODULE_18__["IterationEditComponent"],
                _components_iteration_view_iteration_view_component__WEBPACK_IMPORTED_MODULE_19__["IterationViewComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_9__["ProjectAddComponent"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_5__["AppInterceptor"], multi: true },
                _projects_service__WEBPACK_IMPORTED_MODULE_11__["ProjectsService"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/modules/projects/projects.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/projects/projects.routing.ts ***!
  \******************************************************/
/*! exports provided: ProjectsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRouting", function() { return ProjectsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_projects_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/projects.list.component */ "./src/app/modules/projects/components/projects.list.component.ts");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project-detail/project-detail.component */ "./src/app/modules/projects/components/project-detail/project-detail.component.ts");



var routes = [
    { path: '', component: _components_projects_list_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsListComponent"] },
    { path: ':id', component: _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProjectDetailComponent"] },
];
var ProjectsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/projects/projects.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/projects/projects.service.ts ***!
  \******************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
    }
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-projects-projects-module.js.map