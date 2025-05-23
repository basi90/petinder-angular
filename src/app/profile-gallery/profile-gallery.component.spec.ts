import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileGalleryComponent } from './profile-gallery.component';
import { of } from 'rxjs';
import { PetService } from '../service/pet.service';
import { FormBuilder } from '@angular/forms';

describe('ProfileGalleryComponent', () => {
  let component: ProfileGalleryComponent;
  let fixture: ComponentFixture<ProfileGalleryComponent>;

  const petServiceMock = {
    getPets: () => of([]),
    addPet: () => of({})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileGalleryComponent],
      providers: [
        { provide: PetService, useValue: petServiceMock },
        FormBuilder // Also needed for form injection
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
