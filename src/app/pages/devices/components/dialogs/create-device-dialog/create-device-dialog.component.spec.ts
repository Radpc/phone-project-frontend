import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeviceDialogComponent } from './create-device-dialog.component';

describe('CreateDeviceDialogComponent', () => {
  let component: CreateDeviceDialogComponent;
  let fixture: ComponentFixture<CreateDeviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDeviceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
