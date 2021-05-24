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
    id: '',
    name: '',
    country: '',
    members: [],
    history: '',
    video: '',
  };
  members: any[] = [];
  /*   newBandForm: FormGroup = this.fb.group({
      id: '',
      name: '',
      country: '',
      members: [],
      history: '',
      video: '',
    }); */
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
    /*   this.newBandForm = this.fb.group({
        id: this.data.id,
        name:  this.data.name,
        country: this.data.country,
        members: this.fb.array(this.data.members),
        history: this.data.history,
        video: this.data.video,
      });
      this.newBandForm.setValue({
        id: this.data.id,
        name:  this.data.name,
        country: this.data.country,
        members: this.fb.array(this.data.members),
        history: this.data.history,
        video: this.data.video,
      }); */
  }
  /*  get membersNames() {
     console.log('coyimbo');
     console.log(this.newBandForm);
     console.log(this.newBandForm.value.members);
     return this.newBandForm.get('members') as FormArray;
   }
   get name() {
     return this.newBandForm.get('name');
   } */
  addMemberName() {
    const memberName = this.fb.group({
      name: [],
      surname: []
    });
    //this.membersNames.push(memberName);
  }
  deleteMember(i: any) {
    //this.membersNames.removeAt(i);
  }
  editBand() {
    //this.dialogRef.close({ data: this.newBandForm.value })
  }

}
