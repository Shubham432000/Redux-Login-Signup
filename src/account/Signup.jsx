import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { signUpData } from "../actions/Actions";

const Signup = () => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  // const detectSign = useSelector((state)=>state.changeSignupData)
  
  // console.log("Signup" ,detectSign.account)
  
  

  let navigat = useNavigate();
  
  const validatedata =()=>{
    if (name == "") {
      alert("please enter valid name");
      return false
    }
    if (email == "") {
      alert("please enter valid email");
      return false;
    }
    if (password == "") {
      alert("please enter valid password");
      return false;
    }
    if (name && email && password ) {
      return navigat("/home");
    } else {
      return false;
    }

  }

  function submitForm(e) {
    e.preventDefault()
  
   
    if (validatedata()){
      dispatch(
        signUpData({
          name:name,
          email:email,
          password:password
        })
      )
      // 
    }
  }

  const storage=()=>{
    
   return localStorage.setItem("name", name),
    localStorage.setItem("email",email),
    localStorage.setItem("password",password)
    
    
  }
 
  return (
    <form action="" onSubmit={submitForm}>
     <section>
        <div className="bg-slate-50 shadow-2xl shadow-slate-400 border border-indigo-600 w-[300px] h-[350px] ml-[500px] mt-[100px]">
            <h1 className="text-center mt-2">Signup</h1>
            <div className="flex flex-col justify-center ml-[50px]">
              {/* <h1 >welcome{detectSign.account}</h1> */}
                <label htmlFor="" className="mt-[20px]">First Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"/>
                <label htmlFor="" className="mt-[20px]">Email Id</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"/>
                <label htmlFor="" className="mt-[20px]">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-[200px] h-[30px] mt-[5px] border border-indigo-600 pl-2"/>
            </div>
          <button onClick={storage}  className="ml-[120px] mt-[20px] border border-indigo-600 px-2 py-1 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600">Submit</button>
        </div>
     </section>
    </form>
  );
};

export default Signup;

// onClick={()=>{dispatch(employessData({name:name,email:email,password:password}))}}