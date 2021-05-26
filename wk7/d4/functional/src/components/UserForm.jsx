import React, { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState("");

  const createUser = (e) => {
    console.log(e);
    e.preventDefault();
    const newUser = { username, email, password };
    console.log("Welcome", newUser);
    setUsername("");
    setEmail("");
    setPassword("");
    setHasBeenSubmitted(true);
  };

  //   const formMessage = () => {
  //     if (hasBeenSubmitted) {
  //       return "Thank you for submitting the form!";
  //     } else {
  //       return "Welcome, please submit the form";
  //     }
  //   };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 1) {
      setUsernameError("Username is required!");
    } else if (e.target.value.length < 3) {
      setUsernameError("Username must be 3 characters or longer!");
    }
  };

  return (
    <>
      <form onSubmit={createUser}>
        {/* <h3>{formMessage()}</h3> */}
        {hasBeenSubmitted ? (
          <h3>Thank you for submitting the form!</h3>
        ) : (
          <h3>Welcome, please submit the form.</h3>
        )}
                    
        <div>
                          <label>Username: </label>
                          
          <input type="text" onChange={handleUsername} value={username} />
          {usernameError ? <p style={{ color: "red" }}>{usernameError}</p> : ""}
                     
        </div>
                    
        <div>
          <label>Email Address: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
                    
        <div>
          <label>Password: </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
                    
        <input type="submit" value="Create User" />
                
      </form>
      <p>username: {username}</p>
      <p>email: {email}</p>
      <p>password: {password}</p>
    </>
  );
};

export default UserForm;
