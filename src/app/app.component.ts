import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from "./frame/frame.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bikeRentalApp';
}
