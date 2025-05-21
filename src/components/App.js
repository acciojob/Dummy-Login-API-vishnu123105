import React from "react";
// import './styles.App.css';

const App = () => {
    const [Email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  const data = [
    {
      id: 1,
      name: "ABC",
      email: "abc@gmail.com",
      password: "12",
    },
    {
      id: 2,
      name: "DEF",
      email: "def@gmail.com",
      password: "1234",
    },
    {
      id: 3,
      name: "GHI",
      email: "ghi@gmail.com",
      password: "123456",
    },
  ];
  return (
    <div className="main">
      <label >Email:</label>
      <input id ="input-emai" value={Email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
      <label>passeord:</label>
      <input id="input-password" value={password} onChange={(e)=>setPassword(e.target.value)} type="passeord" placeholder="password" />
      <button id="submit-form-btn" onClick={()=>{
        const user = data.find((user) => user.email === Email && user.password === password);
        if (user) {
          console.log("Login successful");
        } else {
          console.log("Invalid email or password");
        }
        setEmail("");
        setPassword("");
      }}>submit</button>

    </div>
  );
};

export default App;
