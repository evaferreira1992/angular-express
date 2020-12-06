import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  constructor() { }

  // Le envío información al archivo de HTML
  // categoria = 'Vuelos'
  @Input() categoria = 'Predeterminado';
  @Input() titulo = 'Título acá';
  @Input() flex = false;

  ngOnInit(): void {
  }

}
