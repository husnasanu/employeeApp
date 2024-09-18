const API_URL = 'http://localhost:3000/employees';

// Fetch all employees
export const getEmployees = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// Fetch a single employee by ID
export const getEmployeeById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

// Add a new employee
export const addEmployee = async (employee) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
  return await response.json();
};

// Update an existing employee
export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
  return await response.json();
};

// Delete an employee
export const deleteEmployee = async (id) => {
  return await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
