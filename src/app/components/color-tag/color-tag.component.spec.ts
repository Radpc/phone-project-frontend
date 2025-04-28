import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTagComponent } from './color-tag.component';

describe('ColorTagComponent', () => {
  let component: ColorTagComponent;
  let fixture: ComponentFixture<ColorTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
