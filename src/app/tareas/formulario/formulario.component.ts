import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  @Output() tareaAgregada: EventEmitter<any>;

  tarea = {
    nombre: '',
    desc: ''
  };
  constructor() { 
    this.tareaAgregada = new EventEmitter();
  }

  ngOnInit(): void {
  
  }
  
  agregarTarea(){
    if( this.tarea.nombre === '' || this.tarea.desc === '' ){
      console.log('Completa los campos');
      return;
    }
    
    let tareaNueva = Object.assign({}, this.tarea); 
    this.tareaAgregada.emit( tareaNueva );

    this.tarea.nombre = '';
    this.tarea.desc = '';
  }
}
