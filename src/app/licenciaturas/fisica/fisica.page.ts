import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.page.html',
  styleUrls: ['./fisica.page.scss'],
})
export class FisicaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
