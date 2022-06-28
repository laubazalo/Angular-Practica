import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Evento {
  constructor(
    public nombre: string,
    public lugar: string,
    public fecha: string
  ) {}
}
