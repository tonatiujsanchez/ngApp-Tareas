import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  operacion:string;
  dioResultado= false;
  constructor() { 
    this.operacion = '';
  }

  ngOnInit(): void {
  }


  addNumber( num:string ){
    
    if( this.dioResultado ){
      this.operacion = '';
      this.dioResultado = false;
    }

     this.operacion += num;
     console.log(this.operacion);
  }

  resultado(){
    if( this.operacion !== '' ){
      let result = eval( this.operacion )  
      this.operacion = result;
      this.dioResultado = true;
    }else{
      console.warn('Ingresa una operación a la caja de texto');
      
    }
    
  }
}
