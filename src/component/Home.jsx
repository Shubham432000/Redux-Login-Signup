import React from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
  
  // const detectSign = useSelector((state)=>state.changeSignupData)
  // const detectLogin = useSelector((state)=>state.changeLoginData)
  //console.log("home",detectSign)
  const auth=localStorage.getItem("name")
  return (
   <div>
    
    {/* <h1 className=''>welcome{detectSign.account.name}</h1>
    <h1 >my email{detectSign.account.email}</h1>
    <h1 >my password is{detectSign.account.password}</h1> */}

   <h1>welcome to Home  {auth}</h1>
    {/* <h1 className=''>welcome{detectSign.account.name}</h1>
    <h1 >my email{detectSign.account.email}</h1>
    <h1 >my password is{detectSign.account.password}</h1> */}
   </div>
  );
}

export default Home;
