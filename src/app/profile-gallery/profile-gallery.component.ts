import { Component, OnInit, inject } from '@angular/core';
import { PetService } from '../service/pet.service';
import { Pet } from '../model/Pet';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile-gallery',
  imports: [],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  petList: Pet[] = []
  petService: PetService = inject(PetService)

  ngOnInit() {
    this.getPets()
  }

  getPets() {
    this.petService.getPets().subscribe(pets => this.petList = pets)
  }
}
