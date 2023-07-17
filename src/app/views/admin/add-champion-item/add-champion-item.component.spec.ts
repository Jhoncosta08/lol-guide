import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChampionItemComponent } from './add-champion-item.component';

describe('AddChampionItemComponent', () => {
  let component: AddChampionItemComponent;
  let fixture: ComponentFixture<AddChampionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChampionItemComponent]
    });
    fixture = TestBed.createComponent(AddChampionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
