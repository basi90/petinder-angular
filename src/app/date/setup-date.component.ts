import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/Pet';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Destroyable } from '../shared/destroyable';

@Component({
  selector: 'app-setup-date',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent extends Destroyable implements OnInit {
  petName: string = ''
  pet: Pet | null = null
  sendTextForm: FormGroup

  private route = inject(ActivatedRoute);
  private petService = inject(PetService);
  private formBuilder = inject(FormBuilder);


  constructor() {
    super();
    this.sendTextForm = this.formBuilder.group({
      message: ['']
    });
  }

  ngOnInit(): void {
    this.petName = this.route.snapshot.paramMap.get('name') ?? '';
    this.petService.getPets()
      .pipe(takeUntil(this.destroy$))
      .subscribe((pets: Pet[]) => {
        this.pet = pets.find(p => p.name === this.petName) ?? null;
      });
  }

  onSubmit(): void {
    if (this.sendTextForm.valid) {
      const message = this.sendTextForm.value.message;
      console.log(`Sending message to ${this.petName}: ${message}`);
      this.sendTextForm.reset();
    }
  }
}
