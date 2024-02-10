import "./App.css";
import Input from "./components/Input";
import arrowImg from "./assets/images/icon-arrow.svg";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [error, setError] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [reslut, setResult] = useState({
    years: "",
    months: "",
    days: "",
  });

  function validateDate() {
    const { day, month, year } = form;
    const dateInput = `${day}/${month}/${year}`;

    if (day === "") {
      return setError((prev) => ({ ...prev, day: "This field is required" }));
    } else if (day > 31 || day < 1) {
      return setError((prev) => ({ ...prev, day: "Must be a valid day" }));
    }
    if (month === "") {
      return setError((prev) => ({ ...prev, month: "This field is required" }));
    } else if (month > 12 || month < 1) {
      return setError((prev) => ({ ...prev, month: "Must be a valid month" }));
    } else {
      setError((prev) => ({ ...prev, month: "" }));
    }
    if (year === "") {
      return setError((prev) => ({ ...prev, year: "This field is required" }));
    } else if (year > new Date().getFullYear() || year < 1) {
      return setError((prev) => ({ ...prev, year: "Must be a valid year" }));
    }

    if (isValidDate(dateInput)) {
      const age = calculateAge(dateInput);
      setResult({
        days: age.days,
        months: age.months,
        years: age.years,
      });
      return setError({
        day: "",
        month: "",
        year: "",
      });
    } else {
      return setError({
        day: "Must be a valid date",
        month: "Must be a valid date",
        year: "Must be a valid date",
      });
    }
  }
  function isValidDate(dateString) {
    const [day, month, year] = dateString.split("/").map(Number);

    const date = new Date(year, month - 1, day);

    const isValid =
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year;

    return isValid;
  }

  function calculateAge(birthdate) {
    // Parse the birthdate string
    const birthdateParts = birthdate.split("/");
    const birthDay = parseInt(birthdateParts[0], 10);
    const birthMonth = parseInt(birthdateParts[1], 10);
    const birthYear = parseInt(birthdateParts[2], 10);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    let ageYears = currentDate.getFullYear() - birthYear;
    let ageMonths = currentDate.getMonth() + 1 - birthMonth;
    let ageDays = currentDate.getDate() - birthDay;

    // Adjust age for negative months or days
    if (ageDays < 0) {
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      ageDays += lastMonth.getDate();
      ageMonths--;
    }

    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }

    return {
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateDate();
  }
  return (
    <main>
      <div className="inputs-container">
        <Input
          label="day"
          placeholder="DD"
          maxLength={2}
          form={form}
          setForm={setForm}
          error={error}
        />
        <Input
          label="month"
          placeholder="MM"
          maxLength={2}
          form={form}
          setForm={setForm}
          error={error}
        />
        <Input
          label="year"
          placeholder="YYYY"
          maxLength={4}
          form={form}
          setForm={setForm}
          error={error}
        />
      </div>
      <div className="line">
        <hr />
        <button onClick={handleSubmit}>
          <img src={arrowImg} alt="arrow" />
        </button>
      </div>
      <Result years={reslut.years} months={reslut.months} days={reslut.days} />
    </main>
  );
}

export default App;
