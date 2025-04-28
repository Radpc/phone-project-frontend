import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeDeviceDialogComponent } from './visualize-device-dialog.component';

describe('VisualizeDeviceDialogComponent', () => {
  let component: VisualizeDeviceDialogComponent;
  let fixture: ComponentFixture<VisualizeDeviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizeDeviceDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizeDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
