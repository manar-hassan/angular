import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './components/offers/offers.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { OffersService } from './services/offers.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModelPopUpComponent } from './components/model-pop-up/model-pop-up.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    OffersComponent,
    CouponsComponent,
    ModelPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule


  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
