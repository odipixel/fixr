import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {
  lat: number = 77.6763;
  lng: number = 12.9115;
  constructor() { }

  ngOnInit() {
  }

}
