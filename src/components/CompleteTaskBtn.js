import axios from 'axios'
import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { URLContext } from '../Store/URLContext';

function CompleteTaskBtn({ taskID }) {

    const {url} = useContext(URLContext);

    const completeTask = async () => {
        await axios.put(`${url}/${taskID}`, {"completed": true})
        window.location.reload()
    }

  return (
    <div className='col-md' style={{justifyContent: 'right', display: 'flex'}}>
        <Button className='bg-success subBtn' onClick={completeTask}>Complete!</Button>
    </div>
  )
}

export default CompleteTaskBtn