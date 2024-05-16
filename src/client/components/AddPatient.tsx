import React, { useState } from "react";
import { Patient, EnrollmentStatus } from "../../server/types";

interface AddPatientProps {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
  setAddModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddPatient({
  patients,
  setPatients,
  setAddModalVisible,
}: AddPatientProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<EnrollmentStatus>("Prospect");

  function handleAddClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (!status || !name) {
      return;
    }

    let lastId = patients[patients.length - 1].id;
    patients.push({
      id: lastId + 1,
      name: name,
      enrollmentStatus: status,
    });
    setPatients(patients);
    setAddModalVisible(false);
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(e.target.value as EnrollmentStatus);
  }

  return (
    <div className="border bg-white shadow-lg w-4/12 p-4 absolute mx-auto top-1/3 left-0 right-0">
      <h1 className="text-lg font-bold">Add Patient</h1>
      <form action="" className="flex flex-col m-0">
        <label className="mt-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border"
          value={name}
          onChange={handleNameChange}
        />
        <label className="mt-2" htmlFor="status">
          Enrollment Status
        </label>
        <select
          id="status"
          className="border"
          value={status}
          onChange={handleStatusChange}
        >
          <option value="Prospect">Prospect</option>
          <option value="Insurance Eligibility Verified">
            Insurance Eligibility Verified
          </option>
          <option value="Enrollment Contract Signed">
            Enrollment Contract Signed
          </option>
          <option value="Patient Record Created">Patient Record Created</option>
          <option value="Intake Appointment Scheduled">
            Intake Appointment Scheduled
          </option>
        </select>
        <button className="border mt-4" onClick={handleAddClick}>
          Add
        </button>
      </form>
    </div>
  );
}
