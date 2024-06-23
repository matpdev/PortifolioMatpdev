import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIndexComponent } from './link-index.component';

describe('LinkIndexComponent', () => {
  let component: LinkIndexComponent;
  let fixture: ComponentFixture<LinkIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
