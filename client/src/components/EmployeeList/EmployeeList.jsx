import { useContext, useState } from "react";
import EmployeeContext from "../../context/EmployeeContext";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { format, parseISO } from "date-fns";
import Modal from "react-modal";
import "./EmployeeList.css"; 

const EmployeeList = () => {
  const { employees, removeEmployee } = useContext(EmployeeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const openModal = (employee) => {
    setCurrentEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentEmployee(null);
    setIsModalOpen(false);
  };

  return (
    <div className="employee-list-container">
      <div className="employee-list-header">
        <h2>Employee List</h2>
        <button onClick={() => openModal(null)}>Add Employee</button>
      </div>
      <ul className="employee-details-container">
        {employees.map((employee) => (
          <li className="employee-item" key={employee._id}>
            <div className="detail">
              <div>
                <span>Name:</span> {employee.name}
              </div>
              <div>
                <span>Age:</span> {employee.age}
              </div>
              <div>
                <span>Email:</span> {employee.email}
              </div>
              <div>
                <span>DOB:</span>{" "}
                {employee.dob
                  ? format(parseISO(employee.dob), "dd/MM/yyyy")
                  : ""}
              </div>
              <div>
                <span>Address:</span>:{employee.address}
              </div>
              <img src={employee.photo} alt="Employee Image" />
            </div>
            <div>
              <button onClick={() => openModal(employee)}>Edit</button>
              <button onClick={() => removeEmployee(employee._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button onClick={closeModal}>x</button>
        <EmployeeForm employee={currentEmployee} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default EmployeeList;
