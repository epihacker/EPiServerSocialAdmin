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
var core_1 = require("@angular/core");
var RatingService_1 = require("../services/RatingService");
var EmitterService_1 = require("../services/EmitterService");
// Component decorator
var RatingDashComponent = (function () {
    // Constructor with injected service
    function RatingDashComponent(ratingService) {
        this.ratingService = ratingService;
    }
    RatingDashComponent.prototype.ngOnInit = function () {
        // Load rating dash
        this.loadRatingDash();
    };
    RatingDashComponent.prototype.loadRatingDash = function () {
        var _this = this;
        this.ratingService.getRatingsDash()
            .subscribe(function (dash) { return _this.dash = dash; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    RatingDashComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Listen to the 'dash' emitted event so as populate the model
        // with the event payload
        EmitterService_1.EmitterService.get(this.dashId).subscribe(function (dash) { _this.loadRatingDash(); });
    };
    return RatingDashComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RatingDashComponent.prototype, "dashId", void 0);
RatingDashComponent = __decorate([
    core_1.Component({
        selector: 'rating-dash',
        template: "\n        <div>\n            <div class=\"huge\">{{dash.TotalCount}}</div>\n            <div>Ratings!</div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [RatingService_1.RatingService])
], RatingDashComponent);
exports.RatingDashComponent = RatingDashComponent;
//# sourceMappingURL=RatingDash.js.map