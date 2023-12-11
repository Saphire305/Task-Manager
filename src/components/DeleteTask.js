import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { URLContext } from '../Store/URLContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteTask({ taskID }) {
  
  const {url} = useContext(URLContext);
  const navigate = useNavigate()

  return (
    <div style={{justifyContent: 'right', display: 'flex'}}>
      <Button className='bg-danger delBtn' onClick={async () => {
      if(taskID){
        await axios.delete(`${url}/${taskID}`);
      }
      navigate("/");
    }}>Delete</Button>
    </div>
  )
}

export default DeleteTask