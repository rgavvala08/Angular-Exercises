import { Component } from '@angular/core';
import { ThemeProps } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services:string[]=["About","Company","Services"]
 headermenu:string[]=["Home","Product","Company"]
  footermenu:string[]=["Content","subHeader","navigation"]

  themeStyles: ThemeProps[]=[

    {backgroundColor:"#1a1617",color:"whitesmoke"},

    {backgroundColor:"#2E4053",color:"#whitesmoke"},

    {backgroundColor:"#2E86C1",color:"#F7F9F9"},

    {backgroundColor:"#CB4335",color:"#F7F9F9"},
]

currentTheme:ThemeProps=this.themeStyles[0]
}
