import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GigService} from '../shared';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [GigService]
})
export class QuoteComponent implements OnInit {
  quotes: Array<any>;
  basic: any;
  constructor(private route: ActivatedRoute,
              private gigService: GigService,
              private toastr: ToastrService) { }

  ngOnInit() {
    const gigId = +this.route.snapshot.paramMap.get('gigId');
    this.gigService.getQuote(gigId).subscribe(
      data => {
        this.quotes = data;
      },
      error => console.log(error)
    );
    this.basic = false;
  }
  saveQuote() {
    this.basic = false;
    this.toastr.success('Quote Saved');
  }
  buyPolicy() {
    this.basic = false;
    this.toastr.success('Policy Purchased');
  }
}
