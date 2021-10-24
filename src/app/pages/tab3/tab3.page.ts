import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  paises =[{'pais': 'ru', 'nombre': 'ruso'}, {'pais':'ve', 'nombre':'español'}]; //paises
  jSonChan=JSON.stringify(this.paises[0]['pais']);
  noticias: Article[]=[];
  ony: String;
  constructor(private noticiasServ: NoticiasService) {}

  //Evento que carga las noticias al iniciar la app
  ngOnInit(){
    this.cargarNoticias(this.jSonChan.replace(/["']/g, ""));
  }

  noticiasPorPais(event){
    this.noticias=[];
    for (let step = 0; step < 2; step++) {
      //
      console.log('Camina un paso hacia el este');
    }
    this.cargarNoticias(this.ony.substr(9,2));
  }

  cargarNoticias(p: string){
    this.noticiasServ.getTopHeadLinesCountry(p).subscribe(
      r => {this.noticias.push(...r.articles);}
    )
  }

}
