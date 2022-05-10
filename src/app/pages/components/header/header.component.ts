import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private customerws:CustomerService, public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.customerws.logout();
    this.router.navigateByUrl('/login');
  }

}
