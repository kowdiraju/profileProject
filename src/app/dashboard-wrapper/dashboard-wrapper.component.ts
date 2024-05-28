import { Component, ElementRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-wrapper',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterModule],
  templateUrl: './dashboard-wrapper.component.html',
  styleUrl: './dashboard-wrapper.component.scss'
})
export class DashboardWrapperComponent {
  inputToChild:any = {};
  isOffCanvasOpen = false;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.inputToChild.openOffCanvas = this.openOffCanvas.bind(this);
  }

  openOffCanvas() {
    const bodyWrapper = this.el.nativeElement.querySelector('.bodyWrapper');
    bodyWrapper.classList.add('shift-right');

    if (this.isOffCanvasOpen) {
      bodyWrapper.classList.remove('shift-right');
    } else {
      bodyWrapper.classList.add('shift-right');
    }

    this.isOffCanvasOpen = !this.isOffCanvasOpen;
  }
}
