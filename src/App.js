import logo from "./logo.svg";
import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getRandom() {
  const courses = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  const rnd = Math.floor(Math.random() * courses.length);
  return courses[rnd];
}

function App() {
  const [courses, setcourses] = useState([]);
  const handleClick = () => {
    setcourses([...courses, getRandom()]);
  };
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs ekle
      </button>
      <div className="courseList">
        {courses.map((course, index) => {
          return <Course courseName={course} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
