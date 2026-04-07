import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtwork } from './add-artwork';

describe('AddArtwork', () => {
  let component: AddArtwork;
  let fixture: ComponentFixture<AddArtwork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArtwork],
    }).compileComponents();

    fixture = TestBed.createComponent(AddArtwork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
