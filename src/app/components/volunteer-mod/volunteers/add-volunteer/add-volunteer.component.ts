import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Volunteer } from 'src/app/models/volunteer';
import { VolunteersService } from 'src/app/services/volunteers.service';

import { FamilyID } from 'src/app/models/family-id';
import { FamilyIdsService } from 'src/app/services/family-ids.service';

import { SelectItem } from 'primeng/api';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.scss'],
})
export class AddVolunteerComponent implements OnInit {
  headerTitle = 'Add Volunteer Page';

  onlyFamilyIDs$: Observable<any>;

  allFamilyID: any;
  allFamilyIDs$: Observable<FamilyID[]>;

  nameId: FamilyID[] = [];

  volunteerForm: FormGroup;

  testArray = [
    { label: 'Hammer1', value: 'h1', id: '1' },
    { label: 'Hammer2', value: 'h2', id: '2' },
    { label: 'Hammer3', value: 'h3', id: '3' },
    { label: 'Hammer4', value: 'h4', id: '4' },
    { label: 'Hammer5', value: 'h5', id: '5' },
  ];

  constructor(
    private volunteersService: VolunteersService,
    private familyIdsService: FamilyIdsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.volunteerForm = this.fb.group({
      dateUnAvailable: this.fb.array([]),
      eventTypesAvailable: this.fb.array([]),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      familyID: ['', Validators.required],
      isAdmin: [false, Validators.required],
      isAvailable: [false, Validators.required],
      isCantor: [false, Validators.required],
      isEMoHC: [false, Validators.required],
      isGifts: [false, Validators.required],
      isGiftsChild: [false, Validators.required],
      isLector: [false, Validators.required],
      isRosary: [false, Validators.required],
      isServer: [false, Validators.required],
      isTech: [false, Validators.required],
      isUsher: [false, Validators.required],
      isOther: [false, Validators.required],
      isMassCoord: [false, Validators.required],
      isSaturday: [false, Validators.required],
      isSundayEarly: [false, Validators.required],
      isSundayLate: [false, Validators.required],
      isWeekday: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    this.allFamilyIDs$ = this.familyIdsService.getFamilyIDs();

    this.onlyFamilyIDs$ = this.allFamilyIDs$.pipe(
      map((familyIds) => {
        this.allFamilyID = familyIds;
      })
    );

    this.onlyFamilyIDs$.subscribe((nameIds: FamilyID[]) => {
      this.nameId = nameIds;
      console.log(nameIds);
    });
  }

  handleFamilyID(e) {
    console.log(e.value.familyID);
  }

  onSubmit({ value, valid }: { value: Volunteer; valid: boolean }) {
    console.log(value);
    if (!valid) {
      // Show error message
      console.log('Form Invalid');
    } else {
      this.volunteersService.addVolunteer(value);
      console.log('Volunteer Added');
      this.router.navigate(['/volunteers']);
    }
  }
}
