import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { URLContext } from '../Store/URLContext';

function SubmitEdit({ taskID }) {

    const {url} = useContext(URLContext);
    const navigate = useNavigate();

  return (
    <div>
        <Button className='bg-primary subBtn' onClick={() => {
            console.log(`Submitting task ${taskID}`)
            navigate("/");
        }}>Submit</Button>
    </div>
  )
}

export default SubmitEdit