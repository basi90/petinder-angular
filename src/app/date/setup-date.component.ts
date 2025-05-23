import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-setup-date',
  imports: [CommonModule, RouterModule],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit {
  petName: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.petName = this.route.snapshot.paramMap.get('name') ?? ''
  }
}
