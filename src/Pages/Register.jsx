import React ,{useState} from 'react'
import {Form ,Button} from 'react-bootstrap'

function Register({setLogin ,setView ,setUser}) {
    const handleOnChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        var temp = JSON.parse(JSON.stringify(data))
        temp[name] = value
        setData(temp)
    } 

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        console.log(data)
        var response = await fetch("http://localhost:4040/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }).then((res) => res.json())
          if(response.message === "registration successful" ){
              // DO something ....  with response.data
              console.log(response.data)
              setUser(response.data)
        setView(2)
          }
          else{
              console.log(response.message)
          }

    }

    const [data, setData] = useState({email : "" , password : "" , name : "" })
    return (
        <Form onSubmit={handleOnSubmit} >
        <Form.Group controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full Name" onChange={handleOnChange} value={data.name} name="name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleOnChange} value={data.email} name="email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handleOnChange} value={data.password} name="password"/>
        </Form.Group>
        <p onClick={()=>setLogin('login')} className="linktext" >Already a user login</p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    )
}

export default Register
