import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {
  }

}
