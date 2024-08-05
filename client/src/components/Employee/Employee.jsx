const Employee = ({ employee }) => (
  <div>
    <h2>{employee.name}</h2>
    <p>Age: {employee.age}</p>
    <p>Email: {employee.email}</p>
    <p>Date of Birth: {employee.dob}</p>
    <p>Address: {employee.address}</p>
    <img src={employee.photo} alt="Employee" width="100" />
  </div>
);

export default Employee;
