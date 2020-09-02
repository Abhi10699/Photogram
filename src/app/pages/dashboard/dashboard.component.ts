import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  sidebarItems: sideBaritem[] = [
    {
      icon: "fas fa-newspaper",
      title: "Todays Feed"
    },
    {
      icon: "fas fa-calendar",
      title: "History"
    },
    {
      icon: "fas fa-poll",
      title: "Votings"
    },
    {
      icon: "fas fa-bell",
      title: "Notification"
    }
  ]

  ngOnInit(): void {
  }

}


interface sideBaritem {
  icon: string,
  title: string,
}