import { EmployeeProvider } from './context/EmployeeContext';
import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';

const App = () => (
    <EmployeeProvider>
        <div className="App">
            <h1>Employee Management System</h1>
            <EmployeeList />
        </div>
    </EmployeeProvider>
);

export default App;