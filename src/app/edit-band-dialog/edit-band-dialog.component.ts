import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Band } from './../models/interface-band';


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
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditBandDialogComponent>,
  ) { }

  ngOnInit() {
    console.log('yte');
    console.log(this.data);
    console.log(typeof this.data);
    this.newBandForm = this.data;
    this.newBandForm.members.map(val => {
      this.members.push(val);
      console.log(val);
    });

    console.log(this.members);
    console.log(typeof this.members);
  }

  addMemberName() {
    const memberName = {
      id: Math.random(),
      name: '',
      surname: ''
    }
    this.members.push(memberName);
    this.newBandForm.members = this.members;
  }
  deleteMember(i: number) {
    this.members.splice(i, 1);
    this.newBandForm.members = this.members;
    console.log(this.members);
  }
  editBand() {
    console.log('this.newBandForm');
    console.log(this.newBandForm);
    this.dialogRef.close({ data: this.newBandForm })
  }

}
