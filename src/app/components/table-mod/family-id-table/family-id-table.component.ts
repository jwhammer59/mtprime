import { Component, OnInit } from '@angular/core';

import { FamilyID } from 'src/app/models/family-id';
import { FamilyIdsService } from 'src/app/services/family-ids.service';

@Component({
  selector: 'app-family-id-table',
  templateUrl: './family-id-table.component.html',
  styleUrls: ['./family-id-table.component.scss'],
})
export class FamilyIdTableComponent implements OnInit {
  familyIDs: FamilyID[];
  familyID: FamilyID;

  constructor(private familyIdsService: FamilyIdsService) {}

  ngOnInit(): void {
    this.familyIdsService.getFamilyIDs().subscribe((familyIDs) => {
      this.familyIDs = familyIDs;
    });
  }
}
