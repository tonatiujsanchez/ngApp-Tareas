import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { AlertaComponent } from './components/alerta/alerta.component';
import { SumaComponent } from './components/suma/suma.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormularioComponent } from './tareas/formulario/formulario.component';
import { ListaComponent } from './tareas/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    CronometroComponent,
    EventosComponent,
    CalculadoraComponent,
    AlertaComponent,
    SumaComponent,
    TareasComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
