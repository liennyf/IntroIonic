import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  varNew: string = "Contoh String Baru";
  constructor() {}

  updateVar(){
    if(this.varNew == "Contoh String Baru"){
      this.varNew = "Contoh Sudah Diubah";
    }
    else{
      this.varNew = "Contoh String Baru";
    }
  }
}
