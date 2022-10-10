import { Component } from '@angular/core';

@Component({
  selector: 'app-components-communication',
  template: `
  <header class="container">
    <nav>
      <ul>
        <li><a routerLink="./parent-child" >Parent ➡ Child</a></li>
        <li><a routerLink="./child-parent" >Child ➡ Parent</a></li>
        <li><a routerLink="./parent-child-grand-child" >Parent ➡ Child ➡ Grand Child</a></li>
        <li><a routerLink="./grand-child-child-parent" >Grand Child ➡ Child ➡ Parent</a></li>
      </ul>
    </nav>
  </header>
  <main class="container">
    <router-outlet></router-outlet>
  </main>
  `,
  styles: [
    `
    nav ul {
      list-style: none;
    }
  `,
  ],
})
export class ComponentsCommunicationComponent {}
