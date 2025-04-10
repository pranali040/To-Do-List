import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskItemComponent } from './app-task-item.component';

describe('AppTaskItemComponent', () => {
  let component: AppTaskItemComponent;
  let fixture: ComponentFixture<AppTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTaskItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
