import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TaskContext } from '../Store/TaskContext';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import DeleteTask from './DeleteTask';
import SubmitEdit from './SubmitEdit';
import { URLContext } from '../Store/URLContext';

function EditTask() {

    const navigate = useNavigate();
    const location = useLocation();
    let taskID = location.pathname[location.pathname.length -1];
    const {data} = useContext(TaskContext)
    let taskObj = null;
    
    const [formData, setFormData] = useState({});

    const {url} = useContext(URLContext)

    const handleChange = (e) => {
        let prop = e.target.name;
        let value = e.target.value;
        setFormData(prev => ({...prev, [prop]: value}))
    }

    const getTask = () => data.map(task => {
        if(task.id === taskID){
            taskObj = task;
        }
    })

    getTask()

    if(!taskObj){
        taskID = location.pathname[location.pathname.length -2] + location.pathname[location.pathname.length -1];
        getTask()
    }

  return (
    <div>
        <Card
          color="dark"
          className='tasks my-2'
          key={taskObj.id}
        >
        <CardBody>
          <form>
          <CardTitle tag="h3">
            <input type='text' defaultValue={taskObj.task} name="task" onChange={handleChange}/>
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
          >
            Due: <input type='text' defaultValue={taskObj.due} name="due" onChange={handleChange}/>
          </CardSubtitle>
          <CardText>
            <textarea defaultValue={taskObj.details} style={{width: "100%"}} rows={5} name="details" onChange={handleChange}/>
          </CardText>
          <div className='btnDiv'>
            <SubmitEdit taskID={taskID} formData={formData}/>
            <DeleteTask taskID={taskID}/>
            
          </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

export default EditTask