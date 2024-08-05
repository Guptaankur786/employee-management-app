import { createContext, useState, useEffect } from 'react';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getEmployees();
            setEmployees(response.data);
        })();
    }, []);

    const addEmployee = async (employee) => {
        const response = await createEmployee(employee);
        setEmployees([...employees, response.data]);
    };

    const editEmployee = async (id, updatedEmployee) => {
        const response = await updateEmployee(id, updatedEmployee);
        setEmployees(employees.map(emp => (emp._id === id ? response.data : emp)));
    };

    const removeEmployee = async (id) => {
        await deleteEmployee(id);
        setEmployees(employees.filter(emp => emp._id !== id));
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, editEmployee, removeEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeContext;
