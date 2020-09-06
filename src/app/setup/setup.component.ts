import { Component, OnInit } from '@angular/core';
import { EducationInfoService } from '../services/education-info.service';
import { EducationInfo, EducationLevel, AcademicYear, StartEndDate, TotalCourseWeek, EducationPeriod } from './educationInfo';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  providers: [EducationInfoService]
})
export class SetupComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private educationInfoService: EducationInfoService, private formBuilder: FormBuilder) { }

  setupForm: FormGroup;
  createSetupForm() {
    this.setupForm = this.formBuilder.group({
      educationLevelId: ["", Validators.required],
      academicYearId: ["", Validators.required],
      educationPeriodId: ["", Validators.required],
      startEndDateId: ["", Validators.required],
      totalCourseWeekId: ["", Validators.required]
    });
  }

  educationLevels: EducationLevel[];
  academicYears: AcademicYear[];
  educationPeriods: EducationPeriod[];
  startEndDates: StartEndDate[];
  totalCourseWeeks: TotalCourseWeek[];

  educationInfo: EducationInfo = new EducationInfo();
  // educationLevelModel: EducationLevel = new EducationLevel();
  // academicYearModel: AcademicYear = new AcademicYear();
  // educationPeriodModel: EducationPeriod = new EducationPeriod();
  // startEndDateModel: StartEndDate = new StartEndDate();
  // totalCourseWeekModel: TotalCourseWeek = new TotalCourseWeek();

  ngOnInit(): void {
    this.createSetupForm();

    this.educationInfoService.getEducationLevels().subscribe(data => {
      this.educationLevels = data[0]['educationLevels'];
    });
    this.educationInfoService.getAcademicYears().subscribe(data => {
      this.academicYears = data[0]['academicYears']
    });
    this.educationInfoService.getEducationPeriods().subscribe(data => {
      this.educationPeriods = data[0]['educationPeriods']
    });
    this.educationInfoService.getStartEndDates().subscribe(data => {
      this.startEndDates = data[0]['startEndDates']
    });
    this.educationInfoService.getTotalCourseWeeks().subscribe(data => {
      this.totalCourseWeeks = data[0]['totalCourseWeeks']
    })
  }
  addEducationInfo() {
    if (this.setupForm.valid) {
      this.educationInfo = Object.assign({}, this.setupForm.value);
    }
    this.educationInfoService.postEducationInfo(this.educationInfo).subscribe(data => {
      console.log(JSON.stringify(data))
    });
  }
}
