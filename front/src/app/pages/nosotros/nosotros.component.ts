import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  saludar () {
    alert("Oh, hiciste click!");
  }

  title = "Sección nosotros";
  subtitle = "Quienes somos";
  mostrar = false;

  toggleInformation () {
    // Invertimos el estado de mostrar
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
  }

}
