import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent  implements OnInit{
  users: { name: string; password: string; image: string }[] = [];
  password: string = ''; 
  errorMessage: string = '';
  selectedUser: string = '';

  constructor(private logService: LogService, private router: Router) { }

  ngOnInit() {
    this.users = this.logService.getUsers();  // Récupération des utilisateurs lors de l'initialisation
  }

  selectUser(userName: string) {
    this.selectedUser = userName;
  }

  onLogin() {
    if (this.logService.login(this.selectedUser, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Mot de passe incorrect';
    }
  }
}
