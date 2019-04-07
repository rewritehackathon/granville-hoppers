import { Component, OnInit } from '@angular/core';
import { GigService, GiphyService } from '../shared';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gig-list',
  templateUrl: './gig-list.component.html',
  styleUrls: ['./gig-list.component.css'],
  providers: [GigService, GiphyService]
})
export class GigListComponent implements OnInit {
  gigs: Array<any>;
  suggestions: Array<any>;

  constructor(private gigService: GigService,
              private giphyService: GiphyService,
              private router: Router) { }

  ngOnInit() {
    this.gigService.getAll().subscribe(
      data => {
        this.gigs = data;
      },
      error => console.log(error)
    );
    this.gigService.getSuggestions().subscribe(
      data => {
        this.suggestions = data;
      },
      error => console.log(error)
    );
  }
  selectGig(gig: any) {
    if (gig.status === 'Added') {
      this.router.navigate(['/quote', gig.id]);
    } else if (gig.status === 'Purchased') {
      this.router.navigate(['/policy', gig.id]);
    }
  }
  addGig(gig: any) {
    this.gigService.addGig(gig.id);
  }

}
