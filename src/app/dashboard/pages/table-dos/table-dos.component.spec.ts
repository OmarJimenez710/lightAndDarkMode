import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDosComponent } from './table-dos.component';

describe('TableDosComponent', () => {
  let component: TableDosComponent;
  let fixture: ComponentFixture<TableDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDosComponent]
    });
    fixture = TestBed.createComponent(TableDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
