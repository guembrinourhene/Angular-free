import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocieteService } from 'src/app/services/societe.service';
import { Societes } from 'src/app/societe.model';
import societes from '../societe-list';

@Component({
  selector: 'app-societe-details',
  templateUrl: './societe-details.component.html',
  styleUrls: ['./societe-details.component.css']
})
export class SocieteDetailsComponent implements OnInit {

  public societes?: any;
  constructor(private route: ActivatedRoute, private societeService: SocieteService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        const societesId= params.get("id");
        this.societes =societes.filter(societes => societes.id === societesId)[0]
      });
  }
}
