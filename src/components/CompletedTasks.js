import React, { useContext } from 'react'
import { TaskContext } from '../Store/TaskContext'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import IncompleteTaskBtn from './IncompleteTaskBtn';

function CompletedTasks() {

    const navigate = useNavigate();
    const {data} = useContext(TaskContext);

    const completedTasks = data.map((task) => {
        if(task.completed){
            return(
                <Card
                color="dark"
                className='tasks mb-2 mx-auto'
                key={task.id}
              >
              <CardBody>
                <CardTitle tag="h3">
                  {task.task}
                </CardTitle>
                <div className='btnDiv'>
                  <div className='col'>
                    <IncompleteTaskBtn taskID={task.id}/>
                  </div>
                </div>
              </CardBody>
            </Card>
            )}  
        })
    

  return (
    <div className=''>
        {completedTasks}
    </div>
  )
}

export default CompletedTasks