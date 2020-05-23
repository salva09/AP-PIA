import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-matematicas',
  templateUrl: './matematicas.page.html',
  styleUrls: ['./matematicas.page.scss'],
})
export class MatematicasPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
