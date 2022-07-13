import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  names: string[] =["Sirius 1","Vanguard 1","SNAP 10-A","Hubble Space Telescope",'Envisat','Thermal Blanket','Morelos III','IIR-M','ISS']


   totalCount(name:string[]):number{
	let count2 =0;
	if(this.satellites){
		for(let i=0; i< this.satellites.length; i++){
			if(this.satellites[i].name === name[i]){
				count2++;
			} 
		}
	}
	return count2;
   }

   
  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

  
}