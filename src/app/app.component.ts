import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from "./frame/frame.component";
import { FramesContainerComponent } from "./frames-container/frames-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent, FramesContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bikeRentalApp';
}
