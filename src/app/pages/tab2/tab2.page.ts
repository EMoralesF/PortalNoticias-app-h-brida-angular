import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categorias: string[]=['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[]=[]
  
  constructor(private noticiasServ: NoticiasService) {}

  //Evento que carga las noticias al iniciar la app
  ngOnInit(){
    this.cargarNoticias(this.categorias[0]);
  }

  //Por categoria
  noticiasPorCat(event){
    this.noticias=[];
    this.cargarNoticias(event.detail.value);
  }

  //Función que llama al servicio para cargar las categorias
  cargarNoticias(cat: string){
    this.noticiasServ.getTopHeadLinesCategory(cat).subscribe(
      r => {this.noticias.push(...r.articles);}
    )
  }
}
