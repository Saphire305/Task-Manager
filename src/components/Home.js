import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { TaskContext} from '../Store/TaskContext';
import CreateTask from './CreateTask';
import { useNavigate } from 'react-router-dom';
import { URLContext } from '../Store/URLContext';
import SideBar from './SideBar';
import CompleteTaskBtn from './CompleteTaskBtn';

function Home() {

  const navigate = useNavigate();

  const {url} = useContext(URLContext)
  const {data} = useContext(TaskContext)
  const {setData} = useContext(TaskContext)
  
  useEffect(() => {
      const getTasks = async () => {
      const tasks = await axios.get(url)
      setData(tasks.data);
    }

    getTasks()
  },[])

  if(!data){
    return(<h2>Loading...</h2>)
  }

  const displayTasks = data.map((task) => {
    // console.log(task);
    if(!task.completed){
      return(
          <Card
            color="dark"
            className='tasks my-2 mx-auto'
            key={task.id}
          >
          <CardBody>
            <CardTitle tag="h3">
              {task.task}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h5"
            >
              Due: {task.due}
            </CardSubtitle>
            <CardText>
              {task.details}
            </CardText>
            <div className='btnDiv'>
              <div className='col-md'>
                <Button className='bg-primary subBtn' onClick={() => navigate(`/edittask/${task.id}`)}>Edit</Button>
              </div>
              <CompleteTaskBtn taskID={task.id}/>
            </div>
          </CardBody>
        </Card>
      )
    }
  })

  return (
    <div className='row'>
      <div className='col-9'>
        {displayTasks}
        <CreateTask />
      </div>
      <SideBar/>
    </div>
  )
}

export default Home