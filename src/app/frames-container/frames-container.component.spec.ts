import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramesContainerComponent } from './frames-container.component';

describe('FramesContainerComponent', () => {
  let component: FramesContainerComponent;
  let fixture: ComponentFixture<FramesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FramesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FramesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
