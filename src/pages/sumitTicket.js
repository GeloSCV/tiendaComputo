import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function SumitTicket() {
  const[ticket,setTicket]=useState({
    name:"",
    email:"",
    description:"",
  })
  const navigate=useNavigate();
 
  const handlesubmit= async (e)=>{
    e.preventDefault();
    const res= await fetch("http://localhost:2424/support/ticket",{
      method:"POST",
      body:JSON.stringify(ticket),
      headers:{"content-Type":"application/json"}
    });
    const data= await res.json();
    console.log(data)

    navigate('/ticketsumit')
  };
  const handlechange=(e)=>{
    setTicket({...ticket,[e.target.name]:[e.target.value]})
  };


    return (

    <Form onSubmit={handlesubmit} className='App-body ticket'>
    <Form.Group className="input" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' onChange={handlechange} type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="input" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="Email" name='email' onChange={handlechange} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="input" controlId="ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control name='description' onChange={handlechange} as="textarea" rows={4} />
      </Form.Group>
      < Button variant="light" type="submit" onClick={handlesubmit}>submit</Button>

    </Form>
  );
}


export default SumitTicket