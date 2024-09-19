import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  // Liste des utilisateurs
  private users = [
    { name: 'Mica', password: 'Mica', image: '/images/papaPP.jpg' },
    { name: 'Isa', password: 'Isa', image: '/images/mamanPP.jpg' },
    { name: 'Jules', password: 'Jules', image: '/images/julienPP.jpg' },
    { name: 'Marie', password: 'Marie', image: '/images/mariePP.jpg' }
  ];

  // Méthode de vérification
  login(name: string, password: string): boolean {
    return this.users.some(user => user.name === name && user.password === password);
  }

  getUsers() {
    return this.users;
  }

  constructor() { }
}