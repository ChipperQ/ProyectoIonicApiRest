import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coments',
  templateUrl: './coments.page.html',
  styleUrls: ['./coments.page.scss'],
})
export class ComentsPage implements OnInit {

  listado = [];
  constructor(private api: CrudService, private activate: ActivatedRoute) { }

  ngOnInit() {
    this.listar();
  }
  async listar(){  
    let id = "";
    this.activate.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
    })
    await this.api.getComments(id);
    this.listado = this.api.listado;
    console.log(this.listado);
  }
}
