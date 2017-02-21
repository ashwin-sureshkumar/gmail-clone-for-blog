import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListItemComponent } from './email-list-item.component';

describe('EmailListItemComponent', () => {
  let component: EmailListItemComponent;
  let fixture: ComponentFixture<EmailListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
