import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';
    constructor(private cutomerws: CustomerService, public router: Router, public toast: ToastrService) { }

    ngOnInit(): void {
        if (this.cutomerws.getToken() != null && this.cutomerws.getToken() != '') {
            this.router.navigateByUrl('/home');
        }
    }

    login() {
        const user = {username: this.username, password: this.password};
        this.cutomerws.login(user)
        .then((res: any) => {
            //var res = JSON.parse(JSON.stringify(response));
            if(res.status == 0) {
                this.cutomerws.setToken(JSON.stringify(res.response));
                this.toast.info(res.message);
                this.router.navigateByUrl('/home');
            } else {
                this.toast.error(res.message);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
}
