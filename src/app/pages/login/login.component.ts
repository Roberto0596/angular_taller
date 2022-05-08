import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';
    constructor(private cutomerws: CustomerService, public router: Router) { }

    ngOnInit(): void {
        if (this.cutomerws.getToken() != null && this.cutomerws.getToken() != '') {
            this.router.navigateByUrl('/home');
        }
    }

    login() {
        const user = {username: this.username, password: this.password};
        this.cutomerws.login(user)
        .then((response) => {
            var res = JSON.parse(JSON.stringify(response));
            this.cutomerws.setToken(res.response);
            this.router.navigateByUrl('/home');
        })
        .catch(err => {
            console.log(err);
        });
    }
}
