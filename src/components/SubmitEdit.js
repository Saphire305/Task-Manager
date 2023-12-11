import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { URLContext } from '../Store/URLContext';
import axios from 'axios';

function SubmitEdit({ taskID, formData}) {

    const {url} = useContext(URLContext);
    const navigate = useNavigate();

    const showFormData = async (e) => {
      e.preventDefault();
      if(taskID){
        await axios.put(`${url}/${taskID}`, formData);
    }else{
        await axios.post(`${url}`, formData);
    }
      navigate("/")
    }

  return (
    <div className='col'>
        <Button className='bg-primary subBtn' onClick={showFormData}>Submit</Button>
    </div>
  )
}

export default SubmitEdit