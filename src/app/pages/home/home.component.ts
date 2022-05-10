import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public accounts:any;
  public userData:any;

  constructor(
    private accountws:CuentaService,
    private customerws:CustomerService,
    public router: Router,
    public toast: ToastrService) { }

  ngOnInit(): void {
      if (this.customerws.getToken() == null || this.customerws.getToken() == '') {
          this.router.navigateByUrl('/login');
      }

      this.userData =  this.customerws.getToken();

      //cargar cuentas
      this.accountws.getAccounts(this.userData.id).subscribe(res => {
        this.accounts = res.response;
      });
  }

  getMovement(account: any) {
    console.log(account, "dsde home");
    this.router.navigate(['/movement'], { queryParams: { accountSelected: account.id } });
  }
}
