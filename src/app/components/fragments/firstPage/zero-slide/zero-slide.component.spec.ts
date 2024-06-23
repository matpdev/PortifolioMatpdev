import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroSlideComponent } from './zero-slide.component';

describe('ZeroSlideComponent', () => {
  let component: ZeroSlideComponent;
  let fixture: ComponentFixture<ZeroSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZeroSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
