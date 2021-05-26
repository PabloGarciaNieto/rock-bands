import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  //----------
  valueCheker: any = [];
  keyCheker: any = [];
  index: number[] = [];
  incompleteValues: any = [];
  cont: number = 0;
  incomplete: boolean = false;
  noVideo: boolean = false;
  noMembers: boolean = false;
  //----------
  video: string = '';
  width: number = 300;
  height: number = 169;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Band,
  ) { }

  ngOnInit(): void {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    this.newBandForm = this.data;
    this.video = this.newBandForm.video;
    if (this.video === '' || (this.video.length !== 11)) {
      this.noVideo = true;
      this.incomplete = true;
    }
    this.newBandForm.members.map(val => {
      this.members.push(val);
    });
    Object.entries(this.data).forEach(([key, value]) => {
      this.valueCheker.push(value);
      this.keyCheker.push(key);
    });
    for (let i = 0; i < this.valueCheker.length; i++) {
      if (this.valueCheker[i] === '') {
        this.index.push(i);
        this.cont++
      }
      if (this.cont !== 0) {
        this.incomplete = true;
      }
    }
    this.index.map(val => {
      this.incompleteValues.push(this.keyCheker[val])
    })
    let videoKey = this.incompleteValues.findIndex((e: string) => e === 'video');
    if (videoKey !== -1) {
      this.incompleteValues.splice(videoKey, 1);
    }
    if (this.members.length < 1) {
      this.incomplete = true;
      this.noMembers = true;
    }
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].instrument === '' || this.members[i].name === '') {
        this.incomplete = true;
        this.noMembers = true;
      }
    }
  }

}
