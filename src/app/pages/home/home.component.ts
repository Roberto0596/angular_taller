import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private customerws:CustomerService, public router: Router) { }

  ngOnInit(): void {
      if (this.customerws.getToken() == null || this.customerws.getToken() == '') {
          this.router.navigateByUrl('/login');
      }
  }
}
