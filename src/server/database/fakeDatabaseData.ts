import type { Patient, PatientRiskProfile } from "../types";

export const patients = [
  {
    id: 1001,
    name: "John Doe",
    enrollmentStatus: "Prospect",
  },
  {
    id: 1002,
    name: "Jane Doe",
    enrollmentStatus: "Insurance Eligibility Verified",
  },
] satisfies Patient[];

export const patientRiskProfiles = [
  {
    demographicCoefficients: [1.0090000000000001],
    diagnosisCoefficients: [0.162, 0.596],
    segmentName: "CFA",
    segmentDescription: "Community Full Benefit Dual Aged",
    patientId: 1001,
  },
  {
    diagnosisCoefficients: [0.049, 0.8109999999999999],
    segmentName: "CFD",
    segmentDescription: "Community Full Benefit Dual Disabled",
    patientId: 1001,
  },
  {
    demographicCoefficients: [0.6940000000000001],
    diagnosisCoefficients: [0.221, 0.455],
    segmentName: "CNA",
    segmentDescription: "Community NonDual Aged",
    patientId: 1001,
  },
  {
    diagnosisCoefficients: [0.128, 0.532],
    segmentName: "CND",
    segmentDescription: "Community NonDual Disabled",
    patientId: 1001,
  },
  {
    demographicCoefficients: [0.679],
    diagnosisCoefficients: [0.302, 0.409],
    segmentName: "CPA",
    segmentDescription: "Community Partial Benefit Dual Aged",
    patientId: 1001,
  },
  {
    diagnosisCoefficients: [0.22, 0.41700000000000004],
    segmentName: "CPD",
    segmentDescription: "Community Partial Benefit Dual Disabled",
    patientId: 1001,
  },
  {
    demographicCoefficients: [0.062, 1.129],
    diagnosisCoefficients: [0.067, 0.34600000000000003],
    segmentName: "INS",
    segmentDescription: "Long Term Institutional",
    patientId: 1001,
  },
  {
    demographicCoefficients: [1.511],
    segmentName: "NE",
    segmentDescription: "New Enrollees",
    patientId: 1001,
  },
  {
    demographicCoefficients: [2.0469999999999997],
    segmentName: "SNPNE",
    segmentDescription: "SPN New Enrollees",
    patientId: 1001,
  },
  {
    demographicCoefficients: [0.917, 0.172],
    diagnosisCoefficients: [0.713],
    segmentName: "CFA",
    segmentDescription: "Community Full Benefit Dual Aged",
    patientId: 1002,
  },
  {
    diagnosisCoefficients: [0.7609999999999999],
    segmentName: "CFD",
    segmentDescription: "Community Full Benefit Dual Disabled",
    patientId: 1002,
  },
  {
    demographicCoefficients: [0.664, 0.244],
    diagnosisCoefficients: [0.677],
    segmentName: "CNA",
    segmentDescription: "Community NonDual Aged",
    patientId: 1002,
  },
  {
    diagnosisCoefficients: [0.6559999999999999],
    segmentName: "CND",
    segmentDescription: "Community NonDual Disabled",
    patientId: 1002,
  },
  {
    demographicCoefficients: [0.6779999999999999, 0.126],
    diagnosisCoefficients: [0.667],
    segmentName: "CPA",
    segmentDescription: "Community Partial Benefit Dual Aged",
    patientId: 1002,
  },
  {
    diagnosisCoefficients: [0.5770000000000001],
    segmentName: "CPD",
    segmentDescription: "Community Partial Benefit Dual Disabled",
    patientId: 1002,
  },
  {
    demographicCoefficients: [0.7490000000000001, 0.0],
    diagnosisCoefficients: [0.401],
    segmentName: "INS",
    segmentDescription: "Long Term Institutional",
    patientId: 1002,
  },
  {
    demographicCoefficients: [1.167],
    segmentName: "NE",
    segmentDescription: "New Enrollees",
    patientId: 1002,
  },
  {
    demographicCoefficients: [2.252],
    segmentName: "SNPNE",
    segmentDescription: "SPN New Enrollees",
    patientId: 1002,
  },
] satisfies PatientRiskProfile[];
