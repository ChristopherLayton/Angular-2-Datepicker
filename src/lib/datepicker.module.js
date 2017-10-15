"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var datepicker_component_1 = require("./datepicker.component");
__export(require("./datepicker.component"));
var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    DatepickerModule = __decorate([
        core_1.NgModule({
            declarations: [datepicker_component_1.DatepickerComponent],
            exports: [datepicker_component_1.DatepickerComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, animations_1.BrowserAnimationsModule]
        })
    ], DatepickerModule);
    return DatepickerModule;
}());
exports.DatepickerModule = DatepickerModule;
//# sourceMappingURL=datepicker.module.js.map