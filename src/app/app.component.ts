import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any = [];
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    /*  this.fetchUsers(); */
  }

  ondeleteUser(id: number) {
    this.http.delete(this.url).subscribe();
  }
}
