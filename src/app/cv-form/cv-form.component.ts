import { NozomService } from './../services/nozom.service';
import { Toaster } from 'ngx-toast-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CV } from '../models/ICV';
import { ToastPosition, ToastType } from '../models/toastEnum';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {

  public id: number = 0;
  public cvItem: CV = new CV();
  public cardHeader: string = 'Create a new CV';
  public isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private toastr: Toaster, private router: Router, private _srv: NozomService) {

  }

  async ngOnInit() {
    await this.loadCV();
  }


  loadCV = async () => {
    await this.route.params.subscribe(async params => {
      if (params['id']) {
        this.id = parseInt(params['id']);
        this.isLoading = true;
        await this._srv.getCvById(this.id).subscribe(res => {
          this.isLoading = false;
          this.cvItem = res.data;
          this.cardHeader = 'Update Vacancy'
        });
      }
    });
  }

  onSubmit = async () => {
    console.log('item ', this.cvItem)

    if (this.id > 0) {
      this.cvItem.id = this.id;
      await this._srv.updateCV(this.cvItem).subscribe(res => {
        this.toastr.open({ text: `Vacancy #${res.data} Updated successfully`, caption: 'LinkDev', duration: 4000, type: ToastType.success, position: ToastPosition.topRight });
        this.router.navigate(['cv-list']);
      });
    } else {
      await this._srv.createCV(this.cvItem).subscribe(res => {
        if (res.statusCode == 400) {
          this.toastr.open({ text: res.data, caption: 'LinkDev', duration: 4000, type: ToastType.danger, position: ToastPosition.topRight });
          return;
        }
        this.toastr.open({ text: `CV #${res.data} Created successfully`, caption: 'Nozom', duration: 4000, type: ToastType.success, position: ToastPosition.topRight });
        this.router.navigate(['cv-list']);
      });
    }
  }
}
