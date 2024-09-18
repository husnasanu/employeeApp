import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from './api';

const EditEmployee = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('active');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      const employee = await getEmployeeById(id);
      setUserName(employee.userName);
      setEmail(employee.email);
      setStatus(employee.status);
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email) {
      setError('Please fill out all fields');
      return;
    }

    const updatedEmployee = { userName, email, status };
    await updateEmployee(id, updatedEmployee);
    navigate('/');
  };

  return (
    <div>
      <h2 className='text-primary'>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <label className='form' style={{marginRight:'50px'}}>Username:</label>
        <input className='w-75' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <br />

        <label className='form' style={{marginRight:'90px'}}>Email:</label>
        <input className='w-75' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />

        <label className='form' style={{marginRight:'80px'}}>Status:</label>
        <select className='w-75' value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />

        <button className='btn btn-success' type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
