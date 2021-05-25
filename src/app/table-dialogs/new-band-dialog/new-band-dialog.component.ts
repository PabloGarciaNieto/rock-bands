import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdDialogData } from '../../models/interface-newId';



@Component({
  selector: 'app-new-band-dialog',
  templateUrl: './new-band-dialog.component.html',
  styleUrls: ['./new-band-dialog.component.scss']
})
export class NewBandDialogComponent implements OnInit {

  newBandForm: FormGroup = this.fb.group({
    id: null,
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
      name: ['', Validators.required],
      country: '',
      members: this.fb.array([]),
      history: '',
      video: '',
    });
  }
  get membersNames() {
    return this.newBandForm.get('members') as FormArray;
  }

  get getControl(){
    return this.newBandForm.controls;
  }
  addMemberName() {
    const memberName = this.fb.group({
      name: [],
      instrument: []
    });
    this.membersNames.push(memberName);
  }
  deleteMember(i: any) {
    this.membersNames.removeAt(i);
    console.log(i);
    console.log(typeof i);
  }
  addBand() {
    this.newBandForm.value.members.map((el: { id: number; }) => {
      el.id = Math.random();
    })
    this.dialogRef.close({ data: this.newBandForm.value });
    console.log(this.newBandForm.value.name);
  }

}
