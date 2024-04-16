export const checkValidData = (userName, email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let isNameValid = true;
  
    if (userName && userName.trim() !== "") {
      // Validate name only if it exists and is not empty
      isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName);
    }
  
    if (!isNameValid) return "Name is not valid";
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };
  