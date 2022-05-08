import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { AsideComponent } from './pages/components/aside/aside.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

const routes:Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
]

// const routes:Routes = [{
//   path:"sign-in", component: LoginComponent
// }, {
//   path:"alumn", component: HomeComponent, 
//   children: [{
//     path: 'charge',
//     component: ViewChargeComponent,
//     pathMatch: 'full'
//   }],
// }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports:[
    RouterModule
  ],
  providers: [
  { provide: APP_BASE_HREF, useValue : '/home'},
  CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
