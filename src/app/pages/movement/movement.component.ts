import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovementService } from 'src/app/services/movement.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  movements:any;
  account:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private spinner: NgxSpinnerService, 
    private movementws: MovementService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastrService
  ) { 
    
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.spinner.show();
    this.route.queryParams
      .subscribe(params => {
        this.account = params.accountSelected;
        this.movementws.getMovements(this.account).subscribe(res => {
          if (res.status == -1) {
            this.toast.info(res.message);
          } else {
            this.movements = res.response;
            this.dtTrigger.next();
          }
          this.spinner.hide();
        });
      }
    );
  }

}
