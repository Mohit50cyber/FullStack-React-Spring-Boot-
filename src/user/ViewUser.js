import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {

    const[user,setUsers]=useState({
        name:"",
        username:"",
        email:""
      })

      const {id} =useParams()

      useEffect(() =>
      {loadUsers();

      })

      const loadUsers=async() =>{
        const result = await axios.get("http://localhost:3030/user/${id}")
        setUsers(result.data);
       }
  return (
    
     <div className='container'>
       <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> User Details</h2>  
          <div className='card'>
            <div className='"card-header'>
                Details of User Id:
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Name:</b>
                    </li>
                    <li className='list-group-item'>
                        <b>UserName:</b>
                    </li>
                    <li className='list-group-item'>
                        <b>Email:</b>
                    </li>
                </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to={"/"}>Back To Home </Link>
          </div>
          </div>
          </div>
    
  )
}