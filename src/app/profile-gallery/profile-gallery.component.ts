import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/Pet';
import { NameFilterPipe } from '../pipes/name-filter.pipe';
import { FormsModule } from '@angular/forms';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { CreatePet } from '../model/CreatePet';

@Component({
  selector: 'app-profile-gallery',
  imports: [CommonModule, NameFilterPipe, FormsModule,ReactiveFormsModule],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent{
  // petList: Pet[] = []
  petService: PetService = inject(PetService)
  formBuilder: FormBuilder = inject(FormBuilder)


  pets$ = this.petService.getPets()

  selectedPet: Pet | null = null
  searchText: string = ''

  dogForm = this.formBuilder.group({
    name:[''],
    kind:[''],
    image:[''],
    profileText:[''],
    popularity:[0]
  });

  selectPet(pet: Pet) {
    this.selectedPet = pet
  }

  onSubmit() {
    if (this.dogForm.valid) {
      const formValue = this.dogForm.value;

      const newPet: CreatePet = {
        name: formValue.name?.trim() || '',
        kind: formValue.kind?.trim() || '',
        image: formValue.image?.trim() || '',
        profileText: formValue.profileText?.trim() || '',
        popularity: formValue.popularity ?? 0
      };

      this.petService.addPet(newPet).subscribe({
        next: () => {
          this.pets$ = this.petService.getPets();
          this.dogForm.reset({ popularity: 0 }); // optional reset with default
        },
        error: (err) => {
          console.error('Failed to add pet:', err);
        }
      });
    }
  }


  // ngOnInit() {
  //   this.getPets()
  // }

  // getPets() {
  //   this.petService.getPets().subscribe(pets => this.petList = pets)
  // }
}
