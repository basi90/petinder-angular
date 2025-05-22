import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../model/Pet';

@Pipe({
  name: 'nameFilter'
  // standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(result: Pet[], searchString: string): Pet[] {
    const lowerString = searchString.toLowerCase()
    return result.filter(pet => pet.name.toLowerCase().includes(lowerString))
  }
}
