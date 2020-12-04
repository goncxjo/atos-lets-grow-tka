import { Component, OnInit } from '@angular/core';

const MODULES = [
  { module: "exams", name: "Exams" },
  { module: "candidates", name: "Candidates" },
  { module: "reports", name: "Reports" },
  { module: "admin", name: "Administration" },
  { module: "security", name: "Security" },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  searchText

  constructor() {}

  ngOnInit() {}
}
