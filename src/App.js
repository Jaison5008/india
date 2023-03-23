import './App.css'; 
import Navbar from './components/navbar'
import Home from './Home'; 
import Foot from './components/foot';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Price from './Price';
import Ground from './ground';
import Add from './Add';
import {   Routes, Route } from 'react-router-dom'; 
import Save from './Save'; 
import { useState } from 'react';
import Init from './data/datass.js' ; 
import View from './View'; 
import { useNavigate } from 'react-router-dom'; 
import Edit from './Edit';
function App() {  
 const [point,setPoint]=useState(Init); 
 const [view,setView]=useState(['']);  
 const [email,setEmail]=useState('');
 const history=useNavigate()
  const adduser=(user)=>{   
    
    setPoint([...point,user])
    
  }  
  const edit=(el)=>{  
    setEmail(el)

  } 
  const update=(index,jai)=>{   
    
    setPoint(point[index]=jai)
    setPoint([...point])

  }
  
  const deletes=(email)=>{   
    //console.log(email)
    const afterremove= point.filter((point,index)=>{ return(point.email!==email)});
    setPoint(afterremove);
}   
const Views=(el)=>{  

setView(el) 
 
history('./View')
}  




  
  return ( 
    <div>  
      
    
      <Navbar/>   
      
      
      
      <Routes>  

        <Route exact path='/' Component={Home}/>
        <Route   path='/Add' element={<Add point={point} adduser={adduser}/>}/>
         <Route  path='/ground'Component={Ground}/>
         <Route path='/Save' element={<Save point={point} deletes={deletes} Views={Views} edit={edit} />}/> 
         <Route path='/Edit' element={<Edit point={point} emai={email} update={update}/>}/>
         <Route  path='/Price' Component={Price}/>
        <Route path='/View' element={<View view={view}/>}/>
      </Routes>
      <Foot/>  
      
        
      
      
      
      
      
     
    </div>
     
  );
}

export default App; 


