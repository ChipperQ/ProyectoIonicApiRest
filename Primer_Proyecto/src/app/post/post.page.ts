import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})

export class PostPage implements OnInit {
  listado = [];
  constructor(private api: CrudService) { }

  ngOnInit() {
    this.listar();
  }
  async listar(){  
    this.api.getPost("1");
    this.listado = this.api.listado;
  }
}
