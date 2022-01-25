import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersVampireFormComponent } from './characters-vampire-form.component';

describe('CharactersVampireFormComponent', () => {
  let component: CharactersVampireFormComponent;
  let fixture: ComponentFixture<CharactersVampireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersVampireFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersVampireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
