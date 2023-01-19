import Angular from "./img/angular.jpg";
import Bootstrap from "./img/bootstrap5.png";
import Ccsharp from "./img/ccsharp.png";
import Kompleweb from "./img/kompleweb.jpg";
import "./Course.css";
const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  Kompleweb: Kompleweb,
};

function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
