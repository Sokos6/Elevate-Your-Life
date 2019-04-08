const loginAction = (email, password) => async dispatch => {
    
    dispatch({ type: "login", payload: false });
  };
  export default loginAction;