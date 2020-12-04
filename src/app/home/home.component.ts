import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  searchText
  MODULES = [
    { route: "exams", name: "Exams", icon: "fa fa-file-alt fa-4x" },
    { route: "candidates", name: "Candidates", icon: "fa fa-users fa-4x" },
    { route: "reports", name: "Reports", icon: "fa fa-chart-pie fa-4x" },
    { route: "admin", name: "Administration", icon: "fa fa-tools fa-4x" },
    { route: "security", name: "Security", icon: "fa fa-user-shield fa-4x" },
  ]

  constructor() {}

  ngOnInit() {}
}
