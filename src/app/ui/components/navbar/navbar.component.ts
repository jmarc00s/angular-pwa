import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  standalone: true,
  template: `
    <div class="flex justify-between items-center h-16 bg-gray-950 px-8">
      <h1 class="font-semibold text-lg">Angular pwa App</h1>
      <nav class="flex gap-4">
        <a [routerLink]="''" class="text-md font-medium hover:bg-gray-900 px-2 py-1 rounded-md">Home</a>
        <a [routerLink]="'about'" class="text-md font-medium hover:bg-gray-900 px-2 py-1 rounded-md">About</a>
      </nav>
    </div>
  `,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
