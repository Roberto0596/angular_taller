import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';
import { FrecuentService } from 'src/app/services/frecuent.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { TransferService } from 'src/app/services/transfer.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  accounts: any;
  frecuents: any;
  userData: any;

  selectedFrecuent:string = "";
  selectedAccount:string = "";
  amount:number = 0;

  constructor(
    public accountws: CuentaService,
    public frecuentws: FrecuentService,
    private customerws:CustomerService,
    public toast: ToastrService,
    private spinner: NgxSpinnerService,
    private transferws: TransferService 
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.userData =  this.customerws.getToken();
    this.accountws.getAccounts(this.userData.id).subscribe(accountsRes => {
        this.accounts = accountsRes.response;
        this.frecuentws.getFrecuents(this.userData.id).subscribe(freceuntRes => {
          this.frecuents = freceuntRes.response;
          this.spinner.hide();
        });
    });
  }

  do() {
    if(this.selectedAccount != "" && this.selectedFrecuent != "" && this.amount > 0) {
      this.spinner.show();
      let data = {
        accountId: this.selectedAccount,
        frecuentId: this.selectedFrecuent,
        amount: this.amount
      };

      this.transferws.doTransfer(data).then((res: any) => {
        if(res.status == -1) {
          this.toast.warning(res.message);
          this.spinner.hide();
        } else {
          this.toast.info(res.message);
          window.location.reload();
        }
      }).catch(error => {
        this.toast.error("No se realizó la operacion");
        this.spinner.hide();
      });

    } else {
      this.toast.warning("Debe seleccionar los campos requeridos");
    }
  }
}
