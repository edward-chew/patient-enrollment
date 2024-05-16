export type EnrollmentStatus =
  | "Prospect"
  | "Insurance Eligibility Verified"
  | "Enrolled Contract Sent"
  | "Enrolled Contract Signed"
  | "Patient Record Created"
  | "Intake Appointment Scheduled";

export type Patient = {
  id: number;
  name: string;
  enrollmentStatus: EnrollmentStatus;
};

type RiskProfileSegment =
  | "CFA"
  | "CFD"
  | "CNA"
  | "CND"
  | "CPA"
  | "CPD"
  | "INS"
  | "NE"
  | "SNPNE";

export type PatientRiskProfile = {
  demographicCoefficients?: number[];
  diagnosisCoefficients?: number[];
  segmentDescription: string;
  segmentName: RiskProfileSegment;
  patientId: number;
};
