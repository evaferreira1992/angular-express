import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetero',
  templateUrl: './tarjetero.component.html',
  styleUrls: ['./tarjetero.component.scss']
})
export class TarjeteroComponent implements OnInit {

  constructor() { }

  categoria = 'Hoteles';
  titulo = 'Viaja a Bariloche';
  flex = true;

  ngOnInit(): void {
  }

}
