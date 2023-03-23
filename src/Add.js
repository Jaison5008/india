import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Base from './components/Base';
import './App.css'  


function GridComplexExample(props) {   
  const history=useNavigate()
  const [email, setEmail]=useState(''); 
  const[password,setPassword]=useState('');
  const add={ 
    email, 
    password
   }
   
    const su=(e)=>{   
       e.preventDefault()
     
    props.adduser(add); 

   history('/Save');

    }  
   
  
    
  return (  
    
     
     
     
     
    <Base thead='ADD CONTECTS' tstyle='headstyle'footer='foot' children={
    <div className='Home2'>  
    <div className='bh'>
    <Button   onClick={()=>history('/Save')} >SAVE</Button> 
    </div>
    <Form > 
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ticket Count</Form.Label>
          <Form.Control type="number" placeholder="Ticket Count" name='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
      </Row> 
      

      <Button variant="primary" type="submit"  onClick={su} >
        Submit
      </Button></Form> 
      </div> }>
      </Base>
   
  );
}

export default GridComplexExample;