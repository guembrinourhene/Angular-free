import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profils } from 'src/app/profil.model';
import { ProfilsService } from 'src/app/services/profils.service';
import profils from '../profil-list';

@Component({
  selector: 'app-profil-details',
  templateUrl: './profil-details.component.html',
  styleUrls: ['./profil-details.component.css']
})
export class ProfilDetailsComponent implements OnInit {

  public profils?: Profils;
  constructor(private route: ActivatedRoute, private profilsservices: ProfilsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        const profilsId= params.get("id");
        //this.profils =profils.filter(profils => profils.id === profilsId)[0]
        this.profilsservices.get(profilsId!).subscribe(profils => this.profils=profils);
      });
  }
}
