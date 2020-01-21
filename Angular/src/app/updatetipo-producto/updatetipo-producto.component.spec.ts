import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetipoProductoComponent } from './updatetipo-producto.component';

describe('UpdatetipoProductoComponent', () => {
  let component: UpdatetipoProductoComponent;
  let fixture: ComponentFixture<UpdatetipoProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetipoProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
