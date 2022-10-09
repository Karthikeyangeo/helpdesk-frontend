import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { useEffect,useState,useContext } from 'react';
import { CommonContext } from '../App';
import { useNavigate } from 'react-router-dom';



export default function HelpForm() {

    let commonContext = useContext(CommonContext);
    let [issueTypes,setIssueTypes]= useState([]);
    
    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [mobile,setMobile] =useState('');
    let [issueType,setIssueType] = useState(null);
    let [issueTitle,setIssueTitle] = useState('');
    let [issueDescription, setIssueDescription] = useState('');
    
    let navigate = useNavigate(); 


    let loadIssueTypes = async()=>{
        let res = await axios.get(`${commonContext.apiurl}/issue-types`)
        if(res.data.statusCode == 200){
            setIssueTypes(res.data.issueTypes);
        }
        else{

        }
        
    }

    useEffect(()=>{
        loadIssueTypes();
    },[])

    // Handle submit
    let handleSubmit = async()=>{
        let res = await axios.post(`${commonContext.apiurl}/issues`,{
        
            name,
            email,
            mobile,
            issueType,
            issueTitle,
            issueDescription
        })
        if (res.data.statusCode === 200){
            navigate(`/success/${res.data.issue_id}`)
        }
        else{

        }
    }

  return (
    <>
        <div className='wrapper-title mt-3'>
            <h1>Help Desk</h1>
            <p>We hear what you say..! and Do what you think</p>
        </div>
        <div className='wrapper-main mt-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name<sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"  onChange={(e)=> setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address<sup>*</sup></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile<sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number"  onChange={(e)=> setMobile(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Issue Type<sup>*</sup></Form.Label>
                    <Form.Select 
                        aria-label="Select the options" 
                        onChange={(e)=>{setIssueType(e.target.value)}}
                    >
                        
                        {/* Displaying the issue type from the db using useeffect */}
                        
                        {
                            issueTypes.map((e,i) => {
                                return <option value={e} key={i}> {e}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Issue Title<sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="Enter your issue title" onChange={(e)=> setIssueTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <FloatingLabel controlId="floatingTextarea2" label="Issue Description">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        onChange={(e)=> setIssueDescription(e.target.value)}
                        />
                    </FloatingLabel>
                </Form.Group>
                
                <div className='mt-3' style={{'textAlign':'center'}}>
                    <Button variant="primary" onClick={()=>handleSubmit()}>
                        Submit
                    </Button>
                </div>
                <Form.Group>
                    <Form.Text className="text-muted">
                            <sup>*</sup>We'll never share your personal info with anyone else.
                        </Form.Text>
                    </Form.Group>
            </Form>
        </div>
        
    </>
  )
}
