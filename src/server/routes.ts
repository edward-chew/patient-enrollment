import { Router } from "express";
import { getPatientRiskProfiles, getPatients } from "./database/helpers";

const router = Router();

router.get("/api/patients", async (req, res) => {
  const patients = await getPatients();
  return res.json(patients);
});

router.get("/api/riskprofiles", async (req, res) => {
  const riskProfiles = await getPatientRiskProfiles();
  return res.json(riskProfiles);
});

export { router };
