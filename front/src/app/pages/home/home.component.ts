import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'Gatitos';
  subtitle = 'Todo lo que necesitas saber';

  cards = [
    {
      imagen: "/assets/images/imagen-placeholder.jpg",
      categoria: "Vuelos",
      titulo: "Australia",
      precio: 635
    },
    {
      imagen: "/assets/images/austin.jpg",
      titulo: "Austin",
      precio: 55
    },
    {
      imagen: "/assets/images/melbourne.jpg",
      categoria: "Alojamiento",
      titulo: "Melbourne",
      precio: 245
    },
    {
      imagen: "/assets/images/medellin.jpg",
      categoria: "Vuelos",
      titulo: "Colombia",
      precio: 103
    }
  ]

  ngOnInit(): void {
  }

}
