import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouponsService } from 'src/app/services/coupons.service';
import { OffersService } from 'src/app/services/offers.service';
import { CouponsComponent } from '../coupons/coupons.component';
import { ModelPopUpComponent } from '../model-pop-up/model-pop-up.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styles: [
  ]
})
export class OffersComponent implements OnInit {

  constructor(private myClient:CouponsService, private matdialog:MatDialog ) { }

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

openPopUp(){
this.matdialog.open(ModelPopUpComponent)
}

}
