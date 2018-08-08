import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { LoginComponent } from "./auth/login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from "@angular/core";
import { CosmeticsComponent } from "./services/cosmetics/cosmetics.component";
import { CosmeDetailComponent } from "./services/cosmetics/cosme-detail/cosme-detail.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ServicesComponent } from "./services/service.component";
import { MakeupComponent } from "./makeup/makeup.component";

const appRoutes:Routes =[
    {path:'',component:HomepageComponent},
    {path:'about',component:AboutComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'makeup',component:MakeupComponent},
    {path:'services',component:ServicesComponent},
    {path:'login', component:LoginComponent,},
    {path:'contact',component:ContactComponent},
    {path:'cosmetics',component:CosmeticsComponent},
    {path:'cosmetics/:name',component:CosmeDetailComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'shopping-cart',component:ShoppingCartComponent,canActivate:[AuthGuard]},
    
  ];

  @NgModule({
      imports:[RouterModule.forRoot(appRoutes),],
      exports:[RouterModule]
  })

  export class AppRoutingModule{

  }