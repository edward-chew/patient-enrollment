import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { Patient, PatientRiskProfile } from "../../server/types";
import { AddPatient } from "../components/AddPatient";

type RafScoreSummary = {
  [key: string]: number;
};

export function Root() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [riskProfiles, setRiskProfiles] = useState<PatientRiskProfile[]>([]);
  const [rafScoresByPatient, setRafScoresByPatient] = useState<RafScoreSummary>(
    {}
  );
  const [rafScoresBySegment, setRafScoresBySegment] = useState<RafScoreSummary>(
    {}
  );
  const [topSegment, setTopSegment] = useState("");

  useEffect(() => {
    axios
      .get("/api/patients")
      .then((res: AxiosResponse<Patient[]>) => {
        setPatients(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
    axios
      .get("/api/riskprofiles")
      .then((res: AxiosResponse<PatientRiskProfile[]>) => {
        setRiskProfiles(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setRafScoresByPatient(calculateRafScores("patientId", "sum"));
  }, [patients, riskProfiles]);

  useEffect(() => {
    setRafScoresBySegment(calculateRafScores("segmentName", "average"));
    setTopSegment(getTopSegment());
  }, [riskProfiles]);

  function calculateRafScores(groupBy: string, method: "sum" | "average") {
    // Build a list of each profile's total score for each group
    let scores: Record<string, any> = {};
    for (const prof of riskProfiles) {
      let profTot = 0;
      if (prof.demographicCoefficients) {
        for (const n of prof.demographicCoefficients) {
          profTot += n;
        }
      }
      if (prof.diagnosisCoefficients) {
        for (const n of prof.diagnosisCoefficients) {
          profTot += n;
        }
      }
      if (scores[String(prof[groupBy as keyof PatientRiskProfile])]) {
        scores[String(prof[groupBy as keyof PatientRiskProfile])].push(profTot);
      } else {
        scores[String(prof[groupBy as keyof PatientRiskProfile])] = [profTot];
      }
    }

    // Get the sum or average of scores for each group
    for (const key in scores) {
      let sum = scores[key].reduce((tot, n) => tot + n, 0);
      if (method == "average") {
        scores[key] = sum / scores[key].length;
      } else {
        scores[key] = sum;
      }
    }
    return scores;
  }

  function getTopSegment() {
    let maxScore = Number.NEGATIVE_INFINITY;
    let maxSegment = "";
    for (const seg in rafScoresBySegment) {
      if (rafScoresBySegment[seg] > maxScore) {
        maxScore = rafScoresBySegment[seg];
        maxSegment = seg;
      }
    }
    return maxSegment;
  }

  function handleAddPatientClick() {
    setAddModalVisible(!addModalVisible);
  }

  return (
    <>
      {addModalVisible ? (
        <AddPatient
          patients={patients}
          setPatients={setPatients}
          setAddModalVisible={setAddModalVisible}
        />
      ) : null}
      <div className="w-6/12 m-auto mt-8">
        <h1 className="text-3xl font-bold">Patients</h1>
        <div className="flex justify-end mt-4">
          <button className="border p-2" onClick={handleAddPatientClick}>
            Add Patient
          </button>
        </div>
        <table className="border w-full mt-4">
          <thead>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Enrollment Status</th>
              <th className="p-2">RAF Score</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="p-2 text-right">{patient.id}</td>
                  <td className="p-2">{patient.name}</td>
                  <td className="p-2">{patient.enrollmentStatus}</td>
                  <td className="p-2 text-right">
                    {rafScoresByPatient.hasOwnProperty(String(patient.id))
                      ? rafScoresByPatient[String(patient.id)].toFixed(3)
                      : "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No patients</td>
              </tr>
            )}
          </tbody>
        </table>
        <table className="border w-full mt-8">
          <thead>
            <tr>
              <th className="p-2">Top Segment</th>
              <th className="p-2">RAF Score</th>
            </tr>
          </thead>
          <tbody>
            {topSegment ? (
              <tr>
                <td className="p-2">{topSegment}</td>
                <td className="p-2 text-right">
                  {rafScoresBySegment[topSegment].toFixed(3)}
                </td>
              </tr>
            ) : (
              <tr>
                <td>No segment data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
