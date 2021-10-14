import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  tareas = [
    {
      nombre: 'Sitio web - Legado de Guerrero',
      desc: 'Desarrollar el sitio web del medio estatal "Legado de Guerrero" con Angular y Firebase.'
    },
    {
      nombre: 'Sitio web - El Diario de Malinaltepec',
      desc: 'Desarrollar el sitio web de del medio municipal "El Diario de Malinalpepec" con React y MongoDB.'
    },
    {
      nombre: 'Actualizar la App del Desperta de la Montaña',
      desc: 'Actualizar la App del medio "Despertar de la Montaña"; mudar la applicación de Ionic 3 a ionic 6 con Angular.'
    },
    {
      nombre: 'Desarrollar la App del Legado de Tlapa',
      desc: 'Desarrollar la aplicacion movil del medio "Legado de Tlapa" con Ionic 6 utilizando Angular.'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

  addTarea( $event:any ){
    console.log( $event );
    
    this.tareas.push( $event );
  }

}
