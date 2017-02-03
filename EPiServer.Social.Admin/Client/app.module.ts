import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RatingModule } from './ratings/RatingModule';

import { AppComponent } from './app';
import { EmitterService } from './common/services/EmitterService';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RatingModule

    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        EmitterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
