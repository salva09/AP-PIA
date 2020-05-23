import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-actuaria',
  templateUrl: './actuaria.page.html',
  styleUrls: ['./actuaria.page.scss'],
})
export class ActuariaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
