import Datas from './data/data'; 
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react'; 
import'./App'
import { Button } from 'react-bootstrap';
import  Base from './components/Base'
 function Home () {   



const [datas]=useState(Datas)
    


return(  <Base thead=' PRE BOOKING OPEN ' tstyle='headstyle' footer='foot'children={
   <div className='Home'> 
{datas.map((val,index)=> 
 < Card border="secondary" style={{width: '18rem',height:'12rem' }} key={index}>
        <Card.Header>{val.match}</Card.Header>
        <Card.Body>
          <Card.Title>{val.co}</Card.Title>
          <Card.Text>
            {val.venu}  
          </Card.Text> 
          <Button href='./Add'>Book</Button>
        </Card.Body>
      </Card>)}



</div>}>

</Base>

)
    

}
export default Home;