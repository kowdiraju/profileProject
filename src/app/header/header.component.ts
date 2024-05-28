import { Component, ElementRef, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() data: any;

  constructor(private el: ElementRef) { }
  ngOnInit(){

  }
  openOffCanvas() {
    this.data.openOffCanvas();
  }
}

