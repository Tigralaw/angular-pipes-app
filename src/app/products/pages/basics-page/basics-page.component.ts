import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'laura';
  public nameUpper: string = 'LAURA';
  public fullName: string = 'lAurA yESEniA';


  public customDate: Date = new Date();
}
