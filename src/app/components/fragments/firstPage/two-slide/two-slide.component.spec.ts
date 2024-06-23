import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSlideComponent } from './two-slide.component';

describe('TwoSlideComponent', () => {
  let component: TwoSlideComponent;
  let fixture: ComponentFixture<TwoSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
