import { Component, OnInit } from '@angular/core';
import {GigService} from '../shared';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
  providers: [GigService]
})
export class ClaimComponent implements OnInit {
  submitted = false;

  constructor(private gigService: GigService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {

  }
  onSubmit() {
    this.submitted = true;
    this.toastr.success('Claim Submitted');
    this.router.navigateByUrl('/home');
  }

}
