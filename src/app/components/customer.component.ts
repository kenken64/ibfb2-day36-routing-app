import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy{

  param$! : Subscription;
  queryParam$! : Subscription;
  
  customerId: string = "";
  fids!: string[];
  joinedFids : string = "";
  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      this.param$ = this.activatedRoute.params.subscribe(
        (params)=> {
          this.customerId = params['custId'];
          console.log(this.customerId);
        }
      )

      this.queryParam$ = this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          this.fids = queryParams['fids'].split('|');
        }
      )
  }

  concat(val: any){
    console.log(val);
    this.joinedFids= this.joinedFids + val + '|';
    console.log(this.joinedFids);
  }

  ngOnDestroy(): void {
      this.param$.unsubscribe();
      this.queryParam$.unsubscribe();
      this.joinedFids= "";
  }

}
