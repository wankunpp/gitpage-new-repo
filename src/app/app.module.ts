import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AgmCoreModule } from '@agm/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {LoginComponent} from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ServicesComponent} from './services/service.component';
import { CosmeticsComponent } from './services/cosmetics/cosmetics.component';
import { CosmeDetailComponent } from './services/cosmetics/cosme-detail/cosme-detail.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlertComponent } from './auth/alert/alert.component';


import { CosmeticsService } from './services/cosmetics/cosmetics.services';
import { UserService } from './auth/user/user.service';
import { AlertService } from './auth/alert/alert.service';
import { AuthenticationService } from './auth/authentication.service';
import { CartService } from './shared-data/cart.service';
import { AppointmentSerivce } from './shared-data/appointment.service';

import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MakeupComponent } from './makeup/makeup.component';
import { filterPipe } from './services/cosmetics/filter.pipe';
import { ReviewsService } from './shared-data/reviews.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    MakeupComponent,
    ContactComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    CosmeticsComponent,
    CosmeDetailComponent,
    AlertComponent,
    RegisterComponent,
    ShoppingCartComponent,
    ServicesComponent,
    MakeupComponent,
    filterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1WkwOaj1w7_KPBS640_8R99UVThmjDu0'
    }),
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot(),
    
  ],
  providers: [CosmeticsService,
              UserService,
              AlertService,
              AuthenticationService,
              AuthGuard,
              CartService,
              AppointmentSerivce,
              ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
