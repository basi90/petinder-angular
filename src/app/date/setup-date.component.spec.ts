import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetupDateComponent } from './setup-date.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PetService } from '../service/pet.service';
import { FormBuilder } from '@angular/forms';

describe('SetupDateComponent', () => {
  let component: SetupDateComponent;
  let fixture: ComponentFixture<SetupDateComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'Fluffy'  // Simulated pet name
      }
    }
  };

  const mockPetService = {
    getPets: () => of([
      { name: 'Fluffy', kind: 'Dog', image: 'fluffy.jpg', profileText: 'Loves bones', popularity: 5 }
    ])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupDateComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: PetService, useValue: mockPetService },
        FormBuilder
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SetupDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
