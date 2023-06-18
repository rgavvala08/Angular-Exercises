import { Component,Input } from '@angular/core';
import { ThemeProps } from '../types';
import { Dataservice } from 'src/Service/data.service';
// import { Dataservice } from '../Service.data.service';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() boxtheme:ThemeProps={color:"",backgroundColor:""}
  @Input("title") boxtitle:string=""
  features:any[]=[]
  constructor(private ds:Dataservice){
 
  }
  
  ngOnInit(): void {
    this.features=this.ds.getmenus(this.boxtitle)
  }
  

//  @Input() features:string=""

}
