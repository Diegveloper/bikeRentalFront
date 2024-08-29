import { Component, Input} from '@angular/core';

import { Bike } from '../interfaces/bike.interface';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  @Input() bike!: Bike;
  imageUrl!: string;

  ngOnInit():void{
    if(this.bike){
      this.imageUrl = this.bike.image;
    }
  }

}
