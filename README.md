# Pine Park Health Coding Challenge

## Implementation Notes

### Added Libraries

- Tailwind CSS
- Axios

### Current Limitations

- New `id`s are determined by taking the last patient in the list's `id` and adding 1. `id`s could collide if the `id`s are unsorted.
- No input validation error messages in the web form.
- Calculating average RAF scores for Task 4 does not validate that the patient risk profiles are associated with patients contained in the patient profiles list, nor does it account for possible duplicate entries of a segment for a single patient.

### Future Steps

- Use a real database instead of the mock database file.
- The code currently loads every item of the database then manipulates them. It's likely we'd want to query for specific data with each call once the size of the database is production-scale.
- Add routes to update the database, not just store new data in-memory.
- Indicate error, loading, and empty states in UI.
- Address the above limitations.

## Coding Exercise

A simple React app with an Express.js server has been setup to help you get started. You should fork this repo and
complete the following tasks. You may use any libraries you like to complete the challenge.

Please limit yourself to no more than 2 hours for this project, we want to be sure to respect your time. We appreciate
you taking the time to complete this challenge and look forward to reviewing your submission.

### Getting Started

Before getting started, you will need to have nodejs installed on your machine, this project has been setup to
work with nodejs version `18.17.0`. If you use [asdf](https://asdf-vm.com/) we've included a `.tool-versions` file to
help you get setup if you're not using asdf you can install nodejs [here](https://nodejs.org/en/download).

To start both the React app and the Express.js server, run the following commands in the root of the project:

1. `npm install`
2. `npm run dev`

### Exercise Tasks

#### Task 1: Display all the patients in the database on the `/patients` route in the React application

Acceptance criteria:

- Patients are displayed as a table with the following columns:
  - id
  - name
  - enrollmentStatus
- Table has a header above it that says of "Patients"

#### Task 2: Add a button that will create a patient in our in-memory datastore

Acceptance criteria:

- Button is labeled "Add Patient" and is located above the table of patients in the right hand corner
- The form to create a new patient accepts the following **required** inputs:
  - name (text field)
  - enrollment status (dropdown with options: "Prospect", "Insurance Eligibility Verified", "Enrollment Contract Signed", "Patient Record Created", "Intake Appointment Scheduled")
- When the form is submitted, the patient is added to the in-memory datastore and the table of fakeDatabaseData is updated to
  include the new patient

#### Task 3: Display the risk adjustment score for each patient in the table of patients

Acceptance criteria:

- Display the computed risk adjustment score (RAF Score) for each patient in a new column named "RAF Score" in the table of
- Compute the risk adjustment factor score (RAF Score) for each patient by using their `patientRiskProfile` records & the following
  equation
  ```
  RAF Score = ∑(demographicCoefficients) + ∑(diagnosisCoefficients)
  ```
- If no risk profile data exists, display "N/A" in the column

#### Task 4: Calculate & display the risk profile segment that has the highest average score across all patients

Acceptance criteria:

- Display the risk profile segment name ("CFA", "CFD", "CNA", etc.) that has the highest average RAF Score across all patients.
  The segment name along with the average score for that segment should be displayed below the patients table.
- The same equation as task 3 will be used to calculate the RAF score but this time records should be grouped by `segmentName`
  instead of `patientId` when calculating the RAF score

### How to Submit

When you are finished, please create a zip file of your project and upload it at this URL:
https://forms.gle/jn3nbBRbgVrZu6LA6

Once you have upload it please send a message to your Pine Park Health contact to let us know your submission is ready for review.
