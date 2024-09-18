import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

function App() {
  return (
    <Router>
      <div id='bg' className="App">
        <h1 className='text-center mt-5' style={{color:'magenta'}}>Employee Management Portal</h1>
        <div style={{paddingLeft: '300px'}} className='mt-5' >
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
        </div>           
      </div>
    </Router>
  );
}

export default App;
