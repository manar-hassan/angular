import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
private base_url="http://localhost:3100/offers"
  constructor(private myClient:HttpClient) { }
  getAllOffers(){
    return this.myClient.get(this.base_url)
  }
  getOffersById(id:number){
    return this.myClient.get(this.base_url +"/"+id)
  }

}
