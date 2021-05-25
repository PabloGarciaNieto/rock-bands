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
  video: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Band,
    private dialogRef: MatDialogRef<DetailBandDialogComponent>,
  ) { }

  ngOnInit(): void {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    console.log('data in detail');
    console.log(this.data);
    console.log(typeof this.data);
    this.newBandForm = this.data;
    this.video = this.newBandForm.video;
    this.newBandForm.members.map(val => {
      this.members.push(val);
      console.log(val);
    });
  }

}
