import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersVampireComponent } from './characters-vampire.component';

describe('CharactersVampireComponent', () => {
  let component: CharactersVampireComponent;
  let fixture: ComponentFixture<CharactersVampireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersVampireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersVampireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
