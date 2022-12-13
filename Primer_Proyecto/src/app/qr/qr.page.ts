import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  createCode: any;
  constructor(private activate: ActivatedRoute) { }

  ngOnInit() {
  }
  async create() {
    let id = "";
    this.activate.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
    })
    this.createCode =id;

    }
    
  async clear() {
    this.createCode ='';
    }
}
