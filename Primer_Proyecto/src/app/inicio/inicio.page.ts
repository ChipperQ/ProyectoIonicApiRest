import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listado = [];
  constructor(private api: CrudService) { }

  ngOnInit() {
    this.listar();
  }
  async listar(){  
    this.api.getMaterias();
    this.listado = this.api.listado;
}

}
