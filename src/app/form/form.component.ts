import { Component } from '@angular/core';
import { ProprieteService } from '../services/propriete.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newBati: any = {id:null, name: "", type: "", adresse: "", locataire: ""}
  lesBatiments: any =[];


  constructor (private proprieteService: ProprieteService) {}

  ngOnInit(): void {
    this.proprieteService.getAllBati().subscribe((bati)=>{
      this.lesBatiments = bati;
    })
  }

  addBatiment():void{
    this.proprieteService.addBati(this.newBati).subscribe((bati)=>{
      this.lesBatiments.push(bati);
    })
  }
}
