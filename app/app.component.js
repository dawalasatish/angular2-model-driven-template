"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms"); //FormControl using weare not using formbuilder
var AppComponent = /** @class */ (function () {
    function AppComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            name: ['satish', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            email: [],
            address: this._formBuilder.group({
                street: [],
                city: [],
                postalCode: [null, [forms_1.Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        });
    };
    ///using model driven form validate
    /*userForm = new FormGroup({
        name : new FormControl('satish',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
        email : new FormControl(),
        address : new FormGroup({
            street : new FormControl(),
            city : new FormControl(),
            postalCode : new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
        })
    });*/
    AppComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styles: ["\n\tinput.ng-invalid{border-left: 5px solid red;}\n\tinput.ng-valid{border-left: 5px solid green;}\n  "]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map