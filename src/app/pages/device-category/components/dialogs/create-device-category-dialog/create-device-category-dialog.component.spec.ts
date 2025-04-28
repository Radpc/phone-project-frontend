import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeviceCategoryDialogComponent } from './create-device-category-dialog.component';

describe('CreateDeviceDialogComponent', () => {
  let component: CreateDeviceCategoryDialogComponent;
  let fixture: ComponentFixture<CreateDeviceCategoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDeviceCategoryDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDeviceCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
