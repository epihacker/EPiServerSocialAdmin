import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RatingsDash } from '../models/RatingsDash'
import { RatingService } from '../services/RatingService';
import { EmitterService } from '../../common/services/EmitterService';

// Component decorator
@Component({
    selector: 'rating-dash',
    template: `
        <div>
            <div class="huge">{{dash?.TotalCount}}</div>
            <div>Ratings!</div>
        </div>
    `
})
// Component class
export class RatingDashComponent implements OnInit, OnChanges {
    // Local properties
    dash: RatingsDash = { totalCount: 0 };

    // Input properties
    @Input() dashId: string;

    // Constructor with injected service
    constructor(
        private ratingService: RatingService
    ) { }

    ngOnInit() {
        // Load rating dash
        this.loadRatingDash()
    }

    loadRatingDash() {
        this.ratingService.getRatingsDash()
            .subscribe(
            dash => {
                this.dash = dash;
                console.log('*****dash value: ' + JSON.stringify(this.dash));
            }                    , //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    ngOnChanges(changes: any) {
        // Listen to the 'dash' emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.dashId).subscribe((dash: RatingsDash) => { this.loadRatingDash() });
    }
}