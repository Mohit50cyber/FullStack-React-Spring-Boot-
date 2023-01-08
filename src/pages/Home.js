import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

export default function Home() {

   const[users,setUsers] = useState([])
   useEffect(() =>{
    loadUsers();
   },[])
   const {id} =useParams()
   
   const loadUsers=async() =>{
    const result = await axios.get("http://localhost:3030/user")
    setUsers(result.data);
   }

   const deleteUser= async (id) =>{
    await axios.delete(`http://localhost:3030/user/${id}`)
    loadUsers()
  }
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users,index) =>
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                            <td>
                                <button className='btn btn-success mx-2' to={`/ViewUser/${users.id}`}>View</button>
                                <Link className='btn btn-dark mx-2'  to={`/edituser/${users.id}`}>Edit</Link>
                                <button className='btn btn-danger mx-2'  onClick={() =>deleteUser(users.id)}>Delete</button>
                            </td>
                        </tr>
                        )}
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
