import { Component, OnInit } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-model-pop-up',
  templateUrl: './model-pop-up.component.html',
  styleUrls: ['./model-pop-up.component.css']
})
export class ModelPopUpComponent implements OnInit {

  constructor(private myClient:OffersService) { }
  item:any;
  ngOnInit(): void {
    let that=this;
    this.myClient.getAllOffers().subscribe
    (
      {
        next(data){
            that.item=data;
        },
      error(err){
            console.log(err);

      }

      }
    );
  }

}
