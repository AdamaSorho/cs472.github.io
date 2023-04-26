"use strict";

let patients = [];

// Add new patient
const patientForm = document.getElementById("patientForm");
patientForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newPatient = {
    patientIdNumber: event.target.patientIdNumber.value,
    firstName: event.target.firstName.value,
    middleInitials: event.target.middleInitials.value,
    lastName: event.target.lastName.value,
    dateOfBirth: event.target.dateOfBirth.value,
    ddlDepartment: event.target.ddlDepartment.value,
    isOutPatient: event.target.radioIsOutPatient.value,
  };

  patients.push(newPatient);
  showPatients(patients);

  // reset the form
  document.getElementById("btnReset").click();
});

// Filter patients by elderly
const chkElderlyPatients = document.getElementById("chkElderlyPatients");
chkElderlyPatients.addEventListener("click", function (event) {
  let filteredPatients = patients;

  if (event.target.checked) {
    filteredPatients = patients.filter(
      (patient) => getAge(patient.dateOfBirth) >= 65
    );
  }

  showPatients(filteredPatients);
});

const getAge = function (birthday) {
  let dateOfBirth = new Date(birthday);
  let now = new Date();
  let diff = now.getTime() - dateOfBirth.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

// filter patients by out-patients
const chkShowOutPatients = document.getElementById("chkShowOutPatients");
chkShowOutPatients.addEventListener("click", function (event) {
  let filteredPatients = patients;

  if (event.target.checked) {
    filteredPatients = patients.filter(
      (patient) => patient.isOutPatient === "Yes"
    );
  }

  showPatients(filteredPatients);
});

const showPatients = (patientsList) => {
  const tableBody = document.getElementById("tbodyPatientsList");

  tableBody.innerHTML = "";
  for (let patient of patientsList) {
    tableBody.innerHTML += `<tr>
    <td>${patient.patientIdNumber}</td>
    <td>${patient.firstName}</td>
    <td>${patient.middleInitials}</td>
    <td>${patient.lastName}</td>
    <td>${patient.dateOfBirth}</td>
    <td>${patient.ddlDepartment}</td>
    <td>${patient.isOutPatient}</td>
    </tr>`;
  }
};
