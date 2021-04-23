import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Brote } from '../../models/brote';
import { BroteService } from '../../services/brote.service';

@Component({
  selector: 'app-brote',
  templateUrl: './brote.component.html',
  styleUrls: ['./brote.component.css']
})
export class BroteComponent implements OnInit {
  broteList: Brote[]; //To store
  selectedBrote: Brote; //To store

  visibleSelectedBrote = false;


  addBroteForm = new FormGroup({
    broteNameInput: new FormControl('', [
      Validators.required,
      Validators.min(2),
    ]),
    broteDescriptionInput: new FormControl('', [
      Validators.required,
      Validators.min(5),
    ]),
    broteInitialDateInput: new FormControl('', [
      Validators.required,
      Validators.min(10),
    ]),
    broteFinalDateInput: new FormControl('', [
      Validators.required,
      Validators.min(10),
    ]),
  });

  editBroteForm = new FormGroup({
    broteNameEdit: new FormControl('', [
      Validators.required,
      Validators.min(2),
    ]),
    broteDescriptionEdit: new FormControl('', [
      Validators.required,
      Validators.min(4),
    ]),
    broteInitialDateEdit: new FormControl('', [
      Validators.required,
      Validators.min(10),
    ]), 
    broteFinalDateEdit: new FormControl('', [
      Validators.required,
      Validators.min(10),
    ]), 
  });

  constructor(private broteService: BroteService) { }

  ngOnInit(): void {
    this.getBrotes();
  
  }

  public getBrotes() {
    this.broteList = []; //To reset the List
    this.selectedBrote = new Brote(); //To reset 

    this.broteService.getBrotes().subscribe((res) => {
      this.broteList = res as Brote[];
      console.log(res);
    });
  }

  public getBrote(i: number) {
    this.visibleSelectedBrote = false;

    let selectedBroteId = this.broteList[i]._id;

    this.broteService.getBrote(selectedBroteId).subscribe((res) => {
      this.selectedBrote = res as Brote;
    });

    this.visibleSelectedBrote = true;
  }

  public addBrote() {
    let newbrote = new Brote();
    newbrote.name = this.addBroteForm.get('broteNameInput').value;
    newbrote.description = this.addBroteForm.get(
      'broteDescriptionInput'
    ).value;
    newbrote.initialdate = this.addBroteForm.get('broteInitialDateInput').value;
    newbrote.finaldate = this.addBroteForm.get('broteFinalDateInput').value;

    this.broteService.addBrote(newbrote).subscribe((res) => {
      let addedbrote = res as Brote;
      if (
        addedbrote.name == newbrote.name &&
        addedbrote.description == newbrote.description
      )
        alert(`Brote ${addedbrote.name} created successfully`);
      else alert(`Could not create the Brote`);
    });
  }

  public editBrote() {
    this.broteService.editBrote(this.selectedBrote._id, this.selectedBrote).subscribe((res) => {
        let editedbrote = res as Brote;
        if (
          editedbrote.name ==
            this.editBroteForm.get('broteNameEdit').value &&
          editedbrote.description ==
            this.editBroteForm.get('broteDescriptionEdit').value &&
          editedbrote.initialdate ==
            this.editBroteForm.get('broteInitialDateEdit').value &&
            editedbrote.finaldate ==
              this.editBroteForm.get('broteFinalDateEdit').value
        )
          alert(`Brote ${editedbrote.name} edited successfully`);
        else alert(`Could not edit the Brote`);
      });
  }


}
