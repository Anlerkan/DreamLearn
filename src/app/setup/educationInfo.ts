export class EducationInfo {
    educationPeriod: EducationPeriod;
    educationLevel: EducationLevel;
    startEndDate: StartEndDate;
    academicYear: AcademicYear;
    totalCourseWeek: TotalCourseWeek;
}
export class EducationLevel {
    id: number;
    name: string;
}
export class StartEndDate {
    id: number;
    startDate: Date;
    endDate: Date;
}
export class AcademicYear {
    id: number;
    name: string;
}
export class TotalCourseWeek {
    id: number;
    weekValue: number;
}
export class EducationPeriod {
    id: number;
    period: string;
}