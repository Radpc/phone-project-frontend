import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeviceDialogComponent } from './delete-device-dialog.component';

describe('VisualizeDeviceDialogComponent', () => {
  let component: DeleteDeviceDialogComponent;
  let fixture: ComponentFixture<DeleteDeviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDeviceDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
