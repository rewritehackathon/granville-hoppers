import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GigService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
      return this.http.get('http://localhost:8080/gig/list');
    }

    getSuggestions(): Observable<any> {
      return this.http.get('http://localhost:8080/gig/suggest');
    }

    getQuote(gigId: number): Observable<any> {
      return this.http.get('http://localhost:8080/gig/quote?gigId=' + gigId);
    }

    addGig(gigId: number) {
      this.http.get('http://localhost:8080/gig/add?gigId=' + gigId);
      this.getAll();
      this.getSuggestions();
    }

    purchasePolicy(gigId: number) {
      this.http.get('http://localhost:8080/gig/purchase?gigId=' + gigId);
      this.getAll();
    }
}
