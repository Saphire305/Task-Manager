import axios from 'axios'
import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { URLContext } from '../Store/URLContext';
function IncompleteTaskBtn({ taskID }) {

    const {url} = useContext(URLContext);

    const incompleteTask = async () => {
        await axios.put(`${url}/${taskID}`, {"completed": false})
        window.location.reload()
    }

  return (
    <div className='col' style={{justifyContent: 'right', display: 'flex'}}>
        <Button className='bg-danger subBtn' onClick={incompleteTask}>Incomplete!</Button>
    </div>
  )
}


export default IncompleteTaskBtn