import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  createCode: any;
  constructor() { }

  ngOnInit() {
  }
  public create() {
    this.createCode ="arquit01_a";
    }
    
    public clear() {
    this.createCode ='';
    }

}
