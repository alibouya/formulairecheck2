import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Nom='';
  Prenom='';
  Job='';
  Description:'' ;
  motscles:''
  motscles1:''
  constructor() { }

  ngOnInit(): void {
  }

}
