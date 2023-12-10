import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TaskContext } from '../Store/TaskContext';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import DeleteTask from './DeleteTask';
import SubmitEdit from './SubmitEdit';

function EditTask() {

    const navigate = useNavigate();
    const location = useLocation();
    const taskID = location.pathname[location.pathname.length -1];
    const {data} = useContext(TaskContext)
    let taskObj = null;

    data.map(task => {
        if(task.id === taskID){
            taskObj = task;
        }
    })

  return (
    <div>
        <Card
          color="dark"
          className='tasks my-2'
          key={taskObj.id}
        >
        <CardBody>
          <CardTitle tag="h3">
            <input type='text' defaultValue={taskObj.task} />
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
          >
            Due: <input type='text' defaultValue={taskObj.due} />
          </CardSubtitle>
          <CardText>
            <textarea defaultValue={taskObj.details} style={{width: "100%"}} rows={5}/>
          </CardText>
          <div className='btnDiv'>
            <SubmitEdit taskID={taskID} />
            <DeleteTask taskID={taskID}/>
            
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default EditTask