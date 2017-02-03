"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var RatingDash_1 = require("./components/RatingDash");
var RatingService_1 = require("./services/RatingService");
var RatingModule = (function () {
    function RatingModule() {
    }
    return RatingModule;
}());
RatingModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
        ],
        declarations: [
            RatingDash_1.RatingDashComponent,
        ],
        providers: [
            RatingService_1.RatingService
        ],
        exports: [
            RatingDash_1.RatingDashComponent,
        ]
    })
], RatingModule);
exports.RatingModule = RatingModule;
//# sourceMappingURL=RatingModule.js.map