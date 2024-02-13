import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";

function Registration() {
  const [email, setEmail] = useState("");
  const [passwordd, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  async function userDetail (){
    const clearValue = () =>{
      setEmail("");
      setPassword("");
      setUserName("");
    }
    const user ={
      "username":userName,
      "email":email,
      "password":passwordd
    }
     await axios.post("http://localhost:4000/user-register",user).then(()=>{
       Swal.fire({
         title: "<strong>Submitted</u></strong>",
         icon: "success",
         showCloseButton: true,

       });
       clearValue();
     }).catch((err)=> {
       Swal.fire({
         title: `<strong>${err.message}</u></strong>`,
         icon: "error",
         showCloseButton: true,

       })
     });
  }
  return (
    <div>
      <Container style={{ padding: "8%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passwordd}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={userDetail}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default Registration;
