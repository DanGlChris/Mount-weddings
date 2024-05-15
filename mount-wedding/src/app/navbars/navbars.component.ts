import { Component, EventEmitter, Output, output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrl: './navbars.component.scss'
})
export class NavbarsComponent {
  @Output() change_main_page = new EventEmitter<string>();
  main_page: boolean = false;
  
  change_mainpage(){
    this.main_page = !this.main_page;
  }

}
