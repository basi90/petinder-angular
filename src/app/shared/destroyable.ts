import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class Destroyable {
  protected destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    console.log('[Destroyable] ngOnDestroy called');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
