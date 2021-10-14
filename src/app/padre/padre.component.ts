import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  
  titulo: string = 'Componente Padre!!!';

  num1 = 7;
  num2 = 9;
  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.titulo = "Pulsado!!!"
  }

  sumar(){
    this.resultado = this.num1 + this.num2; 
  }

}
