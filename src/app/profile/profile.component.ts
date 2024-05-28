import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  x: number = 0;
  y: number = 0;

  onLike() {
    this.x++;
    const likeBadge = document.querySelector('.likeBadge');
    if (likeBadge) {
      likeBadge.innerHTML = this.x.toString();
    }

  }

  onComment() {
    this.y++;
    const commentBadge = document.querySelector('.commentBadge');
    if (commentBadge) {
      commentBadge.innerHTML = this.y.toString();
    }
  }

}
