import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    HeaderComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moneyManagement';
}
