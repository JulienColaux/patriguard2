import { ProprieteService } from '../services/propriete.service';
import { Batiment } from './../models/batiment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit{
  lesBatiments: any =[];

  constructor (private proprieteService: ProprieteService) {}

  ngOnInit(): void {
    this.proprieteService.getAllBati().subscribe((bati)=>{
      this.lesBatiments = bati;
    })
  }
}
