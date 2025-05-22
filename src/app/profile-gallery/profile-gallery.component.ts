import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/Pet';
import { AsyncPipe } from '@angular/common';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile-gallery',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent{
  // petList: Pet[] = []
  petService: PetService = inject(PetService)

  pets$ = this.petService.getPets()

  selectedPet: Pet | null = null


  selectPet(pet: Pet) {
    this.selectedPet = pet
  }

  // ngOnInit() {
  //   this.getPets()
  // }

  // getPets() {
  //   this.petService.getPets().subscribe(pets => this.petList = pets)
  // }
}
