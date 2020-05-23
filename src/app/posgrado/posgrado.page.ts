import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posgrado',
  templateUrl: './posgrado.page.html',
  styleUrls: ['./posgrado.page.scss'],
})
export class PosgradoPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
