const { Component } = '@angular/core';

@Component({
  selector: 'like-button',
  template: `
   <button class="like-button liked" (click)="toggleLike()">Like button | <span class="likes-counter">{{initialCount}}</span></button>
  `,
  styles: [`
    .like-button {
      font-size: 1rem;
      padding: 5px 10px;
      color: #585858;
    }
    
    .liked {
      font-weight: bold;
      color: #1565c0;
    }
    
    .likes-counter {
      color: red;
    }
  `]
})

export class LikeButtonComponent {
  public initialCount = 100;

  toggleLike() {
    this.initialCount = this.initialCount === 100 ? this.initialCount + 1 : 100
  }
}