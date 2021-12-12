import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [img, setImg] = useState("")

console.log(token,"tokeeen")
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/courses",{
      headers:{ authorization: `Bearer ${token}`  },
    });
    setCourses(res.data);
  }, []);

  const changeNameVal = (e) => {
    setName(e.target.value);
  };
    const changeDescVal = (e) => {
      setDescription(e.target.value);
    };
      const changeImgVal = (e) => {
        setImg(e.target.value);
      };

  const addCourse=async ()=>{
      const result = await axios.post("http://localhost:5000/course", {
        newName:name,
        newDescription:description,
        newImg:img,
      });
      setCourses(result.data)
    //   const copied= [...courses];
    //   copied.push(result.data)
    //   console.log(result.data);
    //   setCourses(copied)

  }

  const deleteCourse=async (id, index)=>{

    const deletedCourse = await axios.delete(`http://localhost:5000/course/${id}`);
    const copiedArr= [...courses];
    copiedArr.splice(index,1);
    setCourses(copiedArr);
  }



  return (
    <>
      <div className="courses">
        {courses.map((element, i) => {
          return (

            <div className="course" key={element._id}>
              <p>name:{element.name}</p>
              <p>description: {element.description}</p>
              <img src={element.img} alt="nooo img" />
              <button onClick={()=>{deleteCourse(element._id, i)}}>delete</button>
            </div>
          );
        })}
      </div>
      <input
        onChange={(e) => {
          changeNameVal(e);
        }}
      />{" "}
      <input
        onChange={(e) => {
          changeDescVal(e);
        }}
      />
      <input
        onChange={(e) => {
          changeImgVal(e);
        }}
      />
      <button
        onClick={() => {
          addCourse();
        }}
      >
        Submit
      </button>
    </>
  );
}
