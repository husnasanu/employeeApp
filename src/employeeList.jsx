import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from './api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/add" className='fw-bolder' id='link'>Add Employee</Link>
      <table id='table'className='shadow p-3'>
        <thead>
          <tr>
            <th className='th'>ID</th>
            <th className='th'>Username</th>
            <th className='th'>Email</th>
            <th className='th'>Status</th>
            <th className='th'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr className='pt-3' key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.userName}</td>
              <td>{employee.email}</td>
              <td>{employee.status}</td>
              <td>

                <Link to={`/edit/${employee.id}`}>Edit</Link>
             <button onClick={() => handleDelete(employee.id)}  className='btn ms-5' >   <i  class="fa-solid fa-trash text-danger"></i>  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
