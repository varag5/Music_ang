import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importáld a RouterModule-t

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  // Add hozzá a RouterModule-t az imports mezőhöz
})
export class AppComponent implements OnInit {

  ngOnInit() {}

  constructor() {}
}
