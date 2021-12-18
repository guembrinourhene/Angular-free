import { Component, OnInit } from '@angular/core';
import { SocieteService } from '../services/societe.service';
import societes from './societe-list';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {

  public societeList: any = [];
  constructor(private societeService:SocieteService) { }

  ngOnInit(): void {
    //console.log(this.societeList)
    this.societeService.all().subscribe(
      res => this.societeList = res
    );
  }

}
