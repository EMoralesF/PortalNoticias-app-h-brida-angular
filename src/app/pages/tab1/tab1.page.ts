import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[]=[]

  constructor(private noticiasServ: NoticiasService) {}

  ngOnInit(){
    //this.noticiasServ.getTopHeadLines().subscribe(r => (console.log('noticias', r)))
    this.noticiasServ.getTopHeadLines().subscribe( r => {this.noticias.push( ...r.articles) });
  }

}
