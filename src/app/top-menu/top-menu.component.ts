import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
 logado : boolean;
  constructor() { }

  ngOnInit(): void {
    this.logado = false;
  }
  
  setLogado( stt : boolean){
    this.logado= stt;
  }
}