import { useEffect,useState } from "react"
import { AiOutlineDelete } from "react-icons/ai";

import axios from 'axios'

function Needer() {
  const [data ,setData] = useState()
  const fetchData = ()=>{
    axios.get('http://localhost:9000/blood-request-get')
  .then(response => {
    console.log('Response:', response.data);
    setData(response.data.data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }
  useEffect(() => {fetchData()},[])

  const handleDelete = async(id)=>{
    console.log('Item deleted successfully');
    axios.delete(`http://localhost:9000/blood-request-delete/${id}`)
  .then(response => {
    console.log(response,'Item deleted successfully');
    fetchData()
  })
  .catch(error => {
    console.error('An error occurred while deleting the item', error);
   
  });
  }
  return (
  <div className="m-1">
  <h3>
    Needer page
  </h3>
  <div class="table-responsive">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">E-mail</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Aadhar Card Number</th>
      <th scope="col">Blood Group</th>
    </tr>
  </thead>
  <tbody>
  {
      data ? data.map((elm,ind)=>
      
    <tr>
      <th scope="row">{ind +1}</th>
      <td>{elm.firstName}</td>
      <td>{elm.lastName}</td>
      <td>{elm.gender}</td>
      <td>{elm.email}</td>
      <td>{elm.address}</td>
      <td>{elm.mobile}</td>
      <td>{elm.aadhar}</td>
      <td>{elm.group}</td>
      <td><AiOutlineDelete onClick={()=>handleDelete(elm._id)} className="text-danger cursor-pointer"/></td>
 
    
    </tr>
      )
      :"No Data Found"
    }
  </tbody>
</table>
  </div>
  </div>

  )
}

export default Needer