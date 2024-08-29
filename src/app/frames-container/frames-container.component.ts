import { Component } from '@angular/core';
import { BikesService } from './services/bikes-service.service';
import { Bike } from '../interfaces/bike.interface';
import { FrameComponent } from "../frame/frame.component";

@Component({
  selector: 'app-frames-container',
  standalone: true,
  imports: [FrameComponent],
  templateUrl: './frames-container.component.html',
  styleUrl: './frames-container.component.scss'
})
export class FramesContainerComponent {
  constructor(private service: BikesService){

  }
   bikes!: Bike[];
  ngOnInit(): void
  {
    this.service.getBikes().subscribe(
      (data: Bike[]) => {this.bikes = data}
    );
    console.log(this.bikes);
  }
}
