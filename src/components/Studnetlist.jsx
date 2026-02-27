import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Studnetlist() {
  const [open, setopen] = useState(false);
  const [studentlist, setstudentlist] = useState([]);
  const [inputdata, setinputdata] = useState({
    name: "",
    rollnum: "",
  });
  const { name, rollnum } = inputdata;

  // useeffect start end
  useEffect(() => {
    getallstudent();
  }, []);

  // useeffect start end

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  };

  const handleaddstu = async (e) => {
    console.log(e, "logeed");
    e.preventDefault();
    console.log("success");

    try {
      await axios.post("http://localhost:5006/api/student", { name, rollnum });
      alert("student added");
      setinputdata("");
      getallstudent();
      setopen(false);
    } catch (error) {
      console.log(error);
    }

    // setstudentlist([...studentlist, inputdata])
  };
  console.log(studentlist);

  // GETALL STUDENT START END
  const getallstudent = async () => {
    const { data } = await axios.get("http://localhost:5006/api/student");
    setstudentlist(data);
  };
  console.log(studentlist);

  // GETALL STUDENT START END
  // delte studnet
  const handledelete = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:5006/api/student/${id}`);
    getallstudent()

    // setstudentlist(filterdata);
  };
  // delte studnet
  // 
  // toggle
  const handletoggle = async (student) => {
  const res = await axios.put(
    `http://localhost:5006/api/student/${student._id}/attdence`,
  );

  const updated = studentlist.map((s) =>
    s._id === student._id ? res.data : s
  );

  setstudentlist(updated);
};
  // toggle

  return (
    <div className="min-h-screen relative flex  justify-center  bg-linear-to-r from-purple-300 to-blue-300">
      <div className="minbox  flex  flex-col  p-7  w-10/12">
        <div className="btnrap">
          {/* <h1>hii</h1> */}
          <button
            onClick={() => setopen(!open)}
            className="bg-blue-400 font-semibold text-2xl float-right mt-24 rounded-2xl p-6 p-4 text-2xl text-white"
          >
            Add Student
          </button>
        </div>
        {/* head ends  */}

        {/* table container start */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8  mt-14 border border-purple-100">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <th className="px-6 py-4  text-left font-semibold text-3xl">
                  Name
                </th>
                <th className="px-6 py-4  text-left font-semibold text-3xl">
                  RollNo
                </th>
                <th className="px-6 py-4  text-left font-semibold text-3xl">
                  Status
                </th>
                <th className="px-6 py-4  text-left font-semibold text-3xl">
                  Action
                </th>
              </tr>
            </thead>
            {/* tbody */}
            <tbody>
              {studentlist.map((s, index) => {
                return (
                  <>
                    <tr>
                      <td className="px-6 py-4 text-2xl font-semibold">
                        {s.name}
                      </td>
                      <td className="px-6 py-4 text-2xl font-semibold">
                        {s.rollnum}
                      </td>
                      <td className="px-6 py-4 text-2xl font-semibold">
                        <button  className={`p-6 text-white rounded-2xl ${s.present ? "bg-green-500" :"bg-amber-500 "} `}  onClick={()=>handletoggle(s)}>{s.present ? "Present" : "Absent"}</button>
                      </td>
                      <td>
                        <button
                          onClick={() => handledelete(s._id)}
                          className="p-3 rounded-2xl bg-red-700 text-white text-2xl font-semibold m-3"
                        >
                          Delete 🗑️
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            {/* tbody */}
          </table>
        </div>

        {/* table container start */}
        {open && (
          <div className="form bg-opacity-50   fixed flex items-center justify-center inset-0 bg-black/30 backdrop-blur-sm z-50 ">
            <form
              //   onSubmit={handleSubmit}
              className="bg-white w-2xl relative flex flex-col p-8 rounded shadow-md rounded-2xl flex gap-3 mb-4"
            >
              <h1 className="text-3xl font-semibold mb-7 ">Add Student</h1>
              <button onClick={()=>setopen(!open)} className="absolute top-8 right-4">❌</button>
              <input
                type="text"
                placeholder="Student Name"
                name="name"
                value={name}
                onChange={handlechange}
                className="border p-2 rounded "
                required
              />

              <input
                type="number"
                placeholder="Roll No"
                name="rollnum"
                value={rollnum}
                onChange={handlechange}
                className="border p-2 rounded mt-2 "
                required
              />

              <button
                onClick={handleaddstu}
                className="bg-blue-500 w-sm text-2xl text-white p-3 p-4 rounded-xl mt-6"
              >
                ADD
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
