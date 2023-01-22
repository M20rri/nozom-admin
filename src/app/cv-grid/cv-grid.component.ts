import { ICVGrid } from './../models/ICV';
import { ActivatedRoute } from '@angular/router';
import { NozomService } from './../services/nozom.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-grid',
  templateUrl: './cv-grid.component.html',
  styleUrls: ['./cv-grid.component.css']
})
export class CvGridComponent implements OnInit {

  public isLoading: boolean = false;
  public cvGrid !: Array<ICVGrid>;

  constructor(private _ser: NozomService, private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.getCVGrid();
  }

  getCVGrid = async () => {
    this.isLoading = true;
    await this._ser.getCvList().subscribe(res => {
      this.isLoading = false;
      this.cvGrid = res.data;
    })
  }

}
