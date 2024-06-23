import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSlideComponent } from './one-slide.component';

describe('OneSlideComponent', () => {
  let component: OneSlideComponent;
  let fixture: ComponentFixture<OneSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
