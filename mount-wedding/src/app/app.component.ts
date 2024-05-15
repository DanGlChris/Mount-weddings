import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mount-wedding';
  login_page : boolean = true;
  main_page : boolean = false;
  other_page: boolean = false;

  change_main_page(value: boolean): void{
    this.login_page = !this.login_page;
  }
}
