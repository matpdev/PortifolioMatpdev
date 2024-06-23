import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSlideComponent } from './presentation-slide.component';

describe('PresentationSlideComponent', () => {
  let component: PresentationSlideComponent;
  let fixture: ComponentFixture<PresentationSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentationSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
