import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  
  @Input('peli') mensaje:string;
  
  @Output() AlertaPulsada: EventEmitter<string>;

  constructor() {
    this.mensaje = 'Hola mundo! deesde Alerta';
    this.AlertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  onClick(){
    this.AlertaPulsada.emit('Alerta Pulsada!!!');
  }
}
