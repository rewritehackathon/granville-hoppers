import { Component, OnInit } from '@angular/core';
import {GigService} from '../shared';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
  providers: [GigService]
})
export class PolicyComponent implements OnInit {
  coverage: Array<any>;

  constructor(private route: ActivatedRoute,
              private gigService: GigService) { }

  ngOnInit() {
    const gigId = +this.route.snapshot.paramMap.get('gigId');
    this.gigService.getQuote(gigId).subscribe(
      data => {
        this.coverage = data;
      },
      error => console.log(error)
    );
  }

}
