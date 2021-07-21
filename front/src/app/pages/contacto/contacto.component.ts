import { Component, OnInit } from '@angular/core';
// Importamos el servicio
import { GatitoService } from '../../gatito.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private gatitoService: GatitoService
  ) { }

  title = "Sección contacto";
  subtitle = "Contactanos";
  datita: any;

  showKittens () {
    this.gatitoService.getKittens()
      .subscribe((data: any) => {
        console.log(data);
        this.datita = data;
      });
  }
  
  showName () {
    this.gatitoService.getName()
      .subscribe((data: any) => {
        console.log(data);
        this.datita = data;
      });
  }

  ngOnInit(): void {
    this.showName();
  }

}
