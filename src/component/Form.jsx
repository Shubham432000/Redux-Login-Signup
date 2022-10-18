import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formData } from "../actions/Actions";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [mob, setMob] = useState("");
  const [pan, setPan] = useState("");
  const [gender, setGender] = useState("");
  const [mart, setMart] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validatedata = () => {
    if (first === "") {
      alert("enter valid name");
      return false;
    }
    if (last === "") {
      alert("enter valid last name");
      return false;
    }
    if (add1 === "") {
      alert("enter valid address");
      return false;
    }
    // if (mob === "") {
    //   alert("enter valid number");
    //   return false;
    // } else if (mob > 10) {
    //   alert("enter 10 digit mobile number");
    //   return false;
    // }

    // if (pan === "") {
    //   alert("enter valid pan number");
    //   return false;
    // } else if (pan >= 10) {
    //   alert("enter 10 digit pan number");
    // }

    if (gender === "") {
      alert("enter valid gender");
      return false;
    }
    if (mart === "") {
      alert("enter valid martiual status");
      return false;
    }

    if (first && last && add1 && mob && pan && gender && mart) {
      return true;
    } else {
      return false;
    }
  };

  const Data = (e) => {
    e.preventDefault();
    console.log(first, last, add1, add2, pan, gender, mart);

    if (validatedata()) {
      dispatch(
        formData({
         first:first,
         last:last,
         add1:add1,
         add2,add2,
         mob:mob,
         pan:pan,
         gender:gender,
         mart:mart
        })
      )
      navigate("/ticket");
    }
  };
  return (
    <section>
      <form action="" onSubmit={Data}>
        <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[700px] h-[450px] ml-[350px] mt-[30px]">
          <div className="flex flex-col justify-center ml-[50px]">
            <div className="flex flex-row mt-[20px]">
              <label htmlFor="" className="mt-[7px]">
                First Name:
              </label>
              <br />
              <input
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
                className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[7px] ml-[30px]">
                Last Name:
              </label>
              <br />
              <input
                type="text"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                required
                className="w-[200px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="" className="mt-[7px]">
                Address1
              </label>
              <input
                type="text"
                value={add1}
                onChange={(e) => setAdd1(e.target.value)}
                required
                className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
              <label htmlFor="" className="mt-[7px] ">
                Address2
              </label>
              <input
                type="text"
                value={add2}
                onChange={(e) => setAdd2(e.target.value)}
                required
                className="w-[500px] h-[30px] ml-[5px] mt-[5px] border border-indigo-600 pl-2"
              />
            </div>
            <label htmlFor="" className="mt-[20px]">
              Mobile no
            </label>
            <input
              type="string"
              value={mob}
              required
              onChange={(e) => setMob(e.target.value)}
              className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
            />
            <label htmlFor="" className="mt-[20px]">
              Pan no
            </label>
            <input
              type="string"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              required
              className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"
            />
            <div className="mt-[40px]">
              <label htmlFor="" className="">
                Gender:
              </label>
              <select
                name=""
                id=""
                className="ml-4"
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <label htmlFor="" className="ml-[180px]">
                Martiual Status:
              </label>
              <select
                name=""
                id=""
                className="ml-4"
                required
                onChange={(e) => setMart(e.target.value)}
              >
                <option></option>
                <option>Married</option>
                <option>Unmarried</option>
              </select>
            </div>
          </div>
        </div>

        <button className="ml-[650px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
