import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { TaskContext} from '../Store/TaskContext';
import EditTask from './EditTask';
import CreateTask from './CreateTask';
import { useNavigate } from 'react-router-dom';
import { URLContext } from '../Store/URLContext';
import CompletedTasks from './CompletedTasks';
import SideBar from './SideBar';

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
          <Button className='bg-primary' onClick={() => navigate(`/edittask/${task.id}`)}>Edit</Button>
        </CardBody>
      </Card>
    )
  })

  return (
    <div>
      <div className=''>
        {displayTasks}
        <CreateTask />
      </div>
      {/* <SideBar /> */}
    </div>
  )
}

export default Home