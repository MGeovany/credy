import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  template: `
    <div
      class="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4"
    >
      <div class="max-w-md w-full text-center">
        <h1 class="text-4xl font-bold mb-6">Credy</h1>
        <p class="text-xl mb-8">Track your credit card expenses easily</p>

        <button
          nz-button
          nzType="primary"
          class="bg-black text-white hover:bg-gray-800 h-12 px-8 rounded-md"
          (click)="login()"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .ant-btn-primary {
        background-color: black;
      }
    `,
  ],
})
export class LandingComponent {
  constructor(private router: Router) {}

  async login() {
    this.router.navigate(['/dashboard']);
  }
}
