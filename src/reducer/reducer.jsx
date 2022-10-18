 const initialState = "";

const addEmployee = (state, payload) => {
 
  return {
    ...state,
     employees: [...(state.employees || []), payload],
  
  };
  
};

export const changeFormData = (state=initialState , action) => {
  
  switch (action.type) {

    case "FORMDATA":
      return addEmployee(state, action.payload);
    default:
      return state;
  }
};

const register = (state, payload) => {

  return {
    ...state,
    account: payload,
  };
};

export const changeSignupData = (state=initialState , action) => {
  console.log(...state,action.payload)
  switch (action.type) {
    case "SIGNUPDATA":
      return register(state, action.payload);
    default:
      return state;
  }
};



const login = (state, payload) => {
  return {
    ...state,
    loginaccount: payload,
  };
};
export const changeLoginData = (state=initialState , action) => {
  switch (action.type) {
    case "LOGINDATA":
      return login(state, action.payload);
    default:
      return state;
  }
};



// const addEmployee = (state, payload) => {
  
//   return {
//     ...state,
//     employees: [...(state.employees || []), payload],
  
//   };
  
// };