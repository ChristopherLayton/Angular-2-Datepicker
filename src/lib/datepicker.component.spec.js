"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var datepicker_component_1 = require("./datepicker.component");
describe('DatepickerComponent', function () {
    var comp;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [datepicker_component_1.DatepickerComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        });
        fixture = testing_1.TestBed.createComponent(datepicker_component_1.DatepickerComponent);
        comp = fixture.componentInstance;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    describe('yearValidator', function () {
        var expectedError = { 'invalidYear': true };
        var testControl;
        beforeEach(function () {
            testControl = new forms_1.FormControl('');
        });
        it('validates a valid year', function () {
            testControl.setValue(2015);
            expect(comp.yearValidator(testControl)).toEqual(null);
        });
        it('returns error when given invalid year', function () {
            testControl.setValue(1785);
            expect(comp.yearValidator(testControl)).toEqual(expectedError);
        });
        it('returns error when given a non number type', function () {
            testControl.setValue('abc');
            expect(comp.yearValidator(testControl)).toEqual(expectedError);
        });
    });
    describe('inRangeValidator', function () {
        var testControl;
        beforeEach(function () {
            testControl = new forms_1.FormControl('');
        });
        it('returns error when currentMonthNumber is absent', function () {
            testControl.setValue(2015);
            expect(comp.inRangeValidator(testControl)).toEqual({ 'currentMonthMissing': true });
        });
        it('returns error when rangeStart is set and year is before rangeStart', function () {
            comp.currentMonthNumber = 8;
            comp.rangeStart = new Date(2014, 1);
            testControl.setValue(2012);
            expect(comp.inRangeValidator(testControl)).toEqual({ 'yearBeforeRangeStart': true });
        });
        it('returns error when rangeEnd is set and year is after rangeEnd', function () {
            comp.currentMonthNumber = 8;
            comp.rangeEnd = new Date(2014, 1);
            testControl.setValue(2016);
            expect(comp.inRangeValidator(testControl)).toEqual({ 'yearAfterRangeEnd': true });
        });
        it('validates a valid year with no range set', function () {
            comp.currentMonthNumber = 8;
            testControl.setValue(2015);
            expect(comp.inRangeValidator(testControl)).toEqual(null);
        });
        it('validates a valid year with start and end range present', function () {
            comp.currentMonthNumber = 8;
            comp.rangeStart = new Date(2014, 1);
            comp.rangeEnd = new Date(2016, 1);
            testControl.setValue(2015);
            expect(comp.inRangeValidator(testControl)).toEqual(null);
        });
    });
    describe('setCurrentYear', function () {
        it('sets currentYear', function () {
            var year = 2014;
            comp.setCurrentYear(year);
            expect(comp.currentYear).toEqual(year);
        });
    });
    describe('setInputText', function () {
        it('sets correct inputText when dateFormat equals "YYYY-MM-DD"', function () {
            var day = new Date(2016, 3, 15);
            comp.dateFormat = 'YYYY-MM-DD';
            comp.setInputText(day);
            expect(comp.inputText).toEqual('2016-04-15');
        });
        it('sets correct inputText when dateFormat equals "MM-DD-YYYY"', function () {
            var day = new Date(2016, 3, 15);
            comp.dateFormat = 'MM-DD-YYYY';
            comp.setInputText(day);
            expect(comp.inputText).toEqual('04-15-2016');
        });
        it('sets correct inputText when dateFormat equals "DD-MM-YYYY"', function () {
            var day = new Date(2016, 3, 15);
            comp.dateFormat = 'DD-MM-YYYY';
            comp.setInputText(day);
            expect(comp.inputText).toEqual('15-04-2016');
        });
        it('sets correct inputText when dateFormat is a custom function', function () {
            var day = new Date(2016, 3, 15);
            var func = function (date) { return date.toString(); };
            comp.dateFormat = func;
            comp.setInputText(day);
            expect(comp.inputText).toEqual(day.toString());
        });
    });
});
//# sourceMappingURL=datepicker.component.spec.js.map