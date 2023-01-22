import { ToastType, ToastPosition } from './../models/toastEnum';
import { NozomService } from './../services/nozom.service';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { Toaster } from 'ngx-toast-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CV } from '../models/ICV';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  public id: number = 0;
  public cvItem: CV = new CV();

  constructor(private route: ActivatedRoute, public toastr: Toaster, private router: Router, private confirm: NgxBootstrapConfirmService, private _srv: NozomService) { }

  async ngOnInit() {
    await this.loadPost();
  }

  loadPost = () => {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      this._srv.getCvById(this.id).subscribe(async res => {
        this.cvItem = res.data;
      });
    });
  }

  handleDelete = async () => {
    let options = {
      title: 'Proceed with deleting this record?',
      confirmLabel: 'Yes',
      declineLabel: 'No'
    }
    this.confirm.confirm(options).then(async (res: boolean) => {
      if (res) {
        await this._srv.deleteCV(this.id).subscribe(_ => {
          this.toastr.open({ text: 'Deleted Sucessfully', caption: 'Nozom', duration: 4000, type: ToastType.success, position: ToastPosition.topRight });
          this.router.navigate(['vacancy']);
        });
      }
    });
  }

}
