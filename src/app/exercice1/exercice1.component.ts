import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public world: string = 'World !';
  public imageUrl: string =
    'https://i0.wp.com/huetteplays.de/wp-content/uploads/2021/11/B6334A6D-EC43-458F-8424-8FFA8792474F.png?w=640&ssl=1';

  constructor() {}

  ngOnInit(): void {}
}
