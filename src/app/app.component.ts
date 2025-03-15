import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzButtonModule],
  template: `
    <div class="min-h-screen bg-white">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor() {}
}
