import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
})
export class MultimediaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

}
