import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjeteroComponent } from './tarjetero.component';

describe('TarjeteroComponent', () => {
  let component: TarjeteroComponent;
  let fixture: ComponentFixture<TarjeteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjeteroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjeteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
