
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [deleteErr, setDeleteErr] = useState('');
  const navigate=useNavigate()

  const gotoEmployee =(empObj)=>{
    navigate("/employee",{state:empObj})
  }

  const gotoEditEmployee=(empObj)=>{
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmployeeById=async(id)=>{
    try {
      let res=await axios.delete(`http://localhost:5000/employees/${id}`)

      if(res.status===200){
        getEmps();
        setDeleteErr('');
      } else {
        setDeleteErr('Failed to delete employee');
      }
    } catch(error) {
      setDeleteErr(error.response?.data?.error || error.message || 'Error deleting employee');
    }
  }
 //get all employees
    async function getEmps() {
      let res = await axios.get("http://localhost:5000/employees");
      if (res.status === 200) {
        let resObj=res.data
        setEmps(resObj.employee || []);
      }
    }
//get all employees on page load
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      {deleteErr && <p className="text-red-500 text-center text-xl my-4">{deleteErr}</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 shadow-2xl">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 shadow-2xl">
            <p>{empObj.name}</p>
            <p className="mb-4">{empObj.email}</p>
            <div className="flex  justify-around"> 
              <button onClick={()=>gotoEmployee(empObj)} className="bg-green-600 p-1 rounded-2xl text-white">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)}className="bg-yellow-600 p-1 rounded-2xl text-white">Edit</button>
              <button onClick={()=>deleteEmployeeById(empObj._id)}className="bg-red-600 p-1 rounded-2xl text-white">Delete</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
