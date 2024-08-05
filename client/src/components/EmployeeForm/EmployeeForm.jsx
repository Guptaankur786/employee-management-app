import { useState, useContext } from "react";
import EmployeeContext from "../../context/EmployeeContext";
import { format, parseISO } from "date-fns";
import "./EmployeeForm.css";

const EmployeeForm = ({ employee, onClose }) => {
  const { addEmployee, editEmployee } = useContext(EmployeeContext);
  const [formData, setFormData] = useState(
    employee || {
      name: "",
      age: "",
      email: "",
      dob: "",
      address: "",
      photo: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employee) {
      await editEmployee(employee._id, formData);
    } else {
      await addEmployee(formData);
    }
    onClose();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Name:<span className="required">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        pattern="^[A-Za-z\s]+$"
      />
      <label>
        Age:<span className="required">*</span>
      </label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <label>
        Email:<span className="required">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.dob ? format(parseISO(formData.dob), "yyyy-MM-dd") : ""}
        onChange={handleChange}
      />
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <label>Photo:</label>
      <input
        type="file"
        name="photo"
        accept="image/png, image/jpeg"
        value={formData.photo}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EmployeeForm;
