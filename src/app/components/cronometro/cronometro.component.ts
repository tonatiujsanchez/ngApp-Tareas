import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit, OnDestroy {
  
  @Input() contador:number;
  interval:any;


  @Output() msgTerminado: EventEmitter<string>;

  constructor() { 
    this.contador = 10;
    this.msgTerminado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
  if( !(this.contador <= 0) ){

    let interval = setInterval( ()=>{ 
        this.contador--
        if( this.contador === 0 ){
          clearInterval(interval);
          this.msgTerminado.emit('Contador terminado!!!');
        }
      }, 1000 );
    }
    
  }

  
  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
