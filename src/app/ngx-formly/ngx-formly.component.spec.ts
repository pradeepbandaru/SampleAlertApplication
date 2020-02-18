import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormlyComponent } from './ngx-formly.component';

describe('NgxFormlyComponent', () => {
  let component: NgxFormlyComponent;
  let fixture: ComponentFixture<NgxFormlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
