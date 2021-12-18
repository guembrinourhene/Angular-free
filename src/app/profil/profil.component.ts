import { Component, OnInit } from '@angular/core';
import { ProfilsService } from '../services/profils.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public profilList: any = []; 


  constructor(private profilsservices: ProfilsService) { }

  ngOnInit(): void {
    this.profilsservices.all().subscribe(
      res => this.profilList = res

    );
  }

}
