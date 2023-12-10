import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import SubmitEdit from './SubmitEdit';
import DeleteTask from './DeleteTask';

function CreateTask() {

    const navigate = useNavigate();
    const location = useLocation();

    const [showBtn, setShowBtn] = useState(true);

    useEffect(() => {
        if(location.pathname === "/createtask"){
            setShowBtn(false);
        }else{
            setShowBtn(true);
        }
        
    }, [])


    const createTask = () => {
        return(
            <div>Creating Task!</div>
        )
    }

  return (
    <div>
        { showBtn ? <Button className='bg-primary mb-2 mx-auto newTask' onClick={() => navigate("/createtask")}>New Task</Button> : null }
        { !showBtn ? 
            <Card color="dark" className='tasks my-2'>
                <CardBody>
                    <CardTitle tag="h3">
                        <input type='text' placeholder='Task Name' />
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                        Due: <input type='text' placeholder='Day' />
                    </CardSubtitle>
                    <CardText>
                        <textarea placeholder='Task Details' style={{width: "100%"}} rows={5}/>
                    </CardText>
                        <div className='btnDiv'>
                            <SubmitEdit taskID={null} />
                            <Button className='bg-danger delBtn' onClick={() => navigate("/")}>Cancel</Button>
                    
                        </div>
                </CardBody>
            </Card>
        : null }
    </div>
  )
}

export default CreateTask