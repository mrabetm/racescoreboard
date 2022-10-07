import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dialog-submit-round',
  templateUrl: './dialog-submit-round.component.html',
  styleUrls: ['./dialog-submit-round.component.css']
})
export class DialogSubmitRoundComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogSubmitRoundComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any[],
              private store: Store) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    console.log(this.data)
    this.dialogRef.close()
  }
  onSubmit(){

  }

}
