import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  
  mensaje:string;
  constructor() {
    this.mensaje = '¡Hola mundo!';
   }

  ngOnInit(): void {
  }
// Botón
  onClick($event:any){
    console.log('Pulsado!!!!');
    console.log($event); 
  }
  
  // Select
  onChange( $event:any ){
    console.log($event.target.value);
    
  }
  
  //Div | Caja
  onMouseEnter(){
    console.log('Dentro del cuadro');
    this.mensaje = '¡Bienvenido!';
  }
  onMouseOut(){
    console.log('Fuera del cuadro');
    this.mensaje = '¡Hola mundo!';
  }
  clickCuadro(){
    this.mensaje = '¡Auch!'
  }
  
  // Input
  onChangeInput( $event:any ){
    // console.log($event.target.value );
    
  }
  onInput($event:any){
    // console.log($event.target.value);

    this.mensaje = $event.target.value;
  }
  onFocus(){
    console.log('focus');
    
  }
  onBlur(){
    console.log('Quita el focus');
    
  }
}
