import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CouponsService } from 'src/app/services/coupons.service';
import { ModelPopUpComponent } from '../model-pop-up/model-pop-up.component';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styles: [
  ]
})
export class CouponsComponent implements OnInit {

  constructor(private myService:CouponsService, private matdialog:MatDialog) { }

  item:any;
  ngOnInit(): void {
    let that=this;
    this.myService.getAllOffers().subscribe
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
