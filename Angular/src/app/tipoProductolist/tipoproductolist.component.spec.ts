import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  TipoProductolistComponent } from './tipoproductolist.component';

describe('TipoProductolistComponent', () => {
  let component: TipoProductolistComponent;
  let fixture: ComponentFixture<TipoProductolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProductolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProductolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
