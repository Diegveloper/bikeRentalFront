import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FramesContainerComponent } from "../frames-container/frames-container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FramesContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
