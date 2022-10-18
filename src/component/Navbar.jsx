import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const auth = localStorage.getItem("email","password");
   const auth1 = localStorage.getItem("name");
  const navigate= useNavigate()
  const logout = ()=>{
    localStorage.clear()
    navigate("/")
  }
  return (
    <header className="text-gray-600 body-font">
      {auth ? (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">MOOD</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to="/home"
            >
              Home
            </Link>

            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to="/form"
            >
              Form
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              onClick={logout}
              to="/"
            >
              Logout ({auth1})
            </Link>
           
          </nav>
        </div>
      ) : (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">MOOD</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
              to="/login"
            >
              Login
            </Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/">
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

{
  /* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
 
  <span className="ml-3 text-xl">MOOD</span>
</a>

<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/home">Home</Link>
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/login">Login</Link>
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/">Signup</Link>
  <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/form">Form</Link>
  
</nav>

</div> */
}
