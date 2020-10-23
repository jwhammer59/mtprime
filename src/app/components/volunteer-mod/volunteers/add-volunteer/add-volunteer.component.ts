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

  saturdayChecked: boolean = false;
  sundayEarlyChecked: boolean = false;
  sundayLateChecked: boolean = false;
  weekdayChecked: boolean = false;

  onlyFamilyIDs$: Observable<any>;

  familyID: any;
  allFamilyIDs$: Observable<FamilyID[]>;

  isLoading: boolean;

  nameId: FamilyID[] = [];

  volunteerForm: FormGroup;

  fData = [
    { cheese: 'Hammer1', value: 'Hammer1' },
    { cheese: 'Hammer2', value: 'Hammer2' },
    { cheese: 'Hammer3', value: 'Hammer3' },
    { cheese: 'Hammer4', value: 'Hammer4' },
    { cheese: 'Hammer5', value: 'Hammer5' },
    { cheese: 'Hammer6', value: 'Hammer6' },
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
      isSaturday: false,
      isSundayEarly: false,
      isSundayLate: false,
      isWeekday: false,
    });
  }

  ngOnInit(): void {
    // Get All Family ID's

    this.checkArray();
    this.loadFamilyIDs();
  }

  checkArray() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.familyID);
      console.log(this.nameId);
    }, 2000);
  }

  loadFamilyIDs() {
    this.allFamilyIDs$ = this.familyIdsService.getFamilyIDs();

    this.onlyFamilyIDs$ = this.allFamilyIDs$.pipe(
      map((familyIds) => {
        this.familyID = familyIds;
      })
    );

    this.onlyFamilyIDs$.subscribe((nameId: FamilyID[]) => {
      this.nameId = nameId;
    });
  }

  handleEventTimeCheckbox(time: string) {
    console.log(time);
    if (time === 'Saturday') {
      this.saturdayChecked = !this.saturdayChecked;
    } else if (time === 'Sunday-Early') {
      this.sundayEarlyChecked = !this.sundayEarlyChecked;
    } else if (time === 'Sunday-Late') {
      this.sundayLateChecked = !this.sundayLateChecked;
    } else {
      this.weekdayChecked = !this.weekdayChecked;
    }
    this.setEventStatus();
  }

  setEventStatus() {
    console.log('Set Event Status Method');
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
