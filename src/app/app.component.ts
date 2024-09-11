import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from "./frame/frame.component";
import { FramesContainerComponent } from "./frames-container/frames-container.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent, FramesContainerComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bikeRentalApp';
}
