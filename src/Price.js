import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Price from './data/squaddata' 
import './index.css' 
import Base from './components/Base';
function ListGroupWithHeaderExample() { 
    const [SSquad ,setSquad]=useState(Price);
  return (   
    <Base thead=' PRICE CHAT' tstyle='headstyle' footer='foot2' children={
    <div className='Home'>
    {SSquad.map((data)=>
    <Card style={{ width: '18rem', height:"16rem" }}>
      <Card.Header>{data.team}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{data.p1}</ListGroup.Item>
        <ListGroup.Item>{data.p2}</ListGroup.Item>
        <ListGroup.Item>{data.p3}</ListGroup.Item> 
        <ListGroup.Item>{data.p4}</ListGroup.Item> 
        <ListGroup.Item>{data.p5}</ListGroup.Item> 
        
        
         
      </ListGroup>
    </Card>)} 
    </div> 
    }> 
    </Base>
  );
}

export default ListGroupWithHeaderExample;