(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-calendar-calendar-module"],{

/***/ "./node_modules/ng2-select/index.js":
/*!******************************************!*\
  !*** ./node_modules/ng2-select/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./select/common */ "./node_modules/ng2-select/select/common.js"));
__export(__webpack_require__(/*! ./select/off-click */ "./node_modules/ng2-select/select/off-click.js"));
__export(__webpack_require__(/*! ./select/select.module */ "./node_modules/ng2-select/select/select.module.js"));
__export(__webpack_require__(/*! ./select/select */ "./node_modules/ng2-select/select/select.js"));
__export(__webpack_require__(/*! ./select/select-item */ "./node_modules/ng2-select/select/select-item.js"));
__export(__webpack_require__(/*! ./select/select-pipes */ "./node_modules/ng2-select/select/select-pipes.js"));


/***/ }),

/***/ "./node_modules/ng2-select/ng2-select.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-select/ng2-select.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-select/index.js"));


/***/ }),

/***/ "./node_modules/ng2-select/select/common.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-select/select/common.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ "./node_modules/ng2-select/select/off-click.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng2-select/select/off-click.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ "./node_modules/ng2-select/select/select-item.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-select/select/select-item.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ "./node_modules/ng2-select/select/select-pipes.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-select/select/select-pipes.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ng2-select/select/common.js");
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-select/select/select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var select_item_1 = __webpack_require__(/*! ./select-item */ "./node_modules/ng2-select/select/select-item.js");
var select_pipes_1 = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/ng2-select/select/common.js");
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.validate = function (c) {
        var controlValue = c ? c.value : [];
        if (!controlValue) {
            controlValue = [];
        }
        return (controlValue.length > 0) ? null : {
            ng2SelectEmptyError: {
                valid: false
            }
        };
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        },
                        {
                            provide: forms_1.NG_VALIDATORS,
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            multi: true,
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ "./node_modules/ng2-select/select/select.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-select/select/select.module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var select_1 = __webpack_require__(/*! ./select */ "./node_modules/ng2-select/select/select.js");
var select_pipes_1 = __webpack_require__(/*! ./select-pipes */ "./node_modules/ng2-select/select/select-pipes.js");
var off_click_1 = __webpack_require__(/*! ./off-click */ "./node_modules/ng2-select/select/off-click.js");
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js ***!
  \******************************************************************************/
/*! exports provided: PerfectScrollbarComponent, PerfectScrollbarDirective, Geometry, Position, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfig, PerfectScrollbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function() { return PerfectScrollbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function() { return PerfectScrollbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function() { return PERFECT_SCROLLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function() { return PerfectScrollbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function() { return PerfectScrollbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
var /** @type {?} */ PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var /** @type {?} */ key in config) {
            this[/** @type {?} */ (key)] = config[/** @type {?} */ (key)];
        }
    };
    return PerfectScrollbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(function () {
                _this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](_this.elementRef.nativeElement, config_1);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function (entries, observer) {
                    _this.update();
                });
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    var /** @type {?} */ eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this.elementRef.nativeElement, eventType)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        _this[eventName].emit(event);
                    });
                });
            });
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(function () {
                if (_this.instance) {
                    _this.instance.destroy();
                }
            });
            this.instance = null;
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular(function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        });
                    }
                    catch (/** @type {?} */ error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
    function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
    function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
    function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var /** @type {?} */ element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (qs, offset, speed) {
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            var /** @type {?} */ elementPos = element.getBoundingClientRect();
            var /** @type {?} */ scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollLeft'];
                var /** @type {?} */ position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollTop'];
                var /** @type {?} */ position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    function (target, value, speed) {
        var _this = this;
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            var /** @type {?} */ oldValue = this.elementRef.nativeElement[target];
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var /** @type {?} */ newValue_1 = 0;
            var /** @type {?} */ scrollCount_1 = 0;
            var /** @type {?} */ oldTimestamp_1 = performance.now();
            var /** @type {?} */ oldValue_1 = this.elementRef.nativeElement[target];
            var /** @type {?} */ cosParameter_1 = (oldValue_1 - value) / 2;
            var /** @type {?} */ step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this.animation = window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] }
    ];
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERFECT_SCROLLBAR_CONFIG,] },] },
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['perfectScrollbar',] },],
        "psScrollY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollX": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollLeft": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollRight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psYReachEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psYReachStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psXReachEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psXReachStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PerfectScrollbarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (a, b) { return (a === b && !_this.stateTimeout); }))
                .subscribe(function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout(function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(function () {
                if (_this.directiveRef) {
                    var /** @type {?} */ element = _this.directiveRef.elementRef.nativeElement;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'wheel')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var /** @type {?} */ scrollDeltaX = event.deltaX;
                            var /** @type {?} */ scrollDeltaY = event.deltaY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'touchmove')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var /** @type {?} */ scrollPositionX = event.touches[0].clientX;
                            var /** @type {?} */ scrollPositionY = event.touches[0].clientY;
                            var /** @type {?} */ scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                            var /** @type {?} */ scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            _this.scrollPositionX = scrollPositionX;
                            _this.scrollPositionY = scrollPositionY;
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-scroll-x')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'x'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-scroll-y')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'y'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-x-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'right'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-y-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'bottom'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-x-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'left'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-y-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'top'; })))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                            _this.stateUpdate.next(event.state);
                        }
                    });
                }
            });
            window.setTimeout(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        _this.directiveRef[eventName] = _this[eventName];
                    }
                });
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var /** @type {?} */ element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (event, deltaX, deltaY) {
        this.interaction = true;
        var /** @type {?} */ scrollDirectionX = (deltaX < 0) ? -1 : 1;
        var /** @type {?} */ scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    PerfectScrollbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'perfect-scrollbar',
                    exportAs: 'ngxPerfectScrollbar',
                    template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto; }\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent; }\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6; }\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9; }\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px; }\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important; } }\n\n/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\nperfect-scrollbar {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  perfect-scrollbar[hidden] {\n    display: none; }\n  perfect-scrollbar[fxflex] {\n    display: flex;\n    flex-direction: column;\n    -webkit-box-orient: column;\n    -webkit-box-direction: column;\n    height: auto;\n    min-width: 0;\n    min-height: 0; }\n    perfect-scrollbar[fxflex] > .ps {\n      flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n      width: auto;\n      height: auto;\n      min-width: 0;\n      min-height: 0; }\n  perfect-scrollbar[fxlayout] > .ps,\n  perfect-scrollbar[fxlayout] > .ps > .ps-content {\n    display: flex;\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    -webkit-box-flex: 1;\n    align-item: inherit;\n    place-content: inherit;\n    -webkit-box-pack: inherit;\n    -webkit-box-align: inherit;\n    flex-direction: inherit;\n    -webkit-box-orient: inherit;\n    -webkit-box-direction: inherit;\n    width: 100%;\n    height: 100%; }\n  perfect-scrollbar[fxlayout=\"row\"] > .ps,\n  perfect-scrollbar[fxlayout=\"row\"] > .ps > .ps-content {\n    flex-direction: row !important;\n    -webkit-box-orient: row !important;\n    -webkit-box-direction: row !important; }\n  perfect-scrollbar[fxlayout=\"column\"] > .ps,\n  perfect-scrollbar[fxlayout=\"column\"] > .ps > .ps-content {\n    flex-direction: column !important;\n    -webkit-box-orient: column !important;\n    -webkit-box-direction: column !important; }\n  perfect-scrollbar > .ps {\n    position: static;\n    display: block;\n    width: inherit;\n    height: inherit;\n    max-width: inherit;\n    max-height: inherit; }\n    perfect-scrollbar > .ps > .ps-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: block;\n      overflow: hidden;\n      pointer-events: none; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        position: absolute;\n        opacity: 0;\n        transition: opacity 300ms ease-in-out; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        left: 0;\n        min-width: 100%;\n        min-height: 24px; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        top: 0;\n        min-width: 24px;\n        min-height: 100%; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n        top: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n        left: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        right: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        bottom: 0; }\n    perfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n      top: 0 !important;\n      right: 0 !important;\n      left: auto !important;\n      width: 10px;\n      cursor: default;\n      transition: width 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover {\n        width: 15px; }\n    perfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n      top: auto !important;\n      bottom: 0 !important;\n      left: 0 !important;\n      height: 10px;\n      cursor: default;\n      transition: height 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover {\n        height: 15px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n      margin: 0 0 10px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n      margin: 0 10px 0 0; }\n    perfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {\n      opacity: 0.9;\n      background-color: #eee; }\n    perfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n      opacity: 0.9;\n      background-color: #eee; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n    opacity: 1;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n    opacity: 1;\n    background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n    opacity: 1;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n    opacity: 1;\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n    background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n    background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n    background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n    background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n      opacity: 1; }\n\n/*# sourceMappingURL=perfect-scrollbar.component.css.map */"]
                }] }
    ];
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePSClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoPropagation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ps-show-limits',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollIndicators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ps-show-active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "psScrollY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollX": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollLeft": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psScrollRight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psYReachEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psYReachStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psXReachEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "psXReachStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "directiveRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [PerfectScrollbarDirective,] },],
    };
    return PerfectScrollbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarModule = /** @class */ (function () {
    function PerfectScrollbarModule() {
    }
    PerfectScrollbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
                },] }
    ];
    return PerfectScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-perfect-scrollbar.es5.js.map


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

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

/***/ "./src/app/modules/calendar/calendar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/calendar/calendar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/calendar/calendar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/calendar/calendar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/calendar/calendar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/calendar/calendar.component.ts ***!
  \********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
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


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    /**
     *
     * To initialize the calendar componenet.
     * @memberof CalendarComponent
     */
    CalendarComponent.prototype.ngOnInit = function () { };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/modules/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/modules/calendar/calendar.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/modules/calendar/calendar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/calendar/calendar.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "./src/app/modules/calendar/calendar.component.ts");
/* harmony import */ var _calendar_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/calendar-view.component */ "./src/app/modules/calendar/calendar/calendar-view.component.ts");
/* harmony import */ var _calendar_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.routing */ "./src/app/modules/calendar/calendar.routing.ts");
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/draggable.directive */ "./src/app/modules/calendar/directives/draggable.directive.ts");
/* harmony import */ var _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/droppable.directive */ "./src/app/modules/calendar/directives/droppable.directive.ts");
/* harmony import */ var _directives_slidable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/slidable.directive */ "./src/app/modules/calendar/directives/slidable.directive.ts");
/* harmony import */ var _directives_allocation_item_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/allocation-item.directive */ "./src/app/modules/calendar/directives/allocation-item.directive.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/http/interceptor/interceptor */ "./src/app/shared/http/interceptor/interceptor.ts");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar.service */ "./src/app/modules/calendar/calendar.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_select_ng2_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-select/ng2-select */ "./node_modules/ng2-select/ng2-select.js");
/* harmony import */ var ng2_select_ng2_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_select_ng2_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/shared-services-and-components-module/shared-services-and-components-module */ "./src/app/shared/shared-services-and-components-module/shared-services-and-components-module.ts");
/* harmony import */ var _pipes_counter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/counter.pipe */ "./src/app/modules/calendar/pipes/counter.pipe.ts");
/* harmony import */ var _pipes_sorthelper_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/sorthelper.pipe */ "./src/app/modules/calendar/pipes/sorthelper.pipe.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 0.09
};
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calendar_routing__WEBPACK_IMPORTED_MODULE_4__["CalendarRouting"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ng2_select_ng2_select__WEBPACK_IMPORTED_MODULE_15__["SelectModule"],
                _shared_shared_services_and_components_module_shared_services_and_components_module__WEBPACK_IMPORTED_MODULE_16__["SharedServicesAndComponentsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"]
            ],
            declarations: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"],
                _calendar_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarViewComponent"],
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_5__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_6__["DroppableDirective"],
                _directives_slidable_directive__WEBPACK_IMPORTED_MODULE_7__["SlideAbleDirective"],
                _directives_allocation_item_directive__WEBPACK_IMPORTED_MODULE_8__["AllocationItemDirective"],
                _shared__WEBPACK_IMPORTED_MODULE_9__["KeysPipe"],
                _pipes_counter_pipe__WEBPACK_IMPORTED_MODULE_17__["CounterPipe"],
                _pipes_sorthelper_pipe__WEBPACK_IMPORTED_MODULE_18__["SortHelperPipe"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _shared_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_11__["AppInterceptor"], multi: true },
                _calendar_service__WEBPACK_IMPORTED_MODULE_12__["CalendarService"]
            ],
            bootstrap: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/modules/calendar/calendar.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/calendar/calendar.routing.ts ***!
  \******************************************************/
/*! exports provided: CalendarRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRouting", function() { return CalendarRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calendar_calendar_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar-view.component */ "./src/app/modules/calendar/calendar/calendar-view.component.ts");


var routes = [
    {
        path: '', component: _calendar_calendar_view_component__WEBPACK_IMPORTED_MODULE_1__["CalendarViewComponent"],
    },
    { path: 'start/:start/end/:end', component: _calendar_calendar_view_component__WEBPACK_IMPORTED_MODULE_1__["CalendarViewComponent"] }
];
var CalendarRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/calendar/calendar.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/calendar/calendar.service.ts ***!
  \******************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
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

var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.getData = function () {
    };
    CalendarService.prototype.validateDateDate = function (dateString) {
        var timestamp = Date.parse(dateString);
        if (isNaN(timestamp) === false) {
            return new Date(timestamp);
        }
        return false;
    };
    CalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/modules/calendar/calendar/calendar-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/calendar/calendar/calendar-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-header\"></div> -->\n<div class=\"row\" *ngIf=\"calenderDataStatus\" [ngClass]=\"{'sticky-active':fixedTop}\">\n  <div class=\"col-2 col-md-2\" *ngIf=\"sidebarData?.visibility\">\n\n    <div class=\"left-col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Team</h3>\n        </div>\n        <perfect-scrollbar style=\"max-height: 30vh;\">\n          <ul class=\"nested-list\">\n            <li *ngFor=\"let teamId of workingSidebarData?.teams;let i= index\">\n              <span class=\"list-name\" (click)=\"toggleClassTeam(i)\">\n                {{teams[teamId].name}}\n              </span>\n              <i class=\"t-icon fe\" (click)=\"toggleClassTeam(i)\" [ngClass]=\"menuArrayTeam[i] ? 'fe-chevron-down' : 'fe-chevron-left'\"></i>\n              <ul class=\"o-auto\" [ngClass]=\"{'active': menuArrayTeam[i]}\">\n                <li *ngFor=\"let resourceId of teams[teamId].users |sorthelper:users:'name'\" [appDraggable]=\"users[resourceId]\">\n                  <span [appAllocationItem]=\"users[resourceId]\"></span>{{ users[resourceId].name }}\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </perfect-scrollbar>\n\n\n\n\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Iteration</h3>\n        </div>\n        <perfect-scrollbar style=\"max-height: 30vh;\">\n          <ul class=\"nested-list\">\n            <li *ngFor=\"let projectId of workingSidebarData?.projects;let i= index\">\n              <span class=\"list-name\" (click)=\"toggleClassProjects(i)\">\n                {{projects[projectId]?.name}}\n              </span>\n              <i class=\"t-icon fe\" (click)=\"toggleClassProjects(i)\" [ngClass]=\"menuArrayProjects[i] ? 'fe-chevron-down' : 'fe-chevron-left'\"></i>\n\n              <ul class=\"o-auto\" [ngClass]=\"{'active': menuArrayProjects[i]}\">\n                <li *ngFor=\"let sprintId of projects[projectId]?.sprints\">\n                  {{ sprints[sprintId].name }}\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </perfect-scrollbar>\n      </div>\n    </div>\n  </div>\n\n  <div [ngClass]=\"{'col-10 col-md-10':sidebarData?.visibility,'col-md-12':!sidebarData?.visibility}\">\n    <div class=\"right-col\">\n      <div class=\"calendar-header-wrap\">\n        <div class=\"view-switcher\">\n          <form>\n            <div class=\"form-group\">\n              <div class=\"selectgroup\">\n                <label class=\"selectgroup-item\">\n                  <input type=\"radio\" name=\"value\" [(ngModel)]=\"currentViewType\" value=\"calendar\" class=\"selectgroup-input\">\n                  <span class=\"selectgroup-button\">Planner</span>\n                </label>\n                <label class=\"selectgroup-item\">\n                  <input type=\"radio\" name=\"value\" [(ngModel)]=\"currentViewType\" value=\"user\" class=\"selectgroup-input\" checked=\"\">\n                  <span class=\"selectgroup-button\">Allocations</span>\n                </label>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"calendar-header\">\n              <form [formGroup]=\"calendarFilterForm\">\n                <div class=\"filter-date\">\n                  <input type=\"text\" class=\"form-control date-range-field\" bsDatepicker #drp=\"bsDatepicker\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD', containerClass: 'theme-default' }\"\n                    placeholder=\"Pick a date\" formControlName=\"range\" />\n                  <button type=\"button\" class=\"btn btn-icon btn-secondary\" [attr.aria-expanded]=\"drp.isOpen\" (click)=\"drp.toggle()\">\n                    <i class=\"fe fe-calendar\"></i>\n                  </button>\n                </div>\n                <div class=\"week-nav\">\n                  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                    <button (click)=\"navigateWeeks('-')\" class=\"btn btn-secondary\">\n                      <i class=\"fe fe-arrow-left\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary\">Week {{currentCalendarWeek}}</button>\n                    <button (click)=\"navigateWeeks('+')\" class=\"btn btn-secondary\">\n                      <i class=\"fe fe-arrow-right\"></i>\n                    </button>\n                  </div>\n                </div>\n\n                <div class=\"calendar-date-dis\"> {{ currentCalendarWeekStart | date }} - {{ currentCalendarWeekEnd | date }}</div>\n                <div class=\"other-filters\" #dummyClick>\n                  <ng-select *ngIf=\"currentViewType === 'user'\" [allowClear]=\"true\" [items]=\"technologySelect\" placeholder=\"Select Skill\" formControlName=\"technology\"\n                    (selected)=\"selectedTechnology($event)\" (removed)=\"removedTechnology($event)\"></ng-select>\n                  <ng-select [allowClear]=\"true\" [items]=\"projectSelect\" placeholder=\"Select Project\" formControlName=\"project\" (selected)=\"selectedProject($event)\"\n                    (removed)=\"removedProject($event)\"></ng-select>\n                  <ng-container *ngIf=\"currentViewType === 'user'\">\n\n                    <ng-select [allowClear]=\"true\" [items]=\"teamSelect\" placeholder=\"Select Team\" formControlName=\"team\" (selected)=\"selectedTeam($event)\"\n                      (removed)=\"removedTeam($event)\"></ng-select>\n                    <div class=\"advanced-filters\" *ngIf=\"calendarFilterForm.value.team?.length\">\n                      <ng-select [allowClear]=\"true\" [items]=\"resourceSelect\" placeholder=\"Select User\" formControlName=\"resource\" (selected)=\"selectedResource($event)\"\n                        (removed)=\"removedResource($event)\"></ng-select>\n                    </div>\n                  </ng-container>\n                </div>\n\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card main-calendar-view\" *ngIf=\"currentViewType === 'calendar'\">\n        <div class=\"card-body\">\n          <div class=\"calendar\">\n            <div class=\"calendar-body\">\n              <div class=\"dimmer\">\n                <div class=\"loader\"></div>\n                <div class=\"dimmer-content\">\n                  <div class=\"calendar-content\">\n                    <div class=\"date-header\">\n                      <!-- <div class=\"project-head\">Projects</div> -->\n                      <div class=\"date-wrap\">\n                        <ul class=\"date-list\">\n                          <li *ngFor=\"let date of dateArray\" [class.highlight-day]=\"(date | date:'E M/d')===(currentDate | date:'E M/d')\" [style.width.%]=\"columnWidth\">\n                            {{date | date:'E M/d' }}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    <ul class=\"project-list\">\n                      <ng-container *ngFor=\"let counter of  [workingCalendarData.projects | counterPipe]\">\n                        {{ counter.reset() }}\n                        <ng-container *ngIf=\"workingCalendarData.projects.length; else noProjects\">\n                          <li *ngFor=\" let projectId of workingCalendarData.projects; let i=index; \">\n                            <span class=\"project-details \">\n                              <span class=\"project-name\">\n                                {{projects[projectId]?.name}}\n                              </span>\n                            </span>\n                            <div class=\"sprint-wrap \">\n                              <ul class=\"sprints \">\n                                <li *ngFor=\"let sprintId of projects[projectId]?.sprints; let j=index; \">\n                                  <div class=\"slider-track \">\n                                    <div class=\"slider \" [ngClass]=\"'bg-color-'+ (counter.inc() % 5)\" [ngStyle]=\"{\n                              'width.%':getEndDateOffset(calendarData.startDate, calendarData.endDate, sprints[sprintId].startDate, sprints[sprintId].endDate)\n                              * columnWidth, 'margin-left.%':getOffset(calendarData.startDate,sprints[sprintId].startDate) * columnWidth} \">\n                                      <div class=\"sprint-name \">{{sprints[sprintId].name}}</div>\n                                      <ng-container *ngFor=\"let dailyalloc of sprints[sprintId].assignments; let allocIndex=index \">\n                                        <ng-container *ngIf=\"allocIndex>= getOffset(calendarData.startDate,sprints[sprintId].startDate) && allocIndex\n                              < (getOffset(calendarData.startDate,sprints[sprintId].startDate)\n                                +getEndDateOffset(calendarData.startDate, calendarData.endDate, sprints[sprintId].startDate, sprints[sprintId].endDate)) \">\n                                          <ul class=\"assignee-field \" [ngClass]=\"{ 'stacked': false } \" [appDroppable]=\"item\n                                \" (dropEvent)=\"addResource($event,allocIndex,sprintId) \" [style.width.%]=\"columnWidth \">\n\n                                            <ng-container *ngFor=\"let resourceId of dailyalloc|sorthelper:users:'name'\">\n                                              <li [appDraggable]=\"users[resourceId] \" [clone]=\"false\" [containerData]=\"{sprintId:sprintId,dayNo:allocIndex} \">\n                                                <span [appAllocationItem]=\"users[resourceId]\"></span>\n                                                {{ users[resourceId].name }}\n                                                <button type=\"button \" class=\"btn btn-icon btn-primary btn-secondary remove-btn\n                                \" (click)=\"removeResource(resourceId,allocIndex,sprintId) \">\n                                                  <i class=\"fe fe-x-circle \"></i>\n                                                </button>\n                                              </li>\n                                            </ng-container>\n                                            <span *ngIf=\"dailyalloc.length > 4\" class=\"expand-collapse-btn\" #self (click)=\"expandCollapse($event,self)\">\n                                              <span class=\"expand-label\">\n                                                <i class=\"fe fe-more-horizontal\"></i> {{dailyalloc.length - 4}} more</span>\n                                              <span class=\"collapse-label\">\n                                                <i class=\"fe fe-chevrons-up\"></i>\n                                              </span>\n                                            </span>\n\n                                          </ul>\n                                        </ng-container>\n                                      </ng-container>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ul>\n                            </div>\n                          </li>\n                        </ng-container>\n                        <ng-template #noProjects>\n                          No projects Available\n                        </ng-template>\n\n                      </ng-container>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card user-view\" *ngIf=\"currentViewType === 'user'\">\n        <div class=\"card-body\">\n          <div class=\"calendar-assignments\">\n            <div class=\"assigned-users\" *ngFor=\"let user of workingUserData | objIterator; let i = index;\">\n              <div class=\"list-name align-middle\">\n                <span [appAllocationItem]=\"user\"></span>\n                <span class=\"title\">{{user.name}}</span>\n              </div>\n              <ul class=\"sprint-list\">\n                <ng-container *ngFor=\"let sprint of user.sprints; let j = index;\">\n                  <li class=\"sprint-item\">\n                    <h4 class=\"mb-1\">{{ sprintDetails(sprint).sprintName }}</h4>\n                    <small class=\"text-danger\">{{ sprintDetails(sprint).projectName }}</small>\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<app-informationdialog #informationDialog></app-informationdialog>\n"

/***/ }),

/***/ "./src/app/modules/calendar/calendar/calendar-view.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/calendar/calendar/calendar-view.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.nested-list {\n  max-height: 40vh; }\n  ul.nested-list,\n  ul.nested-list ul {\n    padding-left: 0;\n    margin: 0;\n    list-style: none; }\n  ul.nested-list > li {\n    cursor: pointer;\n    position: relative; }\n  ul.nested-list > li:hover {\n      background: #e5e5e5; }\n  ul.nested-list > li .list-name {\n      margin-top: -1px;\n      border-top: 1px solid rgba(0, 40, 100, 0.12);\n      border-bottom: 1px solid rgba(0, 40, 100, 0.12);\n      font-size: 12px;\n      padding: 0.4rem 1.5rem 0.4rem 0.5rem; }\n  ul.nested-list > li ul {\n      display: none;\n      background: #f5f5f5; }\n  ul.nested-list > li ul li {\n        padding: 0.25rem 0.5rem 0.25rem 0.75rem;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        cursor: auto;\n        font-size: 12px;\n        line-height: 1.2rem; }\n  ul.nested-list > li ul li .avatar-sm {\n          width: 1.2rem;\n          height: 1.2rem;\n          line-height: 1.2rem; }\n  ul.nested-list > li ul li[draggable=\"true\"] {\n          cursor: -webkit-grab;\n          cursor: grab; }\n  ul.nested-list > li ul.active {\n        display: block; }\n  ul.nested-list > li .t-icon {\n      position: absolute;\n      right: 5px;\n      top: 12px;\n      top: 10px;\n      font-size: 13px; }\n  ul.nested-list .list-name {\n    padding: 0.5rem 1.5rem 0.5rem 0.5rem;\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  ul.nested-list .avatar {\n    margin-right: 0.5rem; }\n  .calendar-content {\n  overflow: hidden; }\n  .calendar-content:after {\n    content: '';\n    clear: both;\n    display: table; }\n  .calendar-content .project-details,\n  .calendar-content .project-head {\n    display: block; }\n  .calendar-content ul {\n    padding-left: 0;\n    list-style: none;\n    margin: 0; }\n  .calendar-content ul.date-list {\n    display: block;\n    border: 1px solid rgba(0, 40, 100, 0.12);\n    text-align: center; }\n  .calendar-content ul.date-list:after {\n      content: '';\n      clear: both;\n      display: table; }\n  .calendar-content ul.date-list > li {\n      float: left;\n      position: relative; }\n  .calendar-content ul.date-list > li:after {\n        content: \"\";\n        width: 1px;\n        height: 100000px;\n        background: rgba(0, 40, 100, 0.12);\n        position: absolute;\n        right: -1px;\n        top: 0; }\n  .calendar-content ul.date-list .highlight-day {\n      background-color: #b3c7ef;\n      font-weight: bold;\n      color: #495057; }\n  .calendar-content ul.date-list li:not(:last-child) {\n      border-right: 1px solid rgba(0, 40, 100, 0.12); }\n  .calendar-content .project-details {\n    background: #fff;\n    position: relative;\n    margin: 0;\n    padding: 15px 0 0 0;\n    font-weight: 600;\n    color: #616569;\n    letter-spacing: 0.5px;\n    word-spacing: 2px; }\n  .calendar-content .project-details .project-name {\n      padding: 5px 11px;\n      display: inline-block;\n      background: #e0e7f5;\n      position: relative;\n      color: #ba2429; }\n  .calendar-content .project-details .project-name:after {\n      content: \"\";\n      width: 0;\n      height: 0;\n      position: absolute;\n      right: -25px;\n      top: 0;\n      border-right: 25px solid transparent;\n      border-bottom: 32px solid #e0e7f5; }\n  .calendar-content .sprint-wrap {\n    border: 1px solid rgba(0, 40, 100, 0.12); }\n  .calendar-content .assignee-field {\n    padding: 2px 5px;\n    list-style: none;\n    margin-bottom: 0; }\n  .calendar-content .assignee-field > li:nth-child(n+5) {\n      display: none; }\n  .calendar-content .assignee-field.expanded > li:nth-child(n+5) {\n      display: inline-block; }\n  .calendar-content .assignee-field.expanded .collapse-label {\n      display: inline; }\n  .calendar-content .assignee-field.expanded .expand-label {\n      display: none; }\n  .calendar-content .assignee-field .collapse-label {\n      display: none; }\n  .calendar-content .assignee-field .avatar {\n      margin-right: 0.3rem;\n      border: 2px solid #fff; }\n  .calendar-content .assignee-field .avatar-sm {\n      width: 1.2rem;\n      height: 1.2rem;\n      line-height: 1rem;\n      font-size: 10px; }\n  .calendar-content .assignee-field li {\n      background: white;\n      border-radius: 10px;\n      font-size: 0.8rem;\n      line-height: 1.2rem;\n      transition: all 0.2s;\n      border: 1px solid #ddd;\n      max-width: 100%;\n      min-width: 55%;\n      display: inline-block;\n      margin-top: -0.2rem; }\n  .calendar-content .assignee-field.stacked li {\n      width: 1.5rem;\n      height: 1.5rem;\n      overflow: hidden;\n      margin-right: -0.8rem;\n      border-width: 1px;\n      display: inline-block; }\n  .calendar-content .assignee-field.stacked li:nth-child(n+4) {\n        display: none; }\n  .calendar-content .assignee-field.stacked li:last-child {\n        display: inline-block; }\n  .calendar-content .project-list > li:after {\n    content: '';\n    clear: both;\n    display: table; }\n  .calendar-content .sprint-table {\n    border: 0; }\n  .calendar-content .sprint-table tr td {\n      border: 0; }\n  .calendar-content .sprint-table tr td:not(:last-child) {\n      border-right: 1px solid rgba(0, 40, 100, 0.12); }\n  ul.sprints {\n  padding-left: 0;\n  list-style: none;\n  margin: -1px;\n  min-height: 50px; }\n  ul.sprints .sprint-name {\n    position: absolute;\n    top: 5px;\n    left: 10px;\n    font-weight: bold;\n    font-size: 13px; }\n  .slider {\n  display: flex;\n  width: 100%;\n  position: relative;\n  background: rgba(255, 0, 0, 0.05); }\n  .slider:after {\n    content: '';\n    clear: both;\n    display: table; }\n  .slider ul.assignee-field {\n    padding-top: 32px;\n    float: left;\n    flex: 1; }\n  .slider ul.assignee-field > li {\n      position: relative;\n      padding-right: 5px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .slider ul.assignee-field > li:hover {\n        padding-right: 25px; }\n  .slider ul.assignee-field > li:hover .remove-btn {\n          display: inline-block; }\n  .remove-btn {\n  display: none;\n  padding: 0;\n  line-height: initial;\n  background: transparent;\n  border: 0;\n  position: absolute;\n  right: 5px;\n  line-height: inherit;\n  top: 0;\n  min-width: 17px; }\n  .remove-btn:hover, .remove-btn:focus, .remove-btn:active {\n    outline: none; }\n  .calendar-header .date-range-field {\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  opacity: 0; }\n  .calendar-header form {\n  display: flex;\n  justify-content: space-between; }\n  .calendar-assignments .assigned-users {\n  clear: both;\n  min-height: 40px;\n  height: auto;\n  display: flex;\n  align-items: center; }\n  .calendar-assignments .assigned-users .list-name {\n    width: 150px;\n    float: left;\n    padding: 3px;\n    display: flex;\n    align-items: center;\n    margin-right: 15px;\n    border-radius: 15px;\n    background: #fff;\n    border: 1px solid #ccc; }\n  .calendar-assignments .assigned-users .list-name .title {\n      line-height: 1.1;\n      padding-left: 7px; }\n  .calendar-assignments .assigned-users .sprint-list {\n    width: calc(100% - 150px);\n    display: flex;\n    float: left;\n    list-style: none;\n    padding-left: 0;\n    margin-bottom: 0;\n    flex-wrap: wrap; }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item {\n      flex: 20% 0 0;\n      padding: 5px;\n      border: 1px solid #ccc; }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item:not(:first-child) {\n        margin-left: -1px; }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item h4 {\n        font-size: 15px; }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item small {\n        font-size: 13px;\n        line-height: 1.2em;\n        display: block; }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item:nth-child(5n + 1) {\n        background: rgba(2, 1, 1, 0.1); }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item:nth-child(5n + 2) {\n        background: rgba(255, 0, 0, 0.1); }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item:nth-child(5n + 3) {\n        background: rgba(255, 165, 0, 0.1); }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item:nth-child(5n + 4) {\n        background: rgba(0, 0, 255, 0.1); }\n  .calendar-assignments .assigned-users .sprint-list .sprint-item:nth-child(5n + 5) {\n        background: rgba(0, 128, 0, 0.1); }\n  .calendar-date-dis {\n  line-height: 2.5;\n  font-weight: 600;\n  color: #717171; }\n  .bg-color-0 {\n  background: rgba(2, 1, 1, 0.1); }\n  .bg-color-1 {\n  background: rgba(255, 0, 0, 0.1); }\n  .bg-color-2 {\n  background: rgba(255, 165, 0, 0.1); }\n  .bg-color-3 {\n  background: rgba(0, 0, 255, 0.1); }\n  .bg-color-4 {\n  background: rgba(0, 128, 0, 0.1); }\n  @media (min-width: 1280px) {\n  .left-col {\n    width: 176px; } }\n  @media (max-width: 1279px) {\n  .left-col {\n    width: 135px; } }\n  .left-col .card-header {\n  padding: 0.5rem .5rem; }\n  .right-col {\n  position: relative; }\n  @media (min-width: 1280px) {\n    .right-col .calendar-header-wrap {\n      width: 976px; } }\n  @media (max-width: 1279px) {\n    .right-col .calendar-header-wrap {\n      width: 776px; } }\n  @media (min-width: 1280px) {\n  .col-md-12 > .right-col .calendar-header-wrap {\n    width: 1177px; } }\n  @media (max-width: 1279px) {\n  .col-md-12 > .right-col .calendar-header-wrap {\n    width: 936px; } }\n  .sticky-active .left-col,\n.sticky-active .right-col .calendar-header-wrap {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n  @media (max-width: 1200px) {\n    .sticky-active .left-col,\n    .sticky-active .right-col .calendar-header-wrap {\n      position: relative; } }\n  .sticky-active .main-calendar-view {\n  margin-top: 117px; }\n  @media (max-width: 1200px) {\n    .sticky-active .main-calendar-view {\n      margin-top: 0px; } }\n  span.expand-collapse-btn {\n  cursor: pointer;\n  text-align: left;\n  display: block; }\n  span.expand-collapse-btn .fe {\n    vertical-align: middle; }\n  .card-header {\n  min-height: 2rem;\n  background: #b3c7ef; }\n  .card-header .card-title {\n    font-weight: 900; }\n  .main-calendar-view .card-body,\n.calendar-header-wrap .card-body,\n.user-view .card-body {\n  padding: 0.5rem .5rem; }\n  .view-switcher {\n  background: #f5f7fb; }\n  .view-switcher .form-group {\n    margin-bottom: 0; }\n  .view-switcher .selectgroup-item {\n    margin-bottom: 0; }\n  .view-switcher .selectgroup-item:not(:first-child) {\n      padding-left: 25px; }\n  .view-switcher .selectgroup-item:not(:first-child) .selectgroup-button:before {\n        display: inline-block; }\n  .view-switcher .selectgroup-button {\n    border: 0;\n    border-radius: 0;\n    background: #e4e4e4;\n    color: #48484899;\n    font-weight: bold; }\n  .view-switcher .selectgroup-button:after {\n      content: \"\";\n      width: 0;\n      height: 0;\n      position: absolute;\n      right: -25px;\n      top: 0;\n      border-right: 25px solid transparent;\n      border-bottom: 36px solid #e4e4e4; }\n  .view-switcher .selectgroup-button:before {\n      display: none;\n      content: \"\";\n      width: 0;\n      height: 0;\n      border-top: 36px solid #e4e4e4;\n      border-left: 25px solid transparent;\n      position: absolute;\n      left: -25px;\n      top: 0; }\n  .view-switcher .selectgroup-input:checked + .selectgroup-button {\n    background: #b3c7ef;\n    color: #495057;\n    font-weight: bold;\n    outline: none;\n    box-shadow: none; }\n  .view-switcher .selectgroup-input:checked + .selectgroup-button:after {\n      border-bottom: 36px solid #b3c7ef; }\n  .view-switcher .selectgroup-input:checked + .selectgroup-button:before {\n      border-top: 36px solid #b3c7ef; }\n  .assigned-users {\n  padding: 5px; }\n  .assigned-users:nth-child(2n + 1) {\n    background: #edf2fa; }\n  .assigned-users:nth-child(2n) {\n    background: #f5f7fb; }\n  .assigned-users .avatar-sm {\n    width: 1.2rem;\n    height: 1.2rem;\n    line-height: 1.2rem; }\n  .assigned-users .title {\n    font-size: 13px; }\n  .advanced-filters {\n  margin-top: 10px;\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/modules/calendar/calendar/calendar-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/calendar/calendar/calendar-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarViewComponent", function() { return CalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar.service */ "./src/app/modules/calendar/calendar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony import */ var _shared_shared_services_and_components_module_pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared-services-and-components-module/pipes/obj-iterator.pipe */ "./src/app/shared/shared-services-and-components-module/pipes/obj-iterator.pipe.ts");
/* harmony import */ var _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared-services-and-components-module/services/common-shared-data-storage.service */ "./src/app/shared/shared-services-and-components-module/services/common-shared-data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CalendarViewComponent = /** @class */ (function () {
    function CalendarViewComponent(renderer, calendarService, fb, http, objIterator, router, datePipe, route, sharedDataStorage, doc) {
        this.renderer = renderer;
        this.calendarService = calendarService;
        this.fb = fb;
        this.http = http;
        this.objIterator = objIterator;
        this.router = router;
        this.datePipe = datePipe;
        this.route = route;
        this.sharedDataStorage = sharedDataStorage;
        this.doc = doc;
        this.fixedTop = false;
        this.calenderDataStatus = false;
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.teamSelect = [];
        this.resourceSelect = [];
        this.projectSelect = [];
        this.technologySelect = [];
        this.dateArray = [];
        this.menuArrayTeam = [];
        this.menuArrayProjects = [];
        this.currentCalendarWeek = 1;
        this.colorIndexTwo = 0;
        this.colorIndexThree = 0;
        this.currentViewType = 'calendar';
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
        this.endPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstant"].CALENDAR;
        this.projectEndPoint = _shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"] + _shared_constants_constant__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstant"].PROJECTS;
        this.currentDate = new Date();
    }
    CalendarViewComponent.prototype.onWindowScroll = function () {
        // clearTimeout(this.scrollTimer);
        // this.scrollTimer = setTimeout(() => {
        var scrollNum = this.doc.body.scrollTop;
        var top = (window.pageYOffset || this.doc.body.scrollTop) -
            (this.doc.body.clientTop || 0);
        if (top > 200) {
            this.fixedTop = true;
        }
        else {
            this.fixedTop = false;
        }
        // }, 50);
    };
    /**
     *
     * To initialize the calendar componenet.
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFilterForm();
        this.route.params.subscribe(function (data) {
            _this.prepareCalendarView(data);
        });
    };
    CalendarViewComponent.prototype.prepareCalendarView = function (mata) {
        this.loadCalendarData(mata);
        this.onCalenderDateChanges();
        this.masterData = this.sharedDataStorage.getSharedData();
    };
    /**
     * Member function used to load calendar data from server
     * @param {object} mata - An object which contains the mata data required to  load calendar data from server.
     */
    CalendarViewComponent.prototype.loadCalendarData = function (mata) {
        var _this = this;
        var start, end, week = 0;
        if ((mata.start !== undefined &&
            this.calendarService.validateDateDate(mata.start)) ||
            (mata.end !== undefined &&
                this.calendarService.validateDateDate(mata.end))) {
            var thisWeek = this.calculateWeekDates(mata.start);
            start = this.calendarService.validateDateDate(mata.start);
            end = this.calendarService.validateDateDate(mata.end);
            week = thisWeek.week;
        }
        else {
            var thisWeek = this.calculateWeekDates(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
            start = this.calendarService.validateDateDate(thisWeek.start);
            end = this.calendarService.validateDateDate(thisWeek.end);
            week = thisWeek.week;
            this.router.navigate([
                'home',
                'start',
                thisWeek.start,
                'end',
                thisWeek.end
            ]);
        }
        this.currentCalendarWeekStart = start;
        this.currentCalendarWeekEnd = end;
        this.currentCalendarWeek = week;
        var endpoint = this.endPoint +
            '?' +
            'start_date=' +
            this.datePipe.transform(this.currentCalendarWeekStart, 'yyyy-MM-dd') +
            '&end_date=' +
            this.datePipe.transform(this.currentCalendarWeekEnd, 'yyyy-MM-dd');
        this.http.get(endpoint).subscribe(function (res) {
            _this.calendarData = res['calendarData'];
            _this.projects = res['projects'];
            _this.otherProjects = res['otherProjects'];
            _this.users = res['users'];
            _this.teams = res['teams'];
            _this.sidebarData = res['sidebarData'];
            _this.sprints = res['sprints'];
            _this.otherSprints = res['otherSprints'];
            _this.dateArray = _this.createCalendarDates(_this.calendarData.startDate, _this.calendarData.endDate);
            _this.setColumnWidth(_this.dateArray);
            _this.calenderDataStatus = true;
            _this.menuArrayTeam = _this.sidebarData.teams.map(function (x) { return false; });
            _this.menuArrayProjects = _this.sidebarData.projects.map(function (x) { return false; });
            _this.calenderFilterValues();
            _this.resetFilters();
        });
    };
    /**
     * initFilterForm
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.initFilterForm = function () {
        this.calendarFilterForm = this.fb.group({
            range: null,
            technology: null,
            project: null,
            team: null,
            resource: null
        });
    };
    /**
     *
     * Adding resource to an allocated date in a sprint.
     * @param {object} event - An object retruned from the droppable directive.
     * @param {number} dayNo - The allocated day number in a sprint.
     * @param {number} sprintId - The corresponding sprint id.
     * @returns
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.addResource = function (event, dayNo, sprintId) {
        var item = event.data.item;
        var options = event.data.options;
        var currentSprint = this.sprints[sprintId];
        if (options.containerData !== null &&
            dayNo === options.containerData.dayNo &&
            sprintId === options.containerData.sprintId) {
            return;
        }
        var dailyAllocation = this.sprints[sprintId].assignments[dayNo];
        if (dailyAllocation.indexOf(item.id) !== -1) {
            this.informationDialog.presentInformationWindow('This user already assigned !');
            return;
        }
        else {
            if (this.checkIterationAllowed(item.id, currentSprint['team'])) {
                var endpoint = this.projectEndPoint +
                    '/' +
                    currentSprint['projectId'] +
                    '/iterations/' +
                    currentSprint['id'] +
                    '/assign';
                var postData = {
                    date: [this.datePipe.transform(this.dateArray[dayNo], 'yyyy-MM-dd')],
                    users: [item.id]
                };
                var context_1 = this;
                this.http
                    .post(endpoint, postData)
                    .toPromise()
                    .then(function (res) {
                    currentSprint.assignments[dayNo].splice(0, 0, item.id);
                    if (context_1.workingUserData[item.id].sprints.indexOf(currentSprint['id']) === -1) {
                        context_1.users[item.id]['sprints'].splice(0, 0, currentSprint['id']);
                        context_1.workingUserData[item.id].sprints.splice(0, 0, currentSprint['id']);
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
            else {
                this.informationDialog.presentInformationWindow('This user not allowed in this iteration !');
            }
        }
    };
    /**
     *
     * Used to remove a resource from the allocations.
     * @param {number} resourceId - The id of the resource or user.
     * @param {number} dayNo - The allocated day number in a sprint.
     * @param {number} sprintId - The corresponding sprint id.
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.removeResource = function (resourceId, dayNo, sprintId) {
        // let dailyAllocation = this.sprints[sprintId].assignments[dayNo];
        // dailyAllocation.splice(dailyAllocation.indexOf(resourceId), 1);
        var _this = this;
        var currentSprint = this.sprints[sprintId];
        var endpoint = this.projectEndPoint +
            '/' +
            currentSprint['projectId'] +
            '/iterations/' +
            currentSprint['id'] +
            '/remove';
        var onDate = this.datePipe.transform(this.dateArray[dayNo], 'yyyy-MM-dd');
        var postObject = { date: onDate, user: resourceId };
        this.http.post(endpoint, postObject).subscribe(function (res) {
            // this.ngOnInit();
            currentSprint.assignments[dayNo].splice(currentSprint.assignments[dayNo].indexOf(resourceId), 1);
            if (_this.workingUserData[resourceId].sprints.indexOf(currentSprint['id']) !== -1 &&
                !_this.checkAssignmentsFromWeekAssignments(currentSprint.assignments, resourceId)) {
                _this.users[resourceId]['sprints'].splice(_this.users[resourceId]['sprints'].indexOf(currentSprint['id']), 1);
                _this.workingUserData[resourceId].sprints.splice(_this.workingUserData[resourceId].sprints.indexOf(currentSprint['id']), 1);
            }
        });
    };
    /**
     *
     * Supporting function used to check whether the user is assigned in any other dates in a week
     * @param {Array<any>} weekAssignments
     * @param {number} userId
     * @returns {Boolean}
     */
    CalendarViewComponent.prototype.checkAssignmentsFromWeekAssignments = function (weekAssignments, userId) {
        var found = false;
        weekAssignments.forEach(function (allocations) {
            allocations.forEach(function (user) {
                if (userId === user) {
                    found = true;
                }
            });
        });
        return found;
    };
    /**
     *
     * Used to generate string array from strat date to end date.
     * @param {string} startDate - start date of calendar in ISO string format.
     * @param {string} endDate - end date of calendar in ISO string format.
     * @returns {Array<String>} - ISO string array from start date to end date.
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.createCalendarDates = function (startDate, endDate) {
        var dateArray = [startDate];
        var startDateObj = new Date(startDate);
        var endDateObj = new Date(endDate);
        var timeDiff = Math.abs(endDateObj.getTime() - startDateObj.getTime());
        var dayCount = this.getDaysBetween(startDate, endDate) + 1;
        for (var i = 1; i < dayCount; i++) {
            startDateObj.setDate(startDateObj.getDate() + 1);
            dateArray.push(startDateObj.toISOString());
        }
        return dateArray;
    };
    /**
     * Used for getting the diff starting of sprint date with calendar date.
     *
     * @param {string} date1 - date in ISO string format. calendar start date
     * @param {string} date2 - date in ISO string format. sprint start date
     * @returns {number} - The difference between start date of calendar with sprint start date.
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.getOffset = function (date1, date2, offset) {
        if (offset === void 0) { offset = 0; }
        var time1 = new Date(date1).getTime();
        var time2 = new Date(date2).getTime();
        return time1 <= time2 ? this.getDaysBetween(date1, date2) + offset : 0;
    };
    /**
     * Used for getting the number of days to be shown for a sprint
     *
     * @param {string} calendarStartDate - date in ISO string format. calendar start date
     * @param {string} calendarEndDate - date in ISO string format. calendar start date
     * @param {string} sprintStartDate - date in ISO string format. calendar start date
     * @param {string} sprintEndDate - date in ISO string format. calendar start date
     * @returns {number} - Slider width
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.getEndDateOffset = function (calendarStartDate, calendarEndDate, sprintStartDate, sprintEndDate) {
        var startDate = new Date(calendarStartDate).getTime() <
            new Date(sprintStartDate).getTime()
            ? sprintStartDate
            : calendarStartDate;
        var endDate = new Date(calendarEndDate).getTime() > new Date(sprintEndDate).getTime()
            ? sprintEndDate
            : calendarEndDate;
        return this.getOffset(startDate, endDate, 1);
    };
    /**
     *
     * Used for getting the diff in days between start date and end date.
     * @param {string} startDate - start date in ISO string format.
     * @param {string} endDate - end date in ISO string format.
     * @returns {number}
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.getDaysBetween = function (startDate, endDate) {
        var startDateObj = new Date(startDate);
        var endDateObj = new Date(endDate);
        var timeDiff = Math.abs(endDateObj.getTime() - startDateObj.getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24));
    };
    /**
     *
     * Used to set column width of calendar.
     * @param {Array<String>} dateArray -  ISO string array of dates.
     * @memberof CalendarComponent
     */
    CalendarViewComponent.prototype.setColumnWidth = function (dateArray) {
        this.columnWidth = 100 / dateArray.length;
    };
    /**
     * Member function which is called when a calendar date is changed
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.onCalenderDateChanges = function () {
        var _this = this;
        this.calendarFilterForm.controls.range.valueChanges.subscribe(function (res) {
            var calculated = _this.calculateWeekDates(res);
            _this.router.navigate([
                'home',
                'start',
                calculated.start,
                'end',
                calculated.end
            ]);
        });
    };
    /**
     *
     * calculateWeekDates
     * Member function used calculate start and end dates of a week
     * @private
     * @param {string} dateString
     * @returns {Object}
     *
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.calculateWeekDates = function (dateString) {
        var date = new Date(dateString);
        var firstday = new Date(date.setDate(date.getDate() - date.getDay()));
        var lastday = new Date(date.setDate(date.getDate() - date.getDay() + 6));
        var monday = new Date(firstday.setDate(firstday.getDate() + 1));
        var friday = new Date(lastday.setDate(lastday.getDate() - 1));
        var weekStart = this.datePipe.transform(monday, 'yyyy-MM-dd');
        var weekEnd = this.datePipe.transform(friday, 'yyyy-MM-dd');
        var onejan = new Date(date.getFullYear(), 0, 1);
        var week = Math.ceil(((+date - +onejan) / 86400000 + onejan.getDay()) / 7);
        return { start: weekStart, end: weekEnd, week: week };
    };
    /**
     * navigateWeeks
     * Function used to navigate throug weeks views.
     * @param {string} operator
     *
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.navigateWeeks = function (operator) {
        var dateString = '';
        if (operator === '+') {
            var obj = new Date(this.currentCalendarWeekStart.setDate(this.currentCalendarWeekStart.getDate() + 7));
            dateString = this.datePipe.transform(obj, 'yyyy-MM-dd');
        }
        else {
            var obj = new Date(this.currentCalendarWeekStart.setDate(this.currentCalendarWeekStart.getDate() - 7));
            dateString = this.datePipe.transform(obj, 'yyyy-MM-dd');
        }
        var calculated = this.calculateWeekDates(dateString);
        this.calendarFilterForm.reset();
        this.router.navigate([
            'home',
            'start',
            calculated.start,
            'end',
            calculated.end
        ]);
    };
    /**
     * sprintDetails
     * To get the details of a sprint from calendar data by sprint id
     * @param {any} sprint
     * @returns
     *
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.sprintDetails = function (sprint) {
        var sprintObj = this.findSprintObject(sprint);
        var sprintName = sprintObj.name;
        var projectId = sprintObj.projectId;
        var project = this.findProjectOject(projectId);
        var projectName = project.name;
        return { sprintName: sprintName, projectName: projectName };
    };
    /**
     * Used to find find a Project Object by id from both projects and otherProjects records
     * @param {number} id
     * @returns {}
     */
    CalendarViewComponent.prototype.findProjectOject = function (id) {
        return this.projects[id] !== undefined ? this.projects[id] : this.otherProjects[id];
    };
    /**
     * Used to find find a Project Object by id from both sprints and otherSprints records
     * @param {number} id
     * @returns {}
     */
    CalendarViewComponent.prototype.findSprintObject = function (id) {
        return this.sprints[id] !== undefined ? this.sprints[id] : this.otherSprints[id];
    };
    /**
     * Change menu array based on clicked item
     * @param i
     */
    CalendarViewComponent.prototype.toggleClassTeam = function (i) {
        var currentMenuItem = this.menuArrayTeam[i];
        this.menuArrayTeam = this.menuArrayTeam.map(function (x) { return false; });
        if (!currentMenuItem) {
            this.menuArrayTeam[i] = true;
        }
    };
    /**
     * Change menu array based on clicked item
     * @param i
     */
    CalendarViewComponent.prototype.toggleClassProjects = function (i) {
        var currentMenuItem = this.menuArrayProjects[i];
        this.menuArrayProjects = this.menuArrayProjects.map(function (x) { return false; });
        if (!currentMenuItem) {
            this.menuArrayProjects[i] = true;
        }
    };
    /**
     * checkIterationAllowed
     * Member function used to find whether a user is apart of the fiven sprint/iteration collection
     * @param {any} userId
     * @param {any} [sprintTeams=[]]
     * @returns {Boolean}
     *
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.checkIterationAllowed = function (userId, sprintTeams) {
        if (sprintTeams === void 0) { sprintTeams = []; }
        var teamMembers = [];
        var context = this;
        sprintTeams.forEach(function (teamId) {
            var team = context.teams[teamId];
            team.users.forEach(function (user) {
                teamMembers.push(user);
            });
        });
        teamMembers = teamMembers.filter(function (value, index, array) {
            return array.indexOf(value) === index;
        });
        return teamMembers.indexOf(userId) !== -1;
    };
    /**
     * calenderFilterValues
     * Used to fill the filter form values from calendar data and master data storage.
     * @private
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.calenderFilterValues = function () {
        var context = this;
        context.projectSelect = [];
        context.teamSelect = [];
        context.resourceSelect = [];
        context.technologySelect = [];
        var masterTeams = this.masterData.teams;
        var masterTechnologies = this.masterData.technologies;
        this.objIterator.transform(this.projects).forEach(function (element) {
            var pjt = { id: element.id, text: element.name };
            context.projectSelect.push(pjt);
        });
        this.objIterator.transform(masterTeams).forEach(function (element) {
            var team = { id: element.id, text: element.name };
            context.teamSelect.push(team);
        });
        this.objIterator.transform(this.users).forEach(function (element) {
            var user = { id: element.id, text: element.name };
            context.resourceSelect.push(user);
        });
        this.objIterator.transform(masterTechnologies).forEach(function (element) {
            var tech = { id: element.id, text: element.name };
            context.technologySelect.push(tech);
        });
    };
    CalendarViewComponent.prototype.selectedProject = function (event) {
        var projectFieldValue = event.id;
        var projects = [];
        if (projectFieldValue) {
            projects.push(projectFieldValue);
            this.calendarFilterForm.patchValue({
                team: null,
                resource: null,
                technology: null
            });
            this.workingCalendarData.projects = projects;
            this.workingSidebarData.projects = projects;
            this.workingUserData = this.findTeamMembers(this.findProjectTeams(projects));
        }
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.removedProject = function (event) {
        this.resetFilters();
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.selectedTeam = function (event) {
        var _this = this;
        var users = [];
        var resourceSelect = [];
        var teamFieldValue = event.id;
        if (teamFieldValue) {
            this.calendarFilterForm.patchValue({
                project: null,
                resource: null
            });
            var selectedTeams = [];
            var teamUsers = [];
            selectedTeams.push(teamFieldValue);
            selectedTeams.forEach(function (id) {
                var u = _this.masterData.teams[id].team;
                u.forEach(function (i) {
                    if (_this.users.hasOwnProperty(i)) {
                        users.push(i);
                    }
                });
            });
            users.forEach(function (us) {
                if (_this.users.hasOwnProperty(us)) {
                    var user = _this.users[us];
                    var member = { id: user['id'], text: user['name'] };
                    resourceSelect.push(member);
                }
            });
            this.resourceSelect = resourceSelect;
            this.workingUserData = this.findUsersByUserArray(users);
        }
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.removedTeam = function (event) {
        this.resetFilters();
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.selectedResource = function (event) {
        var users = [];
        var currentUser = this.users[event.id];
        this.workingUserData = this.findUsersByUserArray([currentUser['id']]);
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.removedResource = function (event) {
        var currentUser = this.users[event.id];
        this.selectedTeam({ id: currentUser.team });
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.selectedTechnology = function (event) {
        var projectFieldValue = event.id;
        var users = [];
        this.calendarFilterForm.patchValue({
            team: null,
            resource: null,
            project: null
        });
        this.objIterator.transform(this.users).forEach(function (element) {
            if (element.technologies.indexOf(projectFieldValue) !== -1) {
                users.push(element.id);
            }
        });
        this.workingUserData = this.findUsersByUserArray(users);
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.removedTechnology = function (event) {
        this.resetFilters();
        this.dummyClick.nativeElement.click();
    };
    CalendarViewComponent.prototype.findProjectTeams = function (projects) {
        var _this = this;
        var teams = [];
        projects.forEach(function (element) {
            var project = _this.projects[element];
            var sprintsInProject = project.sprints;
            sprintsInProject.forEach(function (id) {
                var sprint = _this.sprints[id];
                var teamsinSprints = sprint.team;
                teamsinSprints.forEach(function (team) {
                    teams.push(team);
                });
            });
        });
        return teams;
    };
    CalendarViewComponent.prototype.findTeamMembers = function (teams) {
        var _this = this;
        var users = {};
        teams.forEach(function (id) {
            var team = _this.teams[id];
            var teamMembers = team.users;
            teamMembers.forEach(function (member) {
                var user = _this.users[member];
                users[member] = _this.users[member];
            });
        });
        return users;
    };
    CalendarViewComponent.prototype.findUsersByUserArray = function (users) {
        var _this = this;
        if (users === void 0) { users = []; }
        var workingUsers = {};
        users.forEach(function (user) {
            workingUsers[user] = _this.users[user];
        });
        return workingUsers;
    };
    /**
     * resetFilters
     * Used to restore all filtered calendar data
     * @private
     *
     * @memberOf CalendarViewComponent
     */
    CalendarViewComponent.prototype.resetFilters = function () {
        this.workingCalendarData = JSON.parse(JSON.stringify(this.calendarData));
        this.workingSidebarData = JSON.parse(JSON.stringify(this.sidebarData));
        this.workingUserData = JSON.parse(JSON.stringify(this.users));
    };
    /**
     * Find Background color for user sprints
     * @param projectIndex
     * @param sprintIndex
     */
    CalendarViewComponent.prototype.findBGColorForUser = function (projectIndex, sprintIndex) {
        this.colorIndexThree = projectIndex === 0 ? 0 : this.colorIndexTwo;
        this.colorIndexTwo = sprintIndex;
        return 'bg-color-' + ((this.colorIndexTwo + sprintIndex) % 5);
    };
    CalendarViewComponent.prototype.expandCollapse = function (event, self) {
        self.parentNode.classList.toggle('expanded');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('informationDialog'),
        __metadata("design:type", Object)
    ], CalendarViewComponent.prototype, "informationDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dummyClick'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CalendarViewComponent.prototype, "dummyClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarViewComponent.prototype, "onWindowScroll", null);
    CalendarViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-view',
            template: __webpack_require__(/*! ./calendar-view.component.html */ "./src/app/modules/calendar/calendar/calendar-view.component.html"),
            styles: [__webpack_require__(/*! ./calendar-view.component.scss */ "./src/app/modules/calendar/calendar/calendar-view.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]]
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_shared_services_and_components_module_pipes_obj_iterator_pipe__WEBPACK_IMPORTED_MODULE_6__["ObjIteratorPipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _shared_shared_services_and_components_module_services_common_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_7__["CommonSharedDataStorageService"],
            Document])
    ], CalendarViewComponent);
    return CalendarViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/calendar/directives/allocation-item.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/calendar/directives/allocation-item.directive.ts ***!
  \**************************************************************************/
/*! exports provided: AllocationItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocationItemDirective", function() { return AllocationItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/constant */ "./src/app/shared/constants/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllocationItemDirective = /** @class */ (function () {
    function AllocationItemDirective(el) {
        this.el = el;
    }
    AllocationItemDirective.prototype.ngOnInit = function () {
        var roles = this.item['roles'];
        var innerHtml = '';
        var innerClass = 'avatar avatar-sm';
        roles.forEach(function (element) {
            switch (element) {
                case _shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__["ApplicationConstant"].ROLES_LABLES.team_lead:
                    innerHtml = 'TL';
                    innerClass = 'avatar avatar-sm avatar-blue';
                    break;
                case _shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__["ApplicationConstant"].ROLES_LABLES.project_manager:
                    innerHtml = 'PM';
                    innerClass = 'avatar avatar-sm avatar-red';
                    break;
                case _shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__["ApplicationConstant"].ROLES_LABLES.developer:
                    innerHtml = 'DE';
                    innerClass = 'avatar avatar-sm avatar-gray-dark';
                    break;
                case _shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__["ApplicationConstant"].ROLES_LABLES.super_admin:
                    innerHtml = 'S';
                    innerClass = 'avatar avatar-sm avatar-green';
                    break;
                default:
                    innerHtml = 'O';
                    innerClass = 'avatar avatar-sm avatar-green';
                    break;
            }
        });
        this.el.nativeElement.innerHTML = innerHtml;
        this.el.nativeElement.className = innerClass;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appAllocationItem'),
        __metadata("design:type", Object)
    ], AllocationItemDirective.prototype, "item", void 0);
    AllocationItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAllocationItem]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AllocationItemDirective);
    return AllocationItemDirective;
}());



/***/ }),

/***/ "./src/app/modules/calendar/directives/draggable.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/calendar/directives/draggable.directive.ts ***!
  \********************************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
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

var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.clone = true;
        this.containerData = null;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.setAttribute('draggable', 'true');
    };
    DraggableDirective.prototype.onDrag = function (event) {
        event.dataTransfer.setData('text', JSON.stringify({
            'item': this.item, 'options': { 'clone': this.clone, 'containerData': this.containerData }
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appDraggable'),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "clone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "containerData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDrag", null);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDraggable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/modules/calendar/directives/droppable.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/calendar/directives/droppable.directive.ts ***!
  \********************************************************************/
/*! exports provided: DroppableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableDirective", function() { return DroppableDirective; });
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

var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.dropEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DroppableDirective.prototype.ngOnInit = function () { };
    DroppableDirective.prototype.onDragover = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    DroppableDirective.prototype.onDrop = function (event) {
        var data = JSON.parse(event.dataTransfer.getData('text'));
        this.dropEvent.emit({ parent: this.el.nativeElement, data: data });
    };
    DroppableDirective.prototype.createDraggedItem = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appDroppable'),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "dropEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DroppableDirective.prototype, "onDragover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DroppableDirective.prototype, "onDrop", null);
    DroppableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDroppable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DroppableDirective);
    return DroppableDirective;
}());



/***/ }),

/***/ "./src/app/modules/calendar/directives/slidable.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/calendar/directives/slidable.directive.ts ***!
  \*******************************************************************/
/*! exports provided: SlideAbleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideAbleDirective", function() { return SlideAbleDirective; });
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

var SlideAbleDirective = /** @class */ (function () {
    function SlideAbleDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.dropEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.registerMoveEvent = false;
    }
    SlideAbleDirective.prototype.ngOnInit = function () {
        console.log(this.sliderOptions);
        // this.el.nativeElement.setAttribute('dopppable', 'true');
    };
    SlideAbleDirective.prototype.onDragover = function (event) {
        console.log(event);
        this.registerMoveEvent = true;
        // event.stopPropagation();
        // event.preventDefault();
    };
    SlideAbleDirective.prototype.onMouseMove = function (event) {
        if (this.registerMoveEvent) {
            console.log(event);
        }
        // event.stopPropagation();
        // event.preventDefault();
    };
    SlideAbleDirective.prototype.onRightClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    SlideAbleDirective.prototype.onMouseUp = function (event) {
        console.log(event);
        this.registerMoveEvent = false;
        // event.stopPropagation();
        // event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSlideAble'),
        __metadata("design:type", Object)
    ], SlideAbleDirective.prototype, "sliderOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SlideAbleDirective.prototype, "dropEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlideAbleDirective.prototype, "onDragover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlideAbleDirective.prototype, "onMouseMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlideAbleDirective.prototype, "onRightClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlideAbleDirective.prototype, "onMouseUp", null);
    SlideAbleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSlideAble]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SlideAbleDirective);
    return SlideAbleDirective;
}());



/***/ }),

/***/ "./src/app/modules/calendar/pipes/counter.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/calendar/pipes/counter.pipe.ts ***!
  \********************************************************/
/*! exports provided: CounterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterPipe", function() { return CounterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
    }
    Counter.prototype.reset = function () {
        this.value = 0;
    };
    Counter.prototype.inc = function () {
        return this.value++;
    };
    return Counter;
}());
var counters = new WeakMap();
var CounterPipe = /** @class */ (function () {
    function CounterPipe() {
    }
    CounterPipe.prototype.transform = function (value) {
        if (!counters.has(value)) {
            counters.set(value, new Counter());
        }
        return counters.get(value);
    };
    CounterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'counterPipe'
        })
    ], CounterPipe);
    return CounterPipe;
}());



/***/ }),

/***/ "./src/app/modules/calendar/pipes/sorthelper.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/calendar/pipes/sorthelper.pipe.ts ***!
  \***********************************************************/
/*! exports provided: SortHelperPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHelperPipe", function() { return SortHelperPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_services_and_components_module_services_sharedfunctions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared-services-and-components-module/services/sharedfunctions.service */ "./src/app/shared/shared-services-and-components-module/services/sharedfunctions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortHelperPipe = /** @class */ (function () {
    function SortHelperPipe(sharedFunctionsService) {
        this.sharedFunctionsService = sharedFunctionsService;
    }
    SortHelperPipe.prototype.transform = function (value, users, sortKey) {
        if (Array.isArray(value) && value.length > 0) {
            var resources_1 = [];
            value.forEach(function (assignment) {
                resources_1.push(users[assignment]);
            });
            var extracted = this.sharedFunctionsService
                .customArraySorter(resources_1, sortKey)
                .map(function (vals) {
                return vals.id;
            });
            return extracted;
        }
        return value;
    };
    SortHelperPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sorthelper',
            pure: false
        }),
        __metadata("design:paramtypes", [_shared_shared_services_and_components_module_services_sharedfunctions_service__WEBPACK_IMPORTED_MODULE_1__["SharedFunctionsService"]])
    ], SortHelperPipe);
    return SortHelperPipe;
}());



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



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: BASE_URL, ApplicationConstant, AuthGuard, KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/constant */ "./src/app/shared/constants/constant.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return _constants_constant__WEBPACK_IMPORTED_MODULE_0__["BASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationConstant", function() { return _constants_constant__WEBPACK_IMPORTED_MODULE_0__["ApplicationConstant"]; });

/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/shared/pipes/keys.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_2__["KeysPipe"]; });






/***/ }),

/***/ "./src/app/shared/pipes/keys.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/keys.pipe.ts ***!
  \*******************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        // tslint:disable-next-line:forin
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ })

}]);
//# sourceMappingURL=modules-calendar-calendar-module.js.map