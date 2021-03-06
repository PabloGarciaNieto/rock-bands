import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Band } from '../../models/interface-band';


@Component({
  selector: 'app-edit-band-dialog',
  templateUrl: './edit-band-dialog.component.html',
  styleUrls: ['./edit-band-dialog.component.scss']
})
export class EditBandDialogComponent implements OnInit {

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
    private dialogRef: MatDialogRef<EditBandDialogComponent>,
  ) { }

  ngOnInit() {
    this.newBandForm = this.data;
    this.newBandForm.members.map(val => {
      this.members.push(val);
    });
  }


  addMemberName() {
    const memberName = {
      id: Math.random(),
      name: '',
      instrument: ''
    }
    this.members.push(memberName);
    this.newBandForm.members = this.members;
  }

  deleteMember(i: number) {
    this.members.splice(i, 1);
    this.newBandForm.members = this.members;
  }

  editBand() {
    this.dialogRef.close({ data: this.newBandForm })
  }

}
