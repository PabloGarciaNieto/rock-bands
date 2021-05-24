import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdDialogData } from './../models/interface-newId';


@Component({
  selector: 'app-new-band-dialog',
  templateUrl: './new-band-dialog.component.html',
  styleUrls: ['./new-band-dialog.component.scss']
})
export class NewBandDialogComponent implements OnInit {

  newBandForm: FormGroup = this.fb.group({
    id: '',
    name: '',
    country: '',
    members: [],
    history: '',
    video: '',
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IdDialogData,
     private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewBandDialogComponent>,
    ) {}

  ngOnInit() {
    this.newBandForm = this.fb.group({
      id: this.data.id,
      name:  '',
      country: '',
      members: this.fb.array([]),
      history: '',
      video: '',
    });
  }
  get membersNames() {
    return this.newBandForm.get('members') as FormArray;
  }
  get name() {
    return this.newBandForm.get('name');
  }
  addMemberName() {
    const memberName = this.fb.group({
      name: [],
      surname: []
    });
    this.membersNames.push(memberName);
  }
  deleteMember(i: any) {
    this.membersNames.removeAt(i);
    console.log(i);
    console.log(typeof i);
  }
  addBand() {
    this.dialogRef.close({ data: this.newBandForm.value })
  }

}
