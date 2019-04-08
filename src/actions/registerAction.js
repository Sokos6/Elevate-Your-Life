const registerAction = (name, email, password) => async dispatch => {
   
    dispatch({ type: "register", payload: false });
  };
  export default registerAction;