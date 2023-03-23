import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  
import Base from "./components/Base";  
import './App.css' 

 function Save({edit ,point,deletes,Views}){  
    const history=useNavigate()  
  const news =(el)=>{  
    edit(el)
    history('/Edit') ;
    
  }
   
return( 
    <> 
    <Base thead=' SAVE CONTECTS' tstyle='headstyle'footer='foot' children={ 
        
       <div> <div className="bh"><Button onClick={()=>history('/Add')}>add</Button></div>
        {point.map((ell,index)=>{return (<div style={{margin:'5px 25px',borderRadius: '5px',display:'flex', 
        justifyContent:'space-around', textAlign:'center', alignItems:'center',border:'1px solid blue', borderLeft:'5px solid blue'}} key={index}>  
       
        <div style={{fontWeight:'bold'}}>{(ell.email)} </div>
        <div style={{fontWeight:'bold'}}>{(ell.password)} </div>

        <div style={{ margin:'20px 0',display:'flex' ,fontWeight:'bold', gap:'20px'}}>
       
        <Button onClick={()=>deletes(ell.email)}>delete </Button> 
        <Button onClick={()=>Views(ell)} >view</Button>  
        <Button onClick={()=>news(ell.email)}>edit</Button>  
         
        
        </div>
        </div>)})} 
         
         </div>}>
    </Base>
         
         </>  
)
      
        


} 
export default Save;