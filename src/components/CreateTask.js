import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import SubmitEdit from './SubmitEdit';
import DeleteTask from './DeleteTask';
import axios from 'axios';
import { URLContext } from '../Store/URLContext';

function CreateTask() {

    const navigate = useNavigate();
    const location = useLocation();

    const [showBtn, setShowBtn] = useState(true);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if(location.pathname === "/createtask"){
            setShowBtn(false);
        }else{
            setShowBtn(true);
        }
        
    }, [])

    const handleChange = (e) => {
        let prop = e.target.name;
        let value = e.target.value;
        setFormData(prev => ({...prev, [prop]: value}))
    }


  return (
    <div className='mx-auto d-flex' style={{width: "100%"}}>
        { showBtn ? <Button className='bg-primary mx-auto newTask' onClick={() => navigate("/createtask")}>New Task</Button> : null }
        { !showBtn ? 
            <Card color="dark" className='tasks my-2'>
                <CardBody>
                    <form>
                        <CardTitle tag="h3">
                            <input type='text' placeholder='Task Name' name='task' onChange={handleChange}/>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h5">
                            Due: <input type='text' placeholder='Day' name='due' onChange={handleChange}/>
                        </CardSubtitle>
                        <CardText>
                            <textarea placeholder='Task Details' style={{width: "100%"}} rows={5} name='details' onChange={handleChange}/>
                        </CardText>
                        <div className='btnDiv'>
                            <SubmitEdit formData={formData}/>
                            <DeleteTask/>
                    
                        </div>
                    </form>
                </CardBody>
            </Card>
        : null }
    </div>
  )
}

export default CreateTask