import { Component } from '@angular/core';
import { EmitterService } from './common/services/EmitterService';

@Component({
    selector: 'my-app',
    templateUrl: 'Client/views/dashboard.html'
})
export class AppComponent {
    private ratingsDashId = 'RATINGS_COMPONENT_DASH';
}