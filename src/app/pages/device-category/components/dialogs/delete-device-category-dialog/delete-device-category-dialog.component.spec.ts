import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeviceCategoryDialogComponent } from './delete-device-category-dialog.component';

describe('VisualizeDeviceDialogComponent', () => {
  let component: DeleteDeviceCategoryDialogComponent;
  let fixture: ComponentFixture<DeleteDeviceCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDeviceCategoryDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDeviceCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
