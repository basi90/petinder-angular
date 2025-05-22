import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/Pet';
import { NameFilterPipe } from '../pipes/name-filter.pipe';
import { FormsModule } from '@angular/forms';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

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
    profileText:['']
  });

  selectPet(pet: Pet) {
    this.selectedPet = pet
  }

  onSubmit() {}

  // ngOnInit() {
  //   this.getPets()
  // }

  // getPets() {
  //   this.petService.getPets().subscribe(pets => this.petList = pets)
  // }
}
