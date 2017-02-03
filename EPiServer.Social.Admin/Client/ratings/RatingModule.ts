import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RatingDashComponent } from './components/RatingDash';


import { RatingService } from './services/RatingService';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,

    ],
    declarations: [
        RatingDashComponent,
    ],

    providers: [
        RatingService
    ],

    exports: [
        RatingDashComponent,
    ]

})
export class RatingModule {
}