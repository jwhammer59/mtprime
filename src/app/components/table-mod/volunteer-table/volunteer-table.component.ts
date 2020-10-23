import { Component, OnInit } from '@angular/core';

import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from 'src/app/services/volunteers.service';

@Component({
  selector: 'app-volunteer-table',
  templateUrl: './volunteer-table.component.html',
  styleUrls: ['./volunteer-table.component.scss'],
})
export class VolunteerTableComponent implements OnInit {
  volunteers: Volunteer[];
  volunteer: Volunteer;

  constructor(private volunteersService: VolunteersService) {}

  ngOnInit(): void {
    this.volunteersService.getVolunteers().subscribe((volunteers) => {
      this.volunteers = volunteers;
    });
  }
}
