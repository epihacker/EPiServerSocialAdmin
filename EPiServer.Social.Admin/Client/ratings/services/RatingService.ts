/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RatingsDash } from '../models/RatingsDash';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RatingService {
    // private instance variable to hold base url
    private ratingsDashUrl = 'http://localhost:58349/api/ratingsdash';

    // Resolve HTTP using the constructor
    constructor(private http: Http) { }

    getRatingsDash(): Observable<RatingsDash> {
        // ...using get request
        return this.http.get(this.ratingsDashUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }}