import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceCategoryDialogComponent } from './edit-device-category-dialog.component';

describe('CreateDeviceDialogComponent', () => {
  let component: EditDeviceCategoryDialogComponent;
  let fixture: ComponentFixture<EditDeviceCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeviceCategoryDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDeviceCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
