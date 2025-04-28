import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeDeviceCategoryDialogComponent } from './visualize-device-category-dialog.component';

describe('VisualizeDeviceDialogComponent', () => {
  let component: VisualizeDeviceCategoryDialogComponent;
  let fixture: ComponentFixture<VisualizeDeviceCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizeDeviceCategoryDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizeDeviceCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
