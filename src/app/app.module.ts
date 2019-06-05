import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelItemComponent } from './templates/hotel-item/hotel-item.component';
import { NavbarBottomComponent } from './templates/navbar-bottom/navbar-bottom.component';
import { HeaderComponent } from './templates/header/header.component';
import { ExploreItemComponent } from './templates/explore-item/explore-item.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelItemComponent,
    NavbarBottomComponent,
    HeaderComponent,
    ExploreItemComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
