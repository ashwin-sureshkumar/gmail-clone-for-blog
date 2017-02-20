import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmSideNavComponent } from './gm-side-nav.component';

describe('GmSideNavComponent', () => {
  let component: GmSideNavComponent;
  let fixture: ComponentFixture<GmSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
