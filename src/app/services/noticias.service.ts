import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces'
import { environment } from '../../environments/environment.prod';

const url='https://newsapi.org/v2/top-headlines?';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  getTopHeadLines(){
    return this.http.get<RespuestaToHeadLines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=8c2b47beb4cd46c383030cb84b732b3b');
  }
  getTopHeadLinesCategory(categoria:string){
    return this.http.get<RespuestaToHeadLines>(url+"category="+categoria+"&apiKey="+environment.apiKey);
  }
  getTopHeadLinesCountry(p:string){
    return this.http.get<RespuestaToHeadLines>(url+"country="+p+"&apiKey="+environment.apiKey);
  }
}
