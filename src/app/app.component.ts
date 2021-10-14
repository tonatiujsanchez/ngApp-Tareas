import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peliculas:string[] = ['AntMan', 'IronMan', 'SpiderMan'];
  campoTexto:string;

  persona:any;

  constructor(){
    this.campoTexto = 'Valor inicial';
    this.persona = {};
  }

  onAlertePulsada( vent:any ){
    console.log( vent );    
  }

  cronometroEnd( msg:any ){
    console.log(msg);
  }

  cambiar(){
    this.campoTexto = 'Otro valor.'
  }
}
