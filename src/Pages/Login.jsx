import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Register from './Register'

function Login({setUser , setView}) {
  const handleOnChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    var temp = JSON.parse(JSON.stringify(data));
    temp[name] = value;
    setData(temp);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    var response = await fetch("http://localhost:4040/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json())
    if(response.message === "login successful" ){
        // DO something ....  with response.data
        setUser(response.data)
        setView(2)
    }
    else{
        console.log(response.message)
    }

  };

  const [data, setData] = useState({ email: "", password: "" });
  const [login , setLogin ] = useState("login") 

if(login === "login"){
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          value={data.email}
          name="email"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={data.password}
          name="password"
          required
        />
      </Form.Group>
      <p onClick={() => setLogin('register')}>Not a user register</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
  }
  else{
      return(
          <Register setLogin={setLogin} setUser={setUser} setView={setView} />
      )
  }


}

export default Login;
