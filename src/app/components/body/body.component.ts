import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public talpa?:number;
  public greitis?:number;
  public laikas?:number;
  public rezultatas:number = 0;
  public info:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if(this.talpa != null && this.greitis != null && this.laikas != null){
      this.rezultatas = Math.round(this.laikas * this.greitis * 100 / this.talpa);
    }
    if(this.rezultatas <= 80){
      this.info = "";
    }
    if(this.rezultatas > 80){
      this.info = "Rezervuaro talpa kritiškai pripildyta.";
    }
    if(this.rezultatas >= 100){
      this.info = "Rezervuaro talpa perpildyta.";
    }
    
  }

}
