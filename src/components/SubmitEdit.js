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
      console.log(formData);
      await axios.put(`${url}/${taskID}`, formData);
      navigate("/")
    }

  return (
    <div>
        <Button className='bg-primary subBtn' onClick={showFormData}>Submit</Button>
    </div>
  )
}

export default SubmitEdit