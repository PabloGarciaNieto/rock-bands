import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Band } from '../../models/interface-band';
@Component({
  selector: 'app-detail-band-dialog',
  templateUrl: './detail-band-dialog.component.html',
  styleUrls: ['./detail-band-dialog.component.scss']
})
export class DetailBandDialogComponent implements OnInit {
  newBandForm: Band = {
    id: 0,
    name: '',
    country: '',
    members: [],
    history: '',
    video: '',
  };
  //----------
  members: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Band,
    private dialogRef: MatDialogRef<DetailBandDialogComponent>,
  ) { }

  ngOnInit(): void {
    console.log('data in detail');
    console.log(this.data);
    console.log(typeof this.data);
    this.newBandForm = this.data;
    this.newBandForm.members.map(val => {
      this.members.push(val);
      console.log(val);
    });
  }

}
