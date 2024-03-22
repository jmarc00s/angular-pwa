import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="w-full h-full">
      <h1 class="font-semibold text-lg text-center">This is about page!</h1>
    </section>
  `,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
