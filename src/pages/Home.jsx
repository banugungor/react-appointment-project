import { useState } from "react";
import AppointmentList from "../component/AppointmentList";
import Doctors from "../component/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);
  console.log(doctors);
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-4 text-danger fw-bold ">Hospital</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
